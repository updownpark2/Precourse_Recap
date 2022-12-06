const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  startMent: () => {
    Console.print(`숫자 야구 게임을 시작합니다.`);
  },

  getNumber: (callback) => {
    Console.readLine("숫자를 입력해주세요", callback);
  },
};

module.exports = InputView;
