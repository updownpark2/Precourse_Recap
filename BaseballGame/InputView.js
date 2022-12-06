const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  startMent: () => {
    Console.print(`숫자 야구 게임을 시작합니다.`);
  },

  getNumber: (callback) => {
    Console.readLine("숫자를 입력해주세요", callback);
  },

  getRetry: (callback) => {
    Console.readLine(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
      callback
    );
  },
};

module.exports = InputView;
