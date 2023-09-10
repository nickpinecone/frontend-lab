
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
        activeProject.addTodo("Default Todo", "01/01/1970", 1);
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



app.getActiveProject().addTodo("Buy Milk", "01/01/9", 2);
app.getActiveProject().getTodo(0).changeInfo("Sell Bread", "20/20/20", 8);
app.getInformation();

let storage = (JSON.stringify(app.getObject()));
let object = JSON.parse(storage);
console.log(object);
