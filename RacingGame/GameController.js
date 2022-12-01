const UserInput = require("./UserInput");
const Validation = require("./Validation");
const GameRule = require("./GameRule");
const UserOutput = require("./UserOutput");

const gameRule = new GameRule();
const validation = new Validation();
const userOutput = new UserOutput();

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
    userOutput.resultment();
    for (; i < tryCount; i++) {
      gameRule.calculation(carName);
      const result = gameRule.getResult();
      this.showResult(result, carName);
    }
    this.getWinningPerson();
  }

  showResult(result, carName) {
    userOutput.result(result, carName);
    userOutput.lineBreak();
  }

  getWinningPerson() {
    const winningPerson = gameRule.getWinningPerson();
    userOutput.winningPerson(winningPerson);
  }
}
module.exports = GameController;
