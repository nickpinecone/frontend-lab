
import './styles.css'

const makeTodo = (function (_description, _dueDate, _priority, _id) {
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;
    let id = _id;


    function getInformation() {
        return {
            description,
            dueDate,
            priority,
            id,
        };
    }

    function changeInfo(newDescription, newDueDate, newPriority) {
        description = newDescription;
        dueDate = newDueDate;
        priority = newPriority;
    }

    return { getInformation, changeInfo };
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
        logTodos();

        return {
            title,
            todos,
            id,
        }
    }

    function changeInfo(newTitle) {
        title = newTitle;
    }

    // DEBUG
    function logTodos() {
        console.log("START LOG TODOS");
        for (let todo of todos) {
            console.log(todo.getInformation());
        }
        console.log("END LOG TODOS");
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

        activeProject = project;
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
        logProjects();

        return {
            projects,
            activeProject
        };
    }

    function getActiveProject() {
        return activeProject;
    }

    // DEBUG
    function logProjects() {
        console.log("START LOG PROJECTS");
        for (let project of projects) {
            console.log(project.getInformation());
        }
        console.log("END LOG PROJECTS");
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

    return { addProject, getInformation, getProject, removeProject, getActiveProject, getObject };
})();

const dom = (function () {
    let projectContainer = document.querySelector(".project-container");
    let todoContainer = document.querySelector(".todo-container");

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
            console.log("Hello");
            renderTodos(id);
        });

        return project;
    }

    function renderProjects() {
        for (let project of app.getInformation().projects) {
            let projectDiv = createProject(project.getInformation().title, project.getInformation().id);
            projectContainer.appendChild(projectDiv);
        }
    }

    function createTodo(description, dueDate, priority, id) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.setAttribute("data-id", id);

        todo.insertAdjacentHTML(
            "afterbegin",
            `
            <input type="checkbox" name="done-check" id="done-check">
            <input name="description" id="description" value="${description}" maxlength="120" disabled>
            <label>
                📅
                <input type="date" name="due-date" id="due-date" value="${dueDate}" disabled>
            </label>
            <label>
                ⚠️
                <input type="number" name="priority" id="priority" value="${priority}" min="1" max="255" size="4"
                    disabled>
            </label>
            <button class="edit">⚙️</button>
            <button class="remove">🗑️</button>
            `
        );

        return todo;

    }

    function renderTodos(projectId) {
        todoContainer.replaceChildren([]);

        var todos = app.getProject(projectId).getInformation().todos;

        for (let todo of todos) {
            let todoDiv = createTodo(todo.getInformation().description, todo.getInformation().dueDate, todo.getInformation().priority, todo.getInformation().id);
            todoContainer.appendChild(todoDiv);
        }
    }


    return { renderProjects, renderTodos };
})();
app.addProject("Important Stuff");
app.getActiveProject().addTodo("Buy Milk", "1970-01-01", 2);

dom.renderProjects();
dom.renderTodos(app.getActiveProject().getInformation().id);


// app.getActiveProject().getTodo(0).changeInfo("Sell Bread", "20/20/20", 8);
// app.getInformation();

// let storage = (JSON.stringify(app.getObject()));
// let object = JSON.parse(storage);
// console.log(object);
