const UserInput = require("./UserInput");
const Validation = require("./Validation");
const GameRule = require("./GameRule");
const { carName } = require("./UserInput");
const UserOutput = require("./UserOutput");

const gameRule = new GameRule();
const validation = new Validation();

class GameController {
  getCarName() {
    UserInput.carName((carName) => {
      validation.carName(carName);
      this.getTryCount(carName);
    });
  }
  getTryCount(carName) {
    UserInput.tryCount((tryCount) => {
      validation.tryCount(tryCount);
      this.getResult(carName, tryCount);
    });
  }
  getResult(carName, tryCount) {
    let i = 0;
    gameRule.settingResult(carName);
    for (; i < tryCount; i++) {
      gameRule.calculation(carName);
      const result = gameRule.getResult();
      this.showResult(result, carName);
    }
    this.getWinningPerson();
  }

  showResult(result, carName) {
    const userOutput = new UserOutput();
    userOutput.resultment();
    userOutput.result(result, carName);
  }

  getWinningPerson() {
    console.log(gameRule.getWinningPerson());
  }
}
module.exports = GameController;
