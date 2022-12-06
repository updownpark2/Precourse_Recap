class GameRule {
  #CountBallAndStrike = new Map();

  #ballCountUp() {
    const currentBallCount = this.#CountBallAndStrike.get("ball");
    this.#CountBallAndStrike.set("ball", currentBallCount + 1);
  }

  #strikeCountUp() {
    const currentStrikeCount = this.#CountBallAndStrike.get("strike");
    this.#CountBallAndStrike.set("strike", currentStrikeCount + 1);
  }

  getResult() {
    return this.#CountBallAndStrike;
  }

  resetResult() {
    this.#CountBallAndStrike.set(`ball`, 0);
    this.#CountBallAndStrike.set(`strike`, 0);
  }

  totalJudgement(number, randomNumArr) {
    for (let i = 0; i < 3; i++) {
      this.judgement(number, randomNumArr, i);
    }
  }

  judgement(number, randomNumArr, index) {
    const userNumArr = number.split("");
    if (userNumArr[index] === randomNumArr[index]) {
      this.#strikeCountUp();
    }
    if (
      randomNumArr.includes(userNumArr[index]) &&
      userNumArr[index] !== randomNumArr[index]
    ) {
      this.#ballCountUp();
    }
  }

  judgementRetry(retry) {
    if (retry === "1") {
      return true;
    }
    if (retry === "2") {
      return false;
    }
  }
}

module.exports = GameRule;
