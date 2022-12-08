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
};

module.exports = OutputView;
