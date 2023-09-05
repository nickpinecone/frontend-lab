
const makeTodo = (function (_description, _dueDate, _priority) {
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;

    function getInformation() {
        return {
            description,
            dueDate,
            priority,
        };
    }

    return { getInformation };
});


const makeProject = (function (_title) {
    let title = _title;
    let todos = [];

    function addTodo(todo) {
        todos.push(todo);
    }

    function getInformation() {
        return {
            title,
            todos,
        }
    }

    return { addTodo, getInformation };
});


const app = (function () {
    let projects = [];
    let activeProject;

    init();

    function init() {
        let defaultProject = makeProject("Default Project");
        let defaultTodo = makeTodo("Default Todo", "01/01/1970", 1);

        defaultProject.addTodo(defaultTodo);
        addProject(defaultProject);

        activeProject = defaultProject;
    }

    function addProject(project) {
        projects.push(project);
    }

    return { addProject };
});