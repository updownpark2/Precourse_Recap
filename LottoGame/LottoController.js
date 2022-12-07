const InputView = require(`./InputView`);

class LottoController {
  getMoney() {
    InputView.money((money) => {});
  }
}

module.exports = LottoController;
