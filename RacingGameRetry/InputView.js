const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require(`./utils/constants`);

const InputView = {
  carName(callback) {
    Console.readLine(INPUT.CAR_NAME, callback);
  },

  tryCount(callback) {
    Console.readLine(INPUT.TRY_COUNT, callback);
  },
};

module.exports = InputView;
