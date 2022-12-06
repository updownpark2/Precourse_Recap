const MakeRandomNum = require(`./MakeRandomNum`);
const InputView = require(`./InputView`);

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
  }
}

module.exports = GameController;
