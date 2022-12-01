const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  bridgeLength: (callback) => {
    Console.readLine(`다리 길이를 입력해주세요.`, callback);
  },

  userMove: (callback) => {
    Console.readLine(`이동할 칸을 입력해주세요.`, callback);
  },
};

module.exports = InputView;
