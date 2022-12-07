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
      this.#checkMoneyValidation(money, lottoCount);
      this.#getWinNum();
    });
  }

  #getWinNum() {
    InputView.winNum((winNum) => {
      validation.checkWinNum(winNum);
      this.#checkWinNumValidation(winNum);
    });
  }

  #getBonusNum() {
    InputView.bonusNum((bonusNum) => {});
  }

  #checkWinNumValidation(winNum) {
    try {
      validation.checkWinNum(winNum);
    } catch (error) {
      this.#validationWinNumFail();
      return;
    }
    this.#validationWinNumPass();
  }

  #validationWinNumPass() {
    this.#getBonusNum();
  }

  #validationWinNumFail() {
    this.#getWinNum();
  }

  #validationMoneyPass(lottoCount) {
    this.#showLottoCount(lottoCount);
    this.#showLotto(lottoCount);
  }

  #validationMoneyFail(error) {
    OutputView.showError(error);
    this.#getMoney();
  }

  #checkMoneyValidation(money, lottoCount) {
    try {
      validation.checkMoney(money);
    } catch (error) {
      this.#validationMoneyFail(error);
      return;
    }
    this.#validationMoneyPass(lottoCount);
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
