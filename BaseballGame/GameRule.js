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

  judgement(number, randomNumArr, index) {
    const userNumArr = number.split("");
    if (userNumArr[index] === randomNumArr[index]) {
      this.#strikeCountUp();
      return;
    }
    if (randomNumArr.includes(userNumArr[index])) {
      this.#ballCountUp();
      return;
    }
  }
}

module.exports = GameRule;
