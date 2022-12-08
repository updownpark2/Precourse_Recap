const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const OutputView = require(`./Outputview`);

class Controller {
  constructor() {
    this.validation = new Validation();
  }

  getMoney() {
    InputView.getMoney((money) => {
      this.#checkMoney(money);
    });
  }

  #checkMoney(money) {
    try {
      this.validation.totalCheckMoney(money);
    } catch (error) {
      this.#validationFail(error);
      return this.getMoney();
    }
  }

  #validationFail(error) {
    OutputView.showError(error);
  }
}

module.exports = Controller;
