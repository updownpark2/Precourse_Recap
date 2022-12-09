const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT } = require(`./utils/constants`);

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
    Console.print(`${OUTPUT.WINNER}${stringWinner}`);
  },
};

module.exports = OutputView;
