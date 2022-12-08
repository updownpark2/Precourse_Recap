import { MakeTodo } from "./makeTodo.js";
import { InputView } from "./InputView.js";
import { OutputView } from "./OutputView.js";

const makeTodo = new MakeTodo();
const inputView = new InputView();
const outputView = new OutputView();

export class Controller {
  settingToGetTodo($target) {
    makeTodo.makeFormAndInput($target);
    makeTodo.makeUl($target);
    this.paintTodo();
  }

  start($target) {
    this.settingToGetTodo($target);
    this.getTodo();
  }

  getTodo() {
    inputView.getUserTodo((event) => {
      event.preventDefault();
      const userTodo = event.target[0].value;
      this.resetInput(event);
      this.saveTodo(userTodo);
      this.paintTodo();
    });
  }

  saveTodo(userTodo) {
    makeTodo.saveUserTodo(userTodo);
  }

  resetInput(event) {
    event.target[0].value = ``;
  }

  paintTodo() {
    outputView.paintTodo();
  }
}
