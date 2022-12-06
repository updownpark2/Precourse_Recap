const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  result: (result) => {
    const ballCount = result.get(`ball`);
    const strikeCount = result.get(`strike`);
    if (ballCount === 0 && strikeCount === 0) {
      Console.print(`낫씽`);
    }
    if (ballCount === 0 && strikeCount !== 0) {
      Console.print(`${strikeCount}스트라이크`);
    }
    if (ballCount !== 0 && strikeCount === 0) {
      Console.print(`${ballCount}볼`);
    }
    if (ballCount !== 0 && strikeCount !== 0) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  },

  end: () => {
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
  },

  bye: () => {
    Console.print(`수고하셨습니당!⚾️`);
    Console.close();
  },
};

module.exports = OutputView;
