const InputView = require(`./InputView`);
const Validation = require(`./Validation`);

const validation = new Validation();

class LottoController {
  getMoney() {
    InputView.money((money) => {
      validation.checkMoney(money);
    });
  }
}

module.exports = LottoController;
