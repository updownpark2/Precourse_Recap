const { winNum, bonusNum } = require("./InputView");

class LottoRule {
  #result = new Map();
  #winCount = [];

  getLottoCount(money) {
    return money / 1000;
  }

  winCountUp(lottoArr, winNum) {
    const winNumArr = winNum.split(",");

    lottoArr.forEach((lotto) => {
      const winLotto = lotto.filter((lottoNum) => winNumArr.includes(lottoNum));
      const winCount = winLotto.length;
      this.#winCount.push(winCount);
    });
  }

  resultSet() {
    this.#result.set("5등", 0);
    this.#result.set("4등", 0);
    this.#result.set("3등", 0);
    this.#result.set("2등", 0);
    this.#result.set("1등", 0);
  }

  judgementSecondOrThird(lottoArr, bonusNum, index) {
    if (lottoArr[index].includes(bonusNum)) {
      this.#result.set("2등", this.#result.get("2등") + 1);
      return;
    }
    this.#result.set("3등", this.#result.get("3등") + 1);
  }

  judgementWin(lottoArr, bonusNum) {
    this.#winCount.forEach((count, index) => {
      if (count === 3) {
        this.#result.set("5등", this.#result.get("5등") + 1);
      }
      if (count === 4) {
        this.#result.set("4등", this.#result.get("4등") + 1);
      }
      if (count === 5) {
        this.judgementSecondOrThird(lottoArr, bonusNum, index);
      }
      if (count === 6) {
        this.#result.set("1등", this.#result.get("1등") + 1);
      }
    });
  }

  totalJudgement(lottoArr, winNum, bonusNum) {
    this.winCountUp(lottoArr, winNum);
    this.resultSet();
    this.judgementWin(lottoArr, bonusNum);
  }

  getResult() {
    return this.#result;
  }
}

module.exports = LottoRule;
