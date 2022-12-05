import { TodoMake } from "./TodoMake.js";
import { InputView } from "./InputView.js";
import { OutputView } from "./OutputView.js";

const todoMake = new TodoMake();
const inputView = new InputView();
const outputView = new OutputView();

export class Controller {
  start($target) {
    this.makeFormAndInput($target);
    this.makeTodoBoxAndUl($target);
    this.showAllTodo();
    this.getUserInput($target);
    this.onClickButton();
  }

  makeFormAndInput($target) {
    todoMake.makeForm($target);
  }
  makeTodoBoxAndUl($target) {
    todoMake.makeTodobox($target);
  }

  getUserInput() {
    inputView.setInput((event) => {
      event.preventDefault();
      const userTodo = event.target[0].value;
      event.target[0].value = ``;
      this.saveTodo(userTodo);
      this.showPlusTodo(userTodo);
    });
  }

  onClickButton() {
    const Button = document.querySelector(`li button`);
    Button.addEventListener("click", (event) => {
      console.log(event.target);
    });
  }
  saveTodo(userTodo) {
    todoMake.saveLocal(userTodo);
  }

  showAllTodo() {
    outputView.userTodo();
  }

  showPlusTodo(userTodo) {
    outputView.plusTodo(userTodo);
  }
}
