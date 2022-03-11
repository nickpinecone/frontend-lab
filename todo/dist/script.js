"use strict";
const addButton = document.querySelector(".add");
const inputTask = document.querySelector("#entered-task");
const tasksContainer = document.querySelector(".tasks-container");
const buttonPanel = document.querySelector(".button-list");
let curTasksList = document.querySelector(".tasks");
let tasksArray = [];
tasksArray.push(curTasksList);
const maxNumOfTasks = 11;
addButton.addEventListener("click", addTask);
inputTask.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});
inputTask.addEventListener("mousedown", () => {
    inputTask.style.backgroundColor = "white";
});
function addButtonToPanel() {
    var _a;
    let buttonNumber = Number((_a = buttonPanel.lastElementChild) === null || _a === void 0 ? void 0 : _a.textContent) + 1;
    let newButton = document.createElement("button");
    newButton.classList.add("numeration");
    newButton.textContent = String(buttonNumber);
    buttonPanel.appendChild(newButton);
    newButton.addEventListener("click", () => {
        curTasksList.style.display = "none";
        curTasksList = tasksArray[buttonNumber - 1];
        curTasksList.style.display = "block";
    });
}
function checkOverflow() {
    const lastUiChild = tasksContainer.lastElementChild;
    const lastUlChildCount = lastUiChild.childElementCount;
    if (lastUiChild !== curTasksList) {
        curTasksList.style.display = "none";
        curTasksList = lastUiChild;
        curTasksList.style.display = "block";
    }
    if (lastUlChildCount == 0) {
        addButtonToPanel();
    }
    if (lastUlChildCount >= maxNumOfTasks) {
        let newList = document.createElement("ul");
        newList.classList.add("tasks");
        tasksContainer.appendChild(newList);
        tasksArray.push(newList);
        curTasksList.style.display = "none";
        curTasksList = newList;
        addButtonToPanel();
    }
}
function addTask() {
    if (inputTask.value == "") {
        inputTask.style.backgroundColor = "red";
        return;
    }
    checkOverflow();
    const listItem = document.createElement("li");
    const taskName = inputTask.value;
    inputTask.value = "";
    const listName = document.createElement("span");
    listName.textContent = taskName;
    listItem.appendChild(listName);
    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.classList.add("remove");
    listItem.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        curTasksList.removeChild(listItem);
    });
    curTasksList.appendChild(listItem);
}
