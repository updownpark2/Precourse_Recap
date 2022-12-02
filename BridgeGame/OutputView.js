const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  startMent() {
    Console.print(`로또 게임을 시작합니다잉🐸🐸`);
  },

  result(result) {
    Console.print(`[ ${result[0].join(` | `).split(`, `)} ]`);
    Console.print(`[ ${result[1].join(` | `).split(`, `)} ]`);
  },

  end() {
    Console.print(`수고하셨습니다.`);
  },
};

module.exports = OutputView;
