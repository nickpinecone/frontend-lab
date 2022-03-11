"use strict";
const addButton = document.querySelector(".add");
const inputTask = document.querySelector("#entered-task");
const tasksContainer = document.querySelector(".tasks-container");
const buttonPanel = document.querySelector(".button-list");
const tasksArray = [];
const tasksPagesArray = [];
const maxNumOfTasks = 11;
let curPage = 0;
addButton.addEventListener("click", addTask);
inputTask.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});
function showList(index) {
    curPage = index;
    tasksContainer.removeChild(tasksContainer.lastElementChild);
    tasksContainer.appendChild(tasksPagesArray[index]);
}
function updatePage(listItem) {
    var _a, _b;
    let taskList = document.createElement("ul");
    taskList.classList.add("tasks");
    taskList.appendChild(listItem);
    tasksPagesArray.push(taskList);
    let newButton = document.createElement("button");
    let buttonNumber = Number((_b = (_a = buttonPanel.lastElementChild) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : 0) + 1;
    newButton.textContent = buttonNumber.toString();
    newButton.classList.add("numeration");
    newButton.addEventListener("click", () => {
        showList(buttonNumber - 1);
    });
    buttonPanel.appendChild(newButton);
}
function groupTasks(listItem) {
    if (tasksPagesArray.length == 0) {
        updatePage(listItem);
        tasksContainer.appendChild(tasksPagesArray[0]);
    }
    else if (tasksPagesArray[tasksPagesArray.length - 1].childElementCount >= maxNumOfTasks) {
        updatePage(listItem);
    }
    else {
        tasksPagesArray[tasksPagesArray.length - 1].appendChild(listItem);
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
function rearrangeTasks() {
    tasksPagesArray.length = 0;
    let numOfGroups = Math.floor(tasksArray.length / maxNumOfTasks);
    for (let i = 0; i < numOfGroups; i++) {
        let taskList = document.createElement("ul");
        taskList.classList.add("tasks");
        for (let j = 0; j < maxNumOfTasks; j++) {
            const task = tasksArray[j + i * maxNumOfTasks];
            taskList.appendChild(task);
        }
        tasksPagesArray.push(taskList);
    }
    if (numOfGroups * maxNumOfTasks < tasksArray.length) {
        let taskList = document.createElement("ul");
        taskList.classList.add("tasks");
        for (let i = numOfGroups * maxNumOfTasks; i < tasksArray.length; i++) {
            const task = tasksArray[i];
            taskList.appendChild(task);
        }
        tasksPagesArray.push(taskList);
    }
    let lastChild = buttonPanel.lastElementChild;
    let index = Number(lastChild.textContent);
    if (tasksPagesArray.length < index) {
        buttonPanel.removeChild(lastChild);
    }
    if (curPage != 0 && curPage >= buttonPanel.childElementCount) {
        showList(curPage - 1);
    }
}
function addTask() {
    if (inputTask.value == "") {
        return;
    }
    createTaskElement();
}
