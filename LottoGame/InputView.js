const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  money(callback) {
    Console.readLine(`구매할 금액을 입력하세요.🤑\n`, callback);
  },

  winNum(callback) {
    Console.readLine(`당첨번호를 입력해주세요.🎱`, callback);
  },

  bonusNum(callback) {
    Console.readLine(`보너스번호를 입력해주세요.⚽️`, callback);
  },
};

module.exports = InputView;
