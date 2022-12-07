const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  lottoCount(lottoCount) {
    Console.print(`구매하신 로또는 ${lottoCount}개 입니당.😁`);
  },
};

module.exports = OutputView;
