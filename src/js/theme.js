let theme = localStorage.getItem("theme");

if (!theme) {
  setTheme("light");
}
setTheme(theme);

export default function changeTheme() {
  if (theme === "light") {
    setTheme("dark");
  } else setTheme("light");
}

function setTheme(themeMode) {
  const moonIcon = document.querySelector(".theme-btn-icon-moon");
  const sunIcon = document.querySelector(".theme-btn-icon-sun");

  if (themeMode === "light") {
    moonIcon.classList.remove("theme-btn-icon-moon--hide");
    sunIcon.classList.add("theme-btn-icon-sun--hide");
  } else {
    moonIcon.classList.add("theme-btn-icon-moon--hide");
    sunIcon.classList.remove("theme-btn-icon-sun--hide");
  }
  theme = themeMode;
  document.body.className = "";
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}
