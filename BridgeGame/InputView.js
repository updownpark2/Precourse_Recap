const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  bridgeLength: (callback) => {
    Console.readLine(`다리 길이를 입력해주세요.\n`, callback);
  },

  userMove: (callback) => {
    Console.readLine(`이동할 칸을 입력해주세요.\n`, callback);
  },
  retry: (callback) => {
    Console.readLine(
      `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
      callback
    );
  },
};

module.exports = InputView;
