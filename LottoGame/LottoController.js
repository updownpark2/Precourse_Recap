const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const LottoRule = require("./LottoRule");

const validation = new Validation();
const lottoRule = new LottoRule();

class LottoController {
  getMoney() {
    InputView.money((money) => {
      validation.checkMoney(money);
      const lottoCount = this.#getLottoCount(money);
    });
  }

  #getLottoCount(money) {
    return lottoRule.getLottoCount(money);
  }
}

module.exports = LottoController;
