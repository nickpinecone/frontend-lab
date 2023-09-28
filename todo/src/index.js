
import './styles.css'

const makeTodo = (function (_description, _dueDate, _priority, _id) {
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;
    let id = _id;
    let done = false;


    function getInformation() {
        return {
            description,
            dueDate,
            priority,
            id,
            done,
        };
    }

    function changeInfo(newDescription, newDueDate, newPriority) {
        description = newDescription;
        dueDate = newDueDate;
        priority = newPriority;
    }

    function changeDone(value) {
        done = value;
    }

    return { getInformation, changeInfo, changeDone };
});


const makeProject = (function (_title, _id) {
    let title = _title;
    let todos = [];
    let id = _id;

    function getLastTodo() {
        return todos[todos.length - 1];
    }

    function getTodo(id) {
        for (let todo of todos) {
            if (todo.getInformation().id == id) {
                return todo;
            }
        }

        return null;
    }

    function addTodo(description, dueDate, priority) {
        let id = 0;
        if (todos.length != 0) {
            id = getLastTodo().getInformation().id + 1;
        }

        let todo = makeTodo(description, dueDate, priority, id);

        todos.push(todo);
    }

    function removeTodo(id) {
        let todo = getTodo(id);
        let index = todos.indexOf(todo);

        if (index > -1) {
            todos.splice(index, 1);
        }
    }

    function getInformation() {
        return {
            title,
            todos,
            id,
        }
    }

    function changeInfo(newTitle) {
        title = newTitle;
    }

    // For local storage
    function getObject() {
        let array = []
        for (let todo of todos) {
            array.push(todo.getInformation());
        }

        return {
            title,
            array,
            id,
        }
    }


    return { addTodo, getInformation, getTodo, changeInfo, removeTodo, getObject };
});

const app = (function () {
    let projects = [];
    let activeProject;

    init();

    function getLastProject() {
        return projects[projects.length - 1];
    }

    function getProject(id) {
        for (let project of projects) {
            if (project.getInformation().id == id) {
                return project;
            }
        }

        return null;
    }

    function addProject(title) {
        let id = 0;
        if (projects.length != 0) {
            id = getLastProject().getInformation().id + 1;
        }

        let project = makeProject(title, id);

        projects.push(project);

        setActiveProject(id);
    }

    function removeProject(id) {
        let project = getProject(id);
        let index = projects.indexOf(project);

        if (index > -1) {
            projects.splice(index, 1);
        }
    }

    function init() {
        addProject("Default Project");
        activeProject.addTodo("Default Todo", "1970-01-01", 1);
    }

    function getInformation() {
        return {
            projects,
            activeProject
        };
    }

    function getActiveProject() {
        return activeProject;
    }

    function setActiveProject(projectId) {
        for (let project of projects) {
            if (project.getInformation().id == projectId) {
                activeProject = project;
                break;
            }
        }
    }

    // For local storage
    function getObject() {
        let array = [];

        for (let project of projects) {
            array.push(project.getObject());
        }

        return {
            array,
        }
    }

    return { addProject, getInformation, getProject, removeProject, getActiveProject, getObject, setActiveProject };
})();

const dom = (function () {
    let projectContainer = document.querySelector(".project-container");
    let todoContainer = document.querySelector(".todo-container");
    let addTodoButton = document.querySelector("button.add.todo");
    let addProjectButton = document.querySelector("button.add.project");

    bindButtons();

    function bindButtons() {
        addProjectButton.addEventListener("click", () => {
            app.addProject("None");
            renderProjects();
            renderTodos(app.getActiveProject().getInformation().id);
        });

        addTodoButton.addEventListener("click", () => {
            app.getActiveProject().addTodo("None", "1970-01-01", 1);
            renderTodos(app.getActiveProject().getInformation().id);
        });
    }

    function createProject(title, id) {
        let project = document.createElement("div");
        project.classList.add("project");
        project.setAttribute("data-id", id);

        project.insertAdjacentHTML(
            "afterbegin",
            `
            <input type="text" value="${title}" id="title" readonly>
            <button class="edit">⚙️</button>
            <button class="remove">🗑️</button>
            `
        );

        project.querySelector("input").addEventListener("click", () => {
            renderTodos(id);
            app.setActiveProject(id);
            showActiveProject(id);
        });

        project.querySelector("button.remove").addEventListener("click", () => {
            app.removeProject(id);
            projectContainer.removeChild(project);

            if (project.classList.contains("active") && projectContainer.childElementCount > 0) {
                let firstId = projectContainer.children[0].getAttribute("data-id");

                renderTodos(firstId);
                app.setActiveProject(firstId);
                showActiveProject(firstId);
            }
            else if (projectContainer.childElementCount <= 0) {
                todoContainer.replaceChildren([]);
            }
        });

        return project;
    }

    function showActiveProject(id) {
        for (let project of projectContainer.children) {
            project.classList.remove("active");

            if (project.getAttribute("data-id") == id) {
                project.classList.add("active");
            }
        }

    }

    function renderProjects() {
        projectContainer.replaceChildren([]);

        for (let project of app.getInformation().projects) {
            let projectDiv = createProject(project.getInformation().title, project.getInformation().id);
            projectContainer.appendChild(projectDiv);

            if (project.getInformation().id == app.getActiveProject().getInformation().id) {
                projectDiv.classList.add("active");
            }
        }
    }

    function createTodo(description, dueDate, priority, id, done) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.setAttribute("data-id", id);

        todo.insertAdjacentHTML(
            "afterbegin",
            `
            <input type="checkbox" name="done-check" id="done-check" ${done ? "checked" : ""}>
            <input name="description" id="description" value="${description}" maxlength="120" readonly>
            <label>
                📅
                <input type="date" name="due-date" id="due-date" value="${dueDate}" readonly>
            </label>
            <label>
                ⚠️
                <input type="number" name="priority" id="priority" value="${priority}" min="1" max="255" size="4"
                    readonly>
            </label>
            <button class="edit">⚙️</button>
            <button class="remove">🗑️</button>
            `
        );

        todo.querySelector("#done-check").addEventListener("click", (event) => {
            app.getActiveProject().getTodo(id).changeDone(event.target.checked);
        });

        todo.querySelector("button.remove").addEventListener("click", () => {
            app.getActiveProject().removeTodo(id);
            todoContainer.removeChild(todo);
        });

        return todo;

    }

    function renderTodos(projectId) {
        todoContainer.replaceChildren([]);

        var todos = app.getProject(projectId).getInformation().todos;

        for (let todo of todos) {
            let todoDiv = createTodo(todo.getInformation().description, todo.getInformation().dueDate, todo.getInformation().priority, todo.getInformation().id, todo.getInformation().done);
            todoContainer.appendChild(todoDiv);
        }
    }


    return { renderProjects, renderTodos };
})();

dom.renderProjects();
dom.renderTodos(app.getActiveProject().getInformation().id);


