export function byAll(e) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => task.classList.remove("task--hide"));
  markBtnAsActive(e.target);
}

export function byActive(e) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.classList.contains("task--complete")) {
      task.classList.add("task--hide");
    } else {
      task.classList.remove("task--hide");
    }
  });
  markBtnAsActive(e.target);
}

export function byCompleted(e) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.classList.contains("task--complete")) {
      task.classList.remove("task--hide");
    } else {
      task.classList.add("task--hide");
    }
  });
  markBtnAsActive(e.target);
}

function markBtnAsActive(btn) {
  const sortBtns = document.querySelectorAll(".todo__sort-btn");
  sortBtns.forEach((btn) => btn.classList.remove("todo__sort-btn--active"));
  btn.classList.add("todo__sort-btn--active");
}
