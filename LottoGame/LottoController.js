const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const LottoRule = require("./LottoRule");
const OutputView = require("./OutputView");
const LottoMake = require("./LottoMake");
const { money } = require("./InputView");

const validation = new Validation();
const lottoRule = new LottoRule();

class LottoController {
  start() {
    this.#getMoney();
  }

  #getMoney() {
    InputView.money((money) => {
      const lottoCount = this.#getLottoCount(money);
      this.#checkValidationMoney(money, lottoCount);
    });
  }

  #getWinNum() {
    InputView.winNum((winNum) => {});
  }

  #validationPass(lottoCount) {
    this.#showLottoCount(lottoCount);
    this.#showLotto(lottoCount);
  }

  #validationFail(error) {
    OutputView.showError(error);
    this.#getMoney();
  }

  #checkValidationMoney(money, lottoCount) {
    try {
      validation.checkMoney(money);
    } catch (error) {
      this.#validationFail(error);
      return;
    }
    this.#validationPass(lottoCount);
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
