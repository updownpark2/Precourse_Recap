const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const LottoRule = require("./LottoRule");
const OutputView = require("./OutputView");
const LottoMake = require("./LottoMake");
const { lottoCount, lotto } = require("./OutputView");

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
      this.#showLotto(lottoCount);
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
    OutputView.lotto(lotto);
  }

  #getLotto(lottoCount) {
    return LottoMake(lottoCount);
  }
}

module.exports = LottoController;
