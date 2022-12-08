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
        this.#showAndMakeLotto(lottoCount);
        this.#getWinNum();
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

  #showAndMakeLotto(lottoCount) {
    const lottoArr = this.#getLottoArr(lottoCount);
    this.#showLotto(lottoArr);
  }

  #getWinNum() {
    InputView.getWinNum((winNum) => {
      if (this.#checkWinNum(winNum) !== false) {
        console.log("asd");
      }
    });
  }
  #checkWinNum(winNum) {
    try {
      this.#validation.totalCheckWinNum(winNum);
    } catch (error) {
      this.#validationFail(error);
      this.#getWinNum();
      return false;
    }
  }
}
module.exports = Controller;
