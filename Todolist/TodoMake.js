export class TodoMake {
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
}
