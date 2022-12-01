const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Validation = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");
const generateRandomNumber = require("./GenerateRandomNum");
const BridgeMaker = require("./BridgeMaker");

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
      const bridge = this.getBridge(bridgeLength, generateRandomNumber);
      Console.print(bridge);
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

  getBridge(bridgeLength, generateRandomNumber) {
    return BridgeMaker.makeBridge(bridgeLength, generateRandomNumber);
  }
}

module.exports = BridgeController;
