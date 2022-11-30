const { Random } = require("@woowacourse/mission-utils");

class GameRule {
  #result = new Map();

  getRandomNum() {
    return Random.pickNumberInRange(1, 10);
  }

  settingResult(carName) {
    let carNameArr = carName.split(",");
    carNameArr.forEach((carName) => {
      this.#result.set(carName, 0);
    });
  }

  calculation(carName) {
    let carNameArr = carName.split(",");
    carNameArr.forEach((carName) => {
      let randomNum = this.getRandomNum();
      if (randomNum >= 4) {
        this.#result.set(carName, this.#result.get(carName) + 1);
      }
    });
  }

  getResult() {
    return this.#result;
  }
}

module.exports = GameRule;
