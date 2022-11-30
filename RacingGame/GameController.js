const UserInput = require("./UserInput");
const Validation = require("./Validation");
const GameRule = require("./GameRule");
const { carName } = require("./UserInput");

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
      this.getResult(carName);
    });
  }
  getResult(carName) {
    gameRule.settingResult(carName);
    gameRule.calculation(carName);

    const result = gameRule.getResult();
  }
}
module.exports = GameController;
