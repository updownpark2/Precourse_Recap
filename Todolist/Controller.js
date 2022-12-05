import { TodoMake } from "./TodoMake.js";
import InputView from "./InputView.js";

export class Controller {
  #todoMake = new TodoMake();

  start($target) {
    this.makeFormAndInput($target);
    this.getUserInput();
  }

  makeFormAndInput($target) {
    this.#todoMake.makeForm($target);
  }

  getUserInput() {
    InputView((event) => {
      event.preventDefault();
      console.log(event.target);
    });
  }
}
