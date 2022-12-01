const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Validation = require("./Validation");

const validation = new Validation();

class BridgeController {
  gameStart() {
    OutputView.startMent();
    InputView.bridgeLength((bridgeLength) => {
      validation.bridgeLength(bridgeLength);
    });
  }
}

module.exports = BridgeController;
