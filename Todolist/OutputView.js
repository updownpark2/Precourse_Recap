export class OutputView {
  userTodo() {
    const ul = document.querySelector("ul");
    const userTodoArr = JSON.parse(localStorage.getItem("todo"));
    userTodoArr.forEach((todo) => {
      ul.innerHTML = `<li>${todo}</li>`;
    });
  }
}
