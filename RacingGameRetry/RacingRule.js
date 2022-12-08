const MakeRandomNum = require(`./MakeRandomNum`);

class RacingRule {
  #racingResult = new Map();

  #setRacingResult(carNameArr) {
    carNameArr.forEach((carName) => {
      this.#racingResult.set(carName, 0);
    });
  }

  #calculateRacingResult(carNameArr) {
    carNameArr.forEach((carName) => {
      const randomNum = MakeRandomNum();
      if (randomNum >= 4) {
        this.#racingResult.set(carName, this.#racingResult.get(carName) + 1);
      }
    });
  }

  getRacingResult(carName) {
    const carNameArr = carName.split(",");
    this.#setRacingResult(carNameArr);
    this.#calculateRacingResult(carNameArr);
    return this.#racingResult;
  }
}

module.exports = RacingRule;
