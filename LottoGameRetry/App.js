const Controller = require("./Controller");

class App {
  play() {
    const controller = new Controller();
    controller.getMoney();
  }
}

module.exports = App;
