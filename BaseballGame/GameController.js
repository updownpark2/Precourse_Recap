const MakeRandomNum = require("./MakeRandomNum");

class GameController {
  #randomNumArr;

  makeRandomNum() {
    this.#randomNumArr = MakeRandomNum();
  }

  start() {
    this.makeRandomNum();
  }
}
