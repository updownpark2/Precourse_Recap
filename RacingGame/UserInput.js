const { Console } = require("@woowacourse/mission-utils");
const UserInput = {
  carName: (callback) => {
    Console.readLine(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n`,
      callback
    );
  },

  tryCount: (callback) => {
    Console.readLine(`시도할 횟수는 몇회인가요?\n`, callback);
  },
};

module.exports = UserInput;
