const MakeRandomNum = require(`./MakeRandomNum`);

class RacingRule {
  #racingResult = new Map();

  setRacingResult(carName) {
    const carNameArr = carName.split(",");
    carNameArr.forEach((carName) => {
      this.#racingResult.set(carName, "");
    });
  }

  #calculateRacingResult(carNameArr) {
    carNameArr.forEach((carName) => {
      const randomNum = MakeRandomNum();
      if (randomNum >= 4) {
        this.#racingResult.set(carName, this.#racingResult.get(carName) + "-");
      }
    });
  }

  getRacingResult(carName) {
    const carNameArr = carName.split(",");
    this.#calculateRacingResult(carNameArr);
    return this.#racingResult;
  }
}

module.exports = RacingRule;
