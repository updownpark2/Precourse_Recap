const MakeRandomNum = require(`./MakeRandomNum`);
const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const GameRule = require(`./GameRule`);

const validation = new Validation();
const gameRule = new GameRule();

class GameController {
  #randomNumArr;

  #makeRandomNum() {
    this.#randomNumArr = MakeRandomNum();
    console.log(this.#randomNumArr);
  }

  startMent() {
    InputView.startMent();
  }

  start() {
    this.#makeRandomNum();
    gameRule.resetResult();
    this.#getNumber();
  }

  #getNumber() {
    InputView.getNumber((number) => {
      validation.CheckNumber(number);
      const gameResult = this.getResult(number, this.#randomNumArr);
      console.log(gameResult);
    });
  }

  getResult(number, randomNumArr) {
    let i = 0;
    for (; i < 3; i++) {
      gameRule.judgement(number, randomNumArr, i);
    }
    return gameRule.getResult();
  }
}
module.exports = GameController;
