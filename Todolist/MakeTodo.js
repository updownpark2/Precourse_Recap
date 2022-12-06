export class MakeTodo {
  #userTodoArr = [];

  makeFormAndInput($target) {
    const form = document.createElement(`form`);
    form.id = `FORM`;
    $target.appendChild(form);
    this.input(form);
  }
  input(form) {
    const input = document.createElement(`input`);
    form.appendChild(input);
    input.id = `INPUT`;
    input.placeholder = `Todo`;
  }

  makeUl($target) {
    const ul = document.createElement(`ul`);
    ul.id = `UL`;
    $target.appendChild(ul);
  }

  setUserTodoArr() {
    if (localStorage.getItem(`todo`) === null) {
      this.#userTodoArr = [];
      return;
    }
    this.#userTodoArr = JSON.parse(localStorage.getItem(`todo`));
  }

  saveUserTodo(userTodo) {
    this.setUserTodoArr();
    this.#userTodoArr.push(userTodo);
    localStorage.setItem(`todo`, JSON.stringify(this.#userTodoArr));
  } //여기서 저장
}
