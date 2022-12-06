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
      this.gameContinueOrRetry(gameResult);
    });
  }

  gameContinueOrRetry(gameResult) {
    if (gameResult.get(`strike`) === 3) {
      this.gameRetry(gameResult);
    }
    if (gameResult.get("strike") !== 3) {
      this.gameContinue(gameResult);
    }
  }

  gameRetry(gameResult) {
    this.showEnd();
    this.gameSet(gameResult);
    InputView.getRetry((retry) => {});
  }

  gameContinue(gameResult) {
    this.gameSet(gameResult);
    this.#getNumber();
  }

  gameSet(gameResult) {
    this.showResult(gameResult);
    gameRule.resetResult();
  }

  getResult(number, randomNumArr) {
    gameRule.totalJudgement(number, randomNumArr);
    return gameRule.getResult();
  }

  showEnd() {
    OutputView.end();
  }

  showResult(result) {
    OutputView.result(result);
  }
}
module.exports = GameController;
