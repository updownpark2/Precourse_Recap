const MakeRandomNum = require(`./MakeRandomNum`);

class RacingRule {
  #racingResult = new Map();
  #tryCount = 0;

  #tryCountUp() {
    this.#tryCount = this.#tryCount + 1;
  }

  #setRacingResult(carName) {
    if (this.#tryCount === 0) {
      const carNameArr = carName.split(",");
      carNameArr.forEach((carName) => {
        this.#racingResult.set(carName, "");
      });
    }
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
    this.#setRacingResult(carName);
    this.#calculateRacingResult(carNameArr);
    this.#tryCountUp();
    return this.#racingResult;
  }

  #getCarMovement() {
    const carMovement = [];
    const resultDoubleArr = [...this.#racingResult];
    resultDoubleArr.forEach((resultArr) => {
      carMovement.push(resultArr[1].length);
    });
    return carMovement;
  }

  #getMaxMovement() {
    const carMovement = this.#getCarMovement();
    const maxMovement = Math.max(...carMovement);
    console.log(carMovement);
    console.log(maxMovement);
    return maxMovement;
  }

  #getWinRacingArr() {
    const maxMovement = this.#getMaxMovement();
    const winRacingArr = [...this.#racingResult].filter(
      (resultArr) => resultArr[1].length === maxMovement
    );
    return winRacingArr;
  }

  getWinner() {
    const winRacingArr = this.#getWinRacingArr();
    const winner = [];
    winRacingArr.forEach((winRacing) => {
      winner.push(winRacing[0]);
    });
    return winner;
  }
}

module.exports = RacingRule;

//여기서 부터 이제 결과 값 받아서 넣기만하면댐
