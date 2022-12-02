const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Validation = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");
const generateRandomNumber = require("./GenerateRandomNum");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");

const validation = new Validation();
const bridgeGame = new BridgeGame();

class BridgeController {
  gameStart() {
    OutputView.startMent();
    this.getBridgeLength();
  }

  getBridgeLength() {
    InputView.bridgeLength((bridgeLength) => {
      if (this.checkValidationLength(bridgeLength) === false) {
        this.gameStart();
        return;
      }
      const bridge = this.getBridge(bridgeLength, generateRandomNumber);
      Console.print(bridge);
      this.getMove(bridge);
    });
  }

  checkValidationLength(bridgeLength) {
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

  getMove(bridge) {
    InputView.userMove((move) => {
      if (this.checkValidationMove(move) === false) {
        this.getMove(bridge);
        return;
      }
      this.resultMakeAndShow(bridge, move);
    });
  }

  checkValidationMove(move) {
    try {
      validation.userMove(move);
    } catch (error) {
      Console.print(error);

      return false;
    }
  }

  resultMakeAndShow(bridge, move) {
    bridgeGame.move(bridge, move);
    const result = bridgeGame.getResult();
    OutputView.result(result);

    this.retryOrMove(bridge, result);
  }

  retryOrMove(bridge, result) {
    if (this.checkFail(result) === true) {
      this.getRetry();

      return;
    }
    this.getMove(bridge);
  }

  checkFail(result) {
    let checkArr = [...result[0], ...result[1]];

    if (checkArr.includes("X")) {
      return true;
    }
  }

  getRetry() {
    InputView.retry((retry) => {
      Console.print(retry);
    });
  }

  getResult() {
    return bridgeGame.getResult();
  }
}

module.exports = BridgeController;
