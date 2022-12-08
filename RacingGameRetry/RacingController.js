const InputView = require(`./InputView`);
const OutputView = require(`./OutputView`);
const Validation = require(`./Validation`);
const RacingRule = require("./RacingRule");

class RacingController {
  #validation = new Validation();

  #racingRule = new RacingRule();

  getCarName() {
    InputView.carName((carName) => {
      if (this.#checkCarName(carName) !== false) {
        this.#getTryCount(carName);
      }
    });
  }

  #getTryCount(carName) {
    InputView.tryCount((tryCount) => {
      if (this.#checkTryCount(tryCount, carName) !== false) {
        this.#getResultAndShow(carName, tryCount);
        this.#getWinnerAndShow();
      }
    });
  }

  #checkCarName(carName) {
    try {
      this.#validation.totalCheckCarName(carName);
    } catch (error) {
      this.#validationFailAndShowError(error);
      this.getCarName(carName);
      return false;
    }
  }

  #checkTryCount(tryCount, carName) {
    try {
      this.#validation.totalCheckTryCount(tryCount);
    } catch (error) {
      this.#validationFailAndShowError(error);
      this.#getTryCount(carName);
      return false;
    }
  }

  #validationFailAndShowError(error) {
    OutputView.showError(error);
  }

  #getResultAndShow(carName, tryCount) {
    let i = 0;
    for (; i < tryCount; i++) {
      const racingResult = this.#racingRule.getRacingResult(carName);
      OutputView.showResult(racingResult, carName);
    }
  }

  #getWinnerAndShow() {
    const winner = this.#racingRule.getWinner();
    OutputView.showWinner(winner);
  }
}

module.exports = RacingController;
