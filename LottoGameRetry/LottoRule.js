class LottoRule {
  #result = new Map();

  #winCount = [];

  getLottoCount(money) {
    return money / 1000;
  }

  #winCountPush(target) {
    this.#winCount.push(target);
  }

  #setResult() {
    this.#result.set("5등", 0);
    this.#result.set("4등", 0);
    this.#result.set("3등", 0);
    this.#result.set("2등", 0);
    this.#result.set("1등", 0);
  }

  #calculateWinCount(lottoArr, winNum) {
    const winNumArr = winNum.split(`,`);
    lottoArr.forEach((lotto) => {
      const winCountArr = lotto.filter((lottoNum) =>
        winNumArr.includes(String(lottoNum))
      );
      const winCount = winCountArr.length;
      this.#winCountPush(winCount);
    });
  }

  #calculateResult(lottoArr, bonusNum) {
    this.#winCount.forEach((count, index) => {
      if (count === 3) {
        this.#result.set("5등", this.#result.get("5등") + 1);
      }
      if (count === 4) {
        this.#result.set("4등", this.#result.get("4등") + 1);
      }
      if (count === 5) {
        this.#calculateSecondOrThird(lottoArr, bonusNum, index);
      }
      if (count === 6) {
        this.#result.set("1등", this.#result.get("1등") + 1);
      }
    });
  }

  #calculateSecondOrThird(lottoArr, bonusNum, index) {
    if (lottoArr[index].includes(parseInt(bonusNum))) {
      this.#result.set("2등", this.#result.get("2등") + 1);
      return;
    }
    this.#result.set("3등", this.#result.get("3등") + 1);
  }

  #totalLottoJudgement(lottoArr, winNum, bonusNum) {
    this.#calculateWinCount(lottoArr, winNum);
    this.#setResult();
    this.#calculateResult(lottoArr, bonusNum);
  }

  getResult(lottoArr, winNum, bonusNum) {
    this.#totalLottoJudgement(lottoArr, winNum, bonusNum);

    return this.#result;
  }

  getBenefit() {
    const benefit =
      this.#result.get("5등") * 5000 +
      this.#result.get("4등") * 50000 +
      this.#result.get("3등") * 1500000 +
      this.#result.get("2등") * 30000000 +
      this.#result.get("1등") * 2000000000;

    return benefit;
  }
}

module.exports = LottoRule;
