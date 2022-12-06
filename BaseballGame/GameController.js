const MakeRandomNum = require(`./MakeRandomNum`);
const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const GameRule = require(`./GameRule`);
const OutputView = require(`./OutputView`);

const validation = new Validation();
const gameRule = new GameRule();

class GameController {
  #randomNumArr;

  #makeRandomNum() {
    this.#randomNumArr = MakeRandomNum();
    console.log(this.#randomNumArr);
  }

  gameStartMent() {
    InputView.startMent();
  }

  gameStart() {
    this.#makeRandomNum();
    gameRule.resetResult();
    this.#getNumber();
  }

  #getNumber() {
    InputView.getNumber((number) => {
      validation.CheckNumber(number);
      const gameResult = this.getResult(number, this.#randomNumArr);
      this.judgementSuccess(gameResult);
    });
  }

  judgementSuccess(gameResult) {
    if (gameResult.get(`strike`) === 3) {
      this.showResult(gameResult);
      return;
    }
    this.showResult(gameResult);
    gameRule.resetResult();
    this.#getNumber();
  }

  getResult(number, randomNumArr) {
    gameRule.totalJudgement(number, randomNumArr);
    return gameRule.getResult();
  }

  showResult(result) {
    OutputView.result(result);
  }
}
module.exports = GameController;
