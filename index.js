const countButton = document.querySelector(".btn-count");
const markAll = document.querySelector(".mark-all");
const unReadMessages = document.querySelectorAll(".unread");

countButton.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnReadMessages = document.querySelectorAll(".unread");
    countButton.innerText = newUnReadMessages.length;
  });
});

markAll.addEventListener("click", () => {
  unReadMessages.forEach((message) => {
    message.classList.remove("unread");
    const newUnReadMessages = document.querySelectorAll(".unread");
    countButton.innerText = newUnReadMessages.length;
  });
});
