"use strict";
const addButton = document.querySelector(".add");
const inputTask = document.querySelector("#entered-task");
const tasksList = document.querySelector(".tasks");
addButton.addEventListener("click", addTask);
inputTask.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});
inputTask.addEventListener("mousedown", () => {
    inputTask.style.backgroundColor = "white";
});
function addTask() {
    if (inputTask.value == "") {
        inputTask.style.backgroundColor = "orangered";
        return;
    }
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
        tasksList.removeChild(listItem);
    });
    tasksList.appendChild(listItem);
}
