import { Controller } from "./Controller.js";

export default class App {
  make() {
    const box = document.getElementById("box");
    const controller = new Controller();
    controller.start(box);
  }
}
