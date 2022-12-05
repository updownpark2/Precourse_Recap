export class OutputView {
  userTodo() {
    const ul = document.getElementById(`UL`);
    const userTodoArr = JSON.parse(localStorage.getItem("todo"));
    console.log(userTodoArr);
    userTodoArr.forEach((todo) => {
      const li = document.createElement(`li`);
      ul.appendChild(li);
      li.innerHTML = `${todo}`;
    });
  }
}
