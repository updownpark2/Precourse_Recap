const InputView = require("./InputView");

class Controller {
  getMoney() {
    InputView.getMoney((money) => {});
  }
}

module.exports = Controller;
