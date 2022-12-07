const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const LottoRule = require("./LottoRule");
const OutputView = require("./OutputView");
const LottoMake = require("./LottoMake");
const { winNum } = require("./InputView");

const validation = new Validation();
const lottoRule = new LottoRule();

class LottoController {
  start() {
    this.#getMoney();
  }

  #getMoney() {
    InputView.money((money) => {
      const lottoCount = this.#getLottoCount(money);
      if (this.#checkMoney(money, lottoCount) !== false) {
        this.#getWinNum(money);
      }
    });
  }

  #getWinNum(money) {
    InputView.winNum((winNum) => {
      if (this.#checkWinNum(winNum) !== false) {
        this.#getBonusNum(winNum, money);
      }
    });
  }

  #getBonusNum(winNum, money) {
    InputView.bonusNum((bonusNum) => {
      if (this.#checkBonusNum(winNum, bonusNum) !== false) {
        console.log(money);
      }
    });
  }

  #checkMoney(money, lottoCount) {
    try {
      validation.checkMoney(money);
    } catch (error) {
      this.#failCheckMoney(error);
      return false;
    }
    this.#passCheckMoney(lottoCount);
  }
  #failCheckMoney(error) {
    OutputView.showError(error);
    this.#getMoney();
  }

  #passCheckMoney(lottoCount) {
    this.#showLottoCount(lottoCount);
    this.#showLotto(lottoCount);
  }

  #checkWinNum(winNum) {
    try {
      validation.checkWinNum(winNum);
    } catch (error) {
      this.#failCheckWinNum(error);
      return false;
    }
  }

  #failCheckWinNum(error) {
    OutputView.showError(error);
    this.#getWinNum();
  }

  #checkBonusNum(winNum, bonusNum) {
    try {
      validation.checkBonusNum(winNum, bonusNum);
    } catch (error) {
      this.#failCheckBonusNum(winNum, error);
      return false;
    }
  }

  #failCheckBonusNum(winNum, error) {
    OutputView.showError(error);
    this.#getBonusNum(winNum);
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
