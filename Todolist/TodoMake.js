export class TodoMake {
  #userTodoArr = [];

  makeForm($target) {
    const form = document.createElement(`form`);
    form.id = `FORM`;
    $target.appendChild(form);
    this.makeInput(form);
  }

  makeInput(form) {
    const Input = document.createElement(`input`);
    form.appendChild(Input);
    Input.placeholder = `What To do?`;
    this.makeButton(form);
  }
  makeButton(form) {
    const Button = document.createElement(`button`);
    form.appendChild(Button);
    Button.innerText = `제출`;
  }

  makeTodobox($target) {
    const todoBox = document.createElement("div");
    $target.appendChild(todoBox);
  }

  makeUl(todoBox) {
    const ul = document.createElement("ul");
    todoBox.appendChild(ul);
  }

  makeUserTodoArr(userTodo) {
    const getItem = localStorage.getItem("todo");
    this.#userTodoArr = [...getItem, userTodo];
  }

  saveLocal(userTodo) {
    this.makeUserTodoArr(userTodo);
    const userTodoArr = JSON.stringify(this.#userTodoArr);
    localStorage.setItem("todo", userTodoArr);
  }
}
