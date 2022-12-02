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

    if (this.gameComplete(result, bridge) === true) {
      this.end();

      return;
    }
    this.retryOrMove(bridge, result);
  }

  gameComplete(result, bridge) {
    let endPoint = bridge.length - 1;
    if (result[0][endPoint] === "O" || result[1][endPoint] === "O") {
      return true;
    }
    return false;
  }

  retryOrMove(bridge, result) {
    if (this.checkFail(result) === true) {
      this.getRetry(bridge);

      return;
    }
    this.getMove(bridge);
  }

  getResult() {
    return bridgeGame.getResult();
  }

  checkFail(result) {
    let checkArr = [...result[0], ...result[1]];

    if (checkArr.includes("X")) {
      return true;
    }
  }

  checkValidationRetry(retry) {
    try {
      validation.retry(retry);
    } catch (error) {
      Console.print(error);

      return false;
    }
  }

  getRetry(bridge) {
    InputView.retry((retry) => {
      if (this.checkValidationRetry(retry) === false) {
        this.getRetry();

        return;
      }
      this.retryOrEnd(retry, bridge);
    });
  }

  retryOrEnd(retry, bridge) {
    if (bridgeGame.checkRetry(retry) === true) {
      bridgeGame.reset();
      this.getMove(bridge);

      return;
    }
    this.end();
  }
  end() {
    const tryCount = bridgeGame.getTryCount();
    OutputView.end(tryCount);
    Console.close();
  }
}

module.exports = BridgeController;
