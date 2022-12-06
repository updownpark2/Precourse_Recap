const MakeRandomNum = require(`./MakeRandomNum`);
const InputView = require(`./InputView`);
const Validation = require(`./Validation`);

const validation = new Validation();

class GameController {
  #randomNumArr;

  #makeRandomNum() {
    this.#randomNumArr = MakeRandomNum();
  }

  startMent() {
    InputView.startMent();
  }

  start() {
    this.#makeRandomNum();
    this.#getNumber();
  }

  #getNumber() {
    InputView.getNumber((number) => {
      validation.CheckNumber(number);
    });
  }
}
module.exports = GameController;
