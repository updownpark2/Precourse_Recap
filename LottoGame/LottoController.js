const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const LottoRule = require("./LottoRule");
const OutputView = require("./OutputView");
const LottoMake = require("./LottoMake");

const validation = new Validation();
const lottoRule = new LottoRule();

class LottoController {
  start() {
    this.#getMoney();
  }

  #getMoney() {
    InputView.money((money) => {
      const lottoCount = this.#getLottoCount(money);
      if (this.#checkMoney(money) !== false) {
        const lottoArr = this.#getLotto(lottoCount);
        this.#passCheckMoney(lottoCount);
        this.#getWinNum(money, lottoArr);
      }
    });
  }

  #getWinNum(money, lottoArr) {
    InputView.winNum((winNum) => {
      if (this.#checkWinNum(winNum) !== false) {
        this.#getBonusNum(winNum, money, lottoArr);
      }
    });
  }

  #getBonusNum(winNum, money, lottoArr) {
    InputView.bonusNum((bonusNum) => {
      if (this.#checkBonusNum(winNum, bonusNum) !== false) {
        this.#judgementWin(lottoArr, winNum, bonusNum);
        const result = this.#getLottoRusult();
        console.log(result);
      }
    });
  }

  #judgementWin(lottoArr, winNum, bonusNum) {
    lottoRule.totalJudgement(lottoArr, winNum, bonusNum);
  }

  #getLottoRusult() {
    const result = lottoRule.getResult();
  }

  #checkMoney(money) {
    try {
      validation.checkMoney(money);
    } catch (error) {
      this.#failCheckMoney(error);
      return false;
    }
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
    const lottoArr = this.#getLotto(lottoCount);
    OutputView.lotto(lottoArr);
  }

  #getLotto(lottoCount) {
    return LottoMake(lottoCount);
  }
}

module.exports = LottoController;
