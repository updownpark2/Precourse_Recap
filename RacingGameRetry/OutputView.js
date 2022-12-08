const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  showError(error) {
    Console.print(error);
  },

  showResult(racingResult, carName) {
    const carNameArr = carName.split(",");

    carNameArr.forEach((carName) => {
      Console.print(`${carName} : ${racingResult.get(carName)}`);
    });
    Console.print(``);
  },

  showWinner(winner) {
    const stringWinner = winner.join(`, `);
    Console.print(`최종 우승자 : ${stringWinner}`);
  },
};

module.exports = OutputView;
