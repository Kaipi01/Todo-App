import crossIcon from "../images/icon-cross.svg";
import checkIcon from "../images/icon-check.svg";

const todoItemsInfo = document.querySelector(".todo__items-info-number");
const todoOptions = document.querySelector(".todo__options");
const todoTip = document.querySelector(".todo__tip");

let itemsNumber = 5;
let isNewTaskComplete = false;


export function remove(task) {
  task.remove();
  if (task.classList[1] !== "task--complete") {
    changeTasksNumberInfo("-");
  }
  checkTaskNodeNumber();
}

export function markAsComplete(task) {
  task.classList.toggle("task--complete");

  if (task.classList[1] === "task--complete") {
    changeTasksNumberInfo("-");
  } else {
    changeTasksNumberInfo("+");
  }
}

export function markInputCheck() {
  const inputBtnCheck = document.querySelector(".task__btn-check");
  inputBtnCheck.classList.toggle("task__btn-check--inputActive");
  isNewTaskComplete ? (isNewTaskComplete = false) : (isNewTaskComplete = true);
  console.log("isNewTaskComplete: " + isNewTaskComplete);
}

export function clearAllComplete() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.classList[1] === "task--complete") {
      task.remove();
    }
  });
  checkTaskNodeNumber();
}

export function add(name) {
  const todoList = document.querySelector(".todo__list");
  const task = document.createElement("li");
  const taskName = document.createElement("p");
  const checkBtn = document.createElement("btn");
  const checkBtnIcon = document.createElement("img");
  const deleteBtn = document.createElement("btn");
  const deleteBtnIcon = document.createElement("img");
  const tasks = document.querySelectorAll(".task");

  if (isNewTaskComplete) {
    task.className = "task task--complete";
  } else {
    task.className = "task";
    changeTasksNumberInfo("+");
  }

  taskName.className = "task__name";
  taskName.textContent = name;

  checkBtn.className = "btn task__btn-check";
  checkBtn.addEventListener("click", () => {
    markAsComplete(task);
  });
  checkBtnIcon.className = "task__btn-check-icon";
  checkBtnIcon.src = checkIcon;
  checkBtnIcon.alt = "task complete";

  deleteBtn.className = "btn task__btn-delete";
  deleteBtn.addEventListener("click", () => {
    remove(task);
  });
  deleteBtnIcon.src = crossIcon;
  deleteBtnIcon.alt = "delete task";

  checkBtn.append(checkBtnIcon);
  deleteBtn.append(deleteBtnIcon);
  task.append(checkBtn);
  task.append(taskName);
  task.append(deleteBtn);
  todoList.append(task);

  if (tasks.length === 0) {
    showTodoOptions();
  }
}

function checkTaskNodeNumber() {
  const tasks = document.querySelectorAll(".task");
  if (tasks.length === 0) {
    hideTodoOptions();
  }
}

function changeTasksNumberInfo(symbol) {
  symbol === "-" ? itemsNumber-- : itemsNumber++;
  todoItemsInfo.textContent = itemsNumber;
}

function hideTodoOptions() {
  todoOptions.classList.add("todo__options--hide");
  todoTip.classList.add("todo__tip--hide");
}

function showTodoOptions() {
  todoOptions.classList.remove("todo__options--hide");
  todoTip.classList.remove("todo__tip--hide");
}
