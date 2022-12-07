const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  money(callback) {
    Console.print("구매할 금액을 입력하세요.🤑", callback);
  },
};

module.exports = InputView;
