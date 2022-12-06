const GameController = require(`./GameController`);

class App {
  play() {
    const gameController = new GameController();
    gameController.gameStartMent();
    gameController.gameStart();
  }
}

module.exports = App;
