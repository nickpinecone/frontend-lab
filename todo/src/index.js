
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

    function addTodo(description, dueDate, priority, done) {
        let id = 0;
        if (todos.length != 0) {
            id = getLastTodo().getInformation().id + 1;
        }

        let todo = makeTodo(description, dueDate, priority, id);
        todo.changeDone(done);

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

    function saveToLocalStorage() {
        window.localStorage.projects = JSON.stringify(getObject());
    }

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
        if (!(window.localStorage.projects)) {
            addProject("Default Project");
            activeProject.addTodo("Default Todo", "", 0);
        }
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

    return { addProject, getInformation, getProject, removeProject, getActiveProject, getObject, setActiveProject, saveToLocalStorage };
})();

const dom = (function () {
    let projectContainer = document.querySelector(".project-container");
    let todoContainer = document.querySelector(".todo-container");
    let addTodoButton = document.querySelector("button.add.todo");
    let addProjectButton = document.querySelector("button.add.project");

    bindButtons();

    function readFromLocalStorage() {
        if (window.localStorage.projects) {
            let data = JSON.parse(window.localStorage.projects);

            console.log(data);

            for (let project of data.array) {
                app.addProject(project.title);
                for (let todo of project.array) {
                    app.getActiveProject().addTodo(todo.description, todo.dueDate, todo.priority, todo.done);
                }
            }
        }
    }

    function bindButtons() {
        addProjectButton.addEventListener("click", () => {
            app.addProject("None");
            renderProjects();
            renderTodos(app.getActiveProject().getInformation().id);

            let lastChild = projectContainer.children[projectContainer.children.length - 1];

            let titleInput = lastChild.querySelector("input");
            let editButton = lastChild.querySelector("button.edit");
            editButton.click();
            titleInput.focus();
            titleInput.setSelectionRange(0, titleInput.value.length);

            app.saveToLocalStorage();
        });

        addTodoButton.addEventListener("click", () => {
            if (projectContainer.childElementCount > 0) {
                app.getActiveProject().addTodo("None", "", 0, false);
                renderTodos(app.getActiveProject().getInformation().id);

                let lastChild = todoContainer.children[todoContainer.children.length - 1];

                let descriptionInput = lastChild.querySelector("input#description");
                let editButton = lastChild.querySelector("button.edit");
                editButton.click();
                descriptionInput.focus();
                descriptionInput.setSelectionRange(0, descriptionInput.value.length);

                app.saveToLocalStorage();
            }
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

        let titleInput = project.querySelector("input");
        titleInput.addEventListener("click", () => {
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

            app.saveToLocalStorage();
        });

        let editButton = project.querySelector("button.edit");
        editButton.addEventListener("click", () => {
            if (editButton.classList.contains("active")) {
                editButton.classList.remove("active");
                editButton.textContent = "⚙️";
                titleInput.readOnly = true;

                app.getProject(id).changeInfo(titleInput.value);
            }
            else {
                editButton.classList.add("active");
                editButton.textContent = "✅";
                titleInput.readOnly = false;
                titleInput.focus();
                titleInput.setSelectionRange(titleInput.value.length, titleInput.value.length);
            }

            app.saveToLocalStorage();
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
                <input type="number" name="priority" id="priority" value="${priority}" min="0" max="9" size="4"
                    readonly>
            </label>
            <button class="edit">⚙️</button>
            <button class="remove">🗑️</button>
            `
        );

        todo.querySelector("#done-check").addEventListener("click", (event) => {
            app.getActiveProject().getTodo(id).changeDone(event.target.checked);

            app.saveToLocalStorage();
        });

        todo.querySelector("button.remove").addEventListener("click", () => {
            app.getActiveProject().removeTodo(id);
            todoContainer.removeChild(todo);

            app.saveToLocalStorage();
        });

        let descriptionInput = todo.querySelector("input#description");
        let dateInput = todo.querySelector("input#due-date");
        let priorityInput = todo.querySelector("input#priority");
        let editButton = todo.querySelector("button.edit");
        editButton.addEventListener("click", () => {
            if (editButton.classList.contains("active")) {
                editButton.classList.remove("active");
                editButton.textContent = "⚙️";

                descriptionInput.readOnly = true;
                dateInput.readOnly = true;
                priorityInput.readOnly = true;

                app.getActiveProject().getTodo(id).changeInfo(descriptionInput.value, dateInput.value, priorityInput.value);
                todo.style.borderLeftColor = `hsl(0, 100%, ${100 - ((priorityInput.value) / 9 * 50)}%)`;
            }
            else {
                editButton.classList.add("active");
                editButton.textContent = "✅";

                descriptionInput.readOnly = false;
                dateInput.readOnly = false;
                priorityInput.readOnly = false;

                descriptionInput.focus();
                descriptionInput.setSelectionRange(descriptionInput.value.length, descriptionInput.value.length);
            }

            app.saveToLocalStorage();
        });

        return todo;

    }

    function renderTodos(projectId) {
        todoContainer.replaceChildren([]);

        var todos = app.getProject(projectId).getInformation().todos;

        for (let todo of todos) {
            let todoDiv = createTodo(todo.getInformation().description, todo.getInformation().dueDate, todo.getInformation().priority, todo.getInformation().id, todo.getInformation().done);
            todoContainer.appendChild(todoDiv);
            todoDiv.style.borderLeftColor = `hsl(0, 100%, ${100 - ((todo.getInformation().priority) / 9 * 50)}%)`;
        }
    }

    return { renderProjects, renderTodos, readFromLocalStorage };
})();

dom.readFromLocalStorage();
dom.renderProjects();
dom.renderTodos(app.getActiveProject().getInformation().id);


