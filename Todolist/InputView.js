export class InputView {
  getUserTodo(callback) {
    const form = document.getElementById(`FORM`);
    form.addEventListener(`submit`, callback);
  }
}
