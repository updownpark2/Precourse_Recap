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
};

module.exports = OutputView;
