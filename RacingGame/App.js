const GameController = require("./GameController");

class App {
  play() {
    const gameController = new GameController();
    gameController.getCarName();
  }
}

module.exports = App;
