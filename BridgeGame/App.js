const BridgeController = require("./BridgeController");

class App {
  play() {
    const bridgeController = new BridgeController();
    bridgeController.gameStart();
  }
}

module.exports = App;
