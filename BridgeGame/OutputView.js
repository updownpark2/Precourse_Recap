const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  startMent() {
    Console.print(`로또 게임을 시작합니다잉🐸🐸`);
  },

  result(result) {
    Console.print(`[ ${result[0].join(` | `).split(`, `)} ]`);
    Console.print(`[ ${result[1].join(` | `).split(`, `)} ]`);
  },

  end(tryCount, passOrFail) {
    Console.print(`게임 성공 여부: ${passOrFail}`);
    Console.print(`시도 횟수는 ${tryCount}회 입니다.`);
  },
};

module.exports = OutputView;
