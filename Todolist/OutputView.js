export class OutputView {
  paintTodo() {
    const ul = document.getElementById(`UL`);
    const userTodo = JSON.parse(localStorage.getItem(`todo`));
    userTodo.forEach((todo) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = `${todo}`;
    });
  }
}
