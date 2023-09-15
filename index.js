const countButton = document.querySelector(".btn-count");
const markAll = document.querySelector(".mark-all");
const unread = document.querySelectorAll(".unread");
const description = document.querySelectorAll(".description");

markRead();
btnMarkAllRead();

function markRead() {
  unread.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("read");
      item.classList.add("none");
    });
  });
}
function btnMarkAllRead(item) {
  markAll.addEventListener("click", () => {
    unread.forEach((item) => {
      item.classList.add("read");
    item.classList.add("none")
    });
  });
}
