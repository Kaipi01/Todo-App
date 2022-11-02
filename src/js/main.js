import changeTheme from "./theme";
import Sortable from "sortablejs";
import * as sort from "./filterTasks";
import * as tasks from "./tasks";

const themeBtn = document.querySelector(".theme-btn"),
  checkBtns = document.querySelectorAll(".task__btn-check"),
  taskDeleteBtns = document.querySelectorAll(".task__btn-delete"),
  clearTaksCompleteBtn = document.querySelector(".todo__items-clear"),
  taskAddInput = document.querySelector(".todo__input"),
  sortBtnAll = document.querySelector(".todo__sort-btn-all"),
  sortBtnActive = document.querySelector(".todo__sort-btn-active"),
  sortBtnCompleted = document.querySelector(".todo__sort-btn-completed"),
  todoList = document.querySelector(".todo__list"),
  inputBtnCheck = document.querySelector(".task__btn-check");

Sortable.create(todoList);

themeBtn.addEventListener("click", changeTheme);

clearTaksCompleteBtn.addEventListener("click", tasks.clearAllComplete);

inputBtnCheck.addEventListener("click", tasks.markInputCheck);

sortBtnAll.addEventListener("click", (e) => {
  sort.byAll(e);
});

sortBtnActive.addEventListener("click", (e) => {
  sort.byActive(e);
});

sortBtnCompleted.addEventListener("click", (e) => {
  sort.byCompleted(e);
});

checkBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const task = btn.parentElement;
    if (task.classList.contains("task")) {
      tasks.markAsComplete(task);
    }
  });
});

taskDeleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const task = btn.parentElement;
    tasks.remove(task);
  });
});

taskAddInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && taskAddInput.value !== "") {
    const taskName = taskAddInput.value;
    tasks.add(taskName);
    taskAddInput.value = "";
  }
});
