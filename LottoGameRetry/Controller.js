const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const OutputView = require(`./Outputview`);

class Controller {
  constructor() {
    this.validation = new Validation();
  }

  getMoney() {
    InputView.getMoney((money) => {
      if (this.#checkMoney(money) !== false) {
        this.#showLottoCount(money);
      }
    });
  }

  #checkMoney(money) {
    try {
      this.validation.totalCheckMoney(money);
    } catch (error) {
      this.#validationFail(error);
      this.getMoney();
      return false;
    }
  }

  #validationFail(error) {
    OutputView.showError(error);
  }

  #showLottoCount(money) {
    OutputView.showLottoCount(money);
  }
}

module.exports = Controller;
