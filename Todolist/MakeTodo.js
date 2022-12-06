export class MakeTodo {
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
}
