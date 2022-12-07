const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const LottoRule = require("./LottoRule");
const OutputView = require("./OutputView");
const LottoMake = require("./LottoMake");
const { lottoCount } = require("./OutputView");

const validation = new Validation();
const lottoRule = new LottoRule();

class LottoController {
  start() {
    this.#getMoney();
  }

  #getMoney() {
    InputView.money((money) => {
      validation.checkMoney(money);
      const lottoCount = this.#getLottoCount(money);
      this.#showLottoCount(lottoCount);
    });
  }

  #getLottoCount(money) {
    return lottoRule.getLottoCount(money);
  }

  #showLottoCount(lottoCount) {
    OutputView.lottoCount(lottoCount);
  }

  #showLotto(lottoCount) {
    const lotto = this.#getLotto(lottoCount);
  }

  #getLotto(lottoCount) {
    return LottoMake(lottoCount);
  }
}

module.exports = LottoController;
