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

  pushTodo(userTodo) {
    this.#userTodoArr.push(userTodo);
  }

  saveToLocal() {
    const jsonString = this.arrToJoson();
    localStorage.setItem("todo", jsonString);
  }

  arrToJoson() {
    const jsonString = JSON.stringify(this.#userTodoArr);
    return jsonString;
  }
}
