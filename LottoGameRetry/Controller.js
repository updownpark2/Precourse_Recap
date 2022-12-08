const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const OutputView = require(`./Outputview`);
const LottoRule = require(`./LottoRule`);
const makeLottoArr = require("./makeLotto");

class Controller {
  #validation = new Validation();

  #lottoRule = new LottoRule();

  getMoney() {
    InputView.getMoney((money) => {
      if (this.#checkMoney(money) !== false) {
        const lottoCount = this.#getLottoCount(money);
        this.#showLottoCount(lottoCount);
        const lottoArr = this.#getLottoArr(lottoCount);
        this.#showLotto(lottoArr);
        this.#getWinNum(lottoArr);
      }
    });
  }

  #checkMoney(money) {
    try {
      this.#validation.totalCheckMoney(money);
    } catch (error) {
      this.#validationFail(error);
      this.getMoney();
      return false;
    }
  }

  #validationFail(error) {
    OutputView.showError(error);
  }

  #showLottoCount(lottoCount) {
    OutputView.showLottoCount(lottoCount);
  }

  #getLottoCount(money) {
    const lottoCount = this.#lottoRule.getLottoCount(money);

    return lottoCount;
  }

  #getLottoArr(lottoCount) {
    return makeLottoArr(lottoCount);
  }
  #showLotto(lottoArr) {
    OutputView.showLotto(lottoArr);
  }

  #getWinNum(lottoArr) {
    InputView.getWinNum((winNum) => {
      if (this.#checkWinNum(winNum, lottoArr) !== false) {
        this.#getBonusNum(winNum, lottoArr);
      }
    });
  }
  #checkWinNum(winNum, lottoArr) {
    try {
      this.#validation.totalCheckWinNum(winNum);
    } catch (error) {
      this.#validationFail(error);
      this.#getWinNum(lottoArr);
      return false;
    }
  }

  #getBonusNum(winNum, lottoArr) {
    InputView.getBonusNum((bonusNum) => {
      if (this.#checkBonusNum(bonusNum, winNum, lottoArr) !== false) {
        const result = this.#lottoRule.getResult(lottoArr, winNum, bonusNum);
        this.#showResult(result);
        const benefit = this.#lottoRule.getBenefit();
        this.#showBenefit(benefit, lottoArr);
      }
    });
  }
  #showBenefit(benefit, lottoArr) {
    OutputView.showBenefit(benefit, lottoArr);
  }

  #showResult(result) {
    OutputView.showResult(result);
  }

  #checkBonusNum(bonusNum, winNum, lottoArr) {
    try {
      this.#validation.totalCheckBonusNum(bonusNum, winNum);
    } catch (error) {
      this.#validationFail(error);
      this.#getBonusNum(winNum, lottoArr);
      return false;
    }
  }
}
module.exports = Controller;
