const addButton: HTMLButtonElement = document.querySelector(".add")!;
const inputTask: HTMLInputElement = document.querySelector("#entered-task")!;
const tasksContainer: HTMLDivElement = document.querySelector(".tasks-container")!;
const buttonPanel: HTMLDivElement = document.querySelector(".button-list")!;

const tasksArray: HTMLLIElement[] = [];
const tasksPagesArray: HTMLUListElement[] = [];

const maxNumOfTasks = 11;
let curPage = 0;

addButton.addEventListener("click", addTask);
inputTask.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        addTask();
    }
});

function showList(index: number) {
    if(buttonPanel.childElementCount != 0) {
        if(curPage < buttonPanel.childElementCount) {
            Array.from(buttonPanel.children)[curPage].classList.remove("selected");
        }
        Array.from(buttonPanel.children)[index].classList.add("selected");
    }

    curPage = index;

    tasksContainer.removeChild(tasksContainer.lastElementChild!);
    tasksContainer.appendChild(tasksPagesArray[index]);
}

function updatePage(listItem: HTMLLIElement) {
    let taskList = document.createElement("ul");
    taskList.classList.add("tasks");
    taskList.appendChild(listItem);
    tasksPagesArray.push(taskList);

    let newButton = document.createElement("button");
    let buttonNumber = Number(buttonPanel.lastElementChild?.textContent ?? 0) + 1;
    newButton.textContent = buttonNumber.toString();

    if(buttonNumber == 1) {
        newButton.classList.add("selected");
    }

    newButton.classList.add("numeration");
    newButton.addEventListener("click", () => {
        showList(buttonNumber-1);
    });
    buttonPanel.appendChild(newButton);
}

function groupTasks(listItem: HTMLLIElement) {
    if(tasksPagesArray.length == 0) {
        updatePage(listItem);
        tasksContainer.appendChild(tasksPagesArray[0]);
    }

    else if(tasksPagesArray[tasksPagesArray.length-1].childElementCount >= maxNumOfTasks) {
        updatePage(listItem);
        showList(curPage+1);
    }
    else {
        tasksPagesArray[tasksPagesArray.length-1].appendChild(listItem);
        if(curPage != tasksPagesArray.length-1) {
            showList(tasksPagesArray.length-1);
        }
    }
}

function createTaskElement() {
    const listItem = document.createElement("li");

    const taskName = inputTask.value;
    inputTask.value = "";
    const listName = document.createElement("span");
    listName.textContent = taskName;
    listItem.appendChild(listName);

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.classList.add("remove");

    removeButton.addEventListener("click", () => {
        let index = tasksArray.indexOf(listItem);
        tasksArray.splice(index, 1);
        rearrangeTasks();

        showList(curPage);
    });

    listItem.appendChild(removeButton);
    tasksArray.push(listItem);

    groupTasks(listItem);
}

function rearrangeButtonPanel() {
    let lastChild = buttonPanel.lastElementChild!;
    let index = Number(lastChild.textContent);
    if(tasksPagesArray.length < index) {
        buttonPanel.removeChild(lastChild);
    }

    if(curPage != 0 && curPage >= buttonPanel.childElementCount) {
        showList(curPage-1);
    }
}

function rearrangeTasks() {
    tasksPagesArray.length = 0;

    let numOfGroups = Math.floor(tasksArray.length / maxNumOfTasks);

    for (let i = 0; i < numOfGroups; i++) {
        let taskList = document.createElement("ul");
        taskList.classList.add("tasks");

        for (let j = 0; j < maxNumOfTasks; j++) {
            const task = tasksArray[j + i*maxNumOfTasks];
            taskList.appendChild(task);
        }

        tasksPagesArray.push(taskList);
    }

    if(numOfGroups*maxNumOfTasks < tasksArray.length) {
        let taskList = document.createElement("ul");
        taskList.classList.add("tasks");
        for (let i = numOfGroups*maxNumOfTasks; i < tasksArray.length; i++) {
            const task = tasksArray[i];
            taskList.appendChild(task);
        }
        tasksPagesArray.push(taskList);
    }

    rearrangeButtonPanel();
}

function addTask() {
    if(inputTask.value == "") {
        return;
    }

    createTaskElement();
}