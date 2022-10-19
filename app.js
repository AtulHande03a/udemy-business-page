const menuIcon = document.querySelector(".menu");
const closeSidebar = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
  // sidebar.classList.add("sidebar-toggle");
  // sidebarTitle.classList.remove("hide");
  sidebar.classList.remove("hide");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("hide");
});
