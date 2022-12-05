export class InputView {
  #input;

  setInput(callback) {
    const form = document.getElementById(`FORM`);
    form.addEventListener("submit", callback);
  }

  getInput() {
    return this.#input;
  }
}
