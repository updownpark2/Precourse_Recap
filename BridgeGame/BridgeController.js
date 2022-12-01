const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Validation = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");
const validation = new Validation();

class BridgeController {
  gameStartMent() {
    OutputView.startMent();
  }

  gameStart() {
    InputView.bridgeLength((bridgeLength) => {
      if (this.checkValidation(bridgeLength) === false) {
        this.gameStart();
      }
    });
  }

  checkValidation(bridgeLength) {
    try {
      validation.bridgeLength(bridgeLength);
    } catch (error) {
      Console.print(error);

      return false;
    }
  }
}

module.exports = BridgeController;
