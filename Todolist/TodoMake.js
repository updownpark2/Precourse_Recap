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
  }
}
