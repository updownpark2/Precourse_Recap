const { Console } = require("@woowacourse/mission-utils");
const LottoRule = require("./LottoRule");

const OutputView = {
  lottoCount(lottoCount) {
    Console.print(`구매하신 로또는 ${lottoCount}개 입니당.😁`);
  },

  lotto(lotto) {
    const lottoRule = new LottoRule();
    const repeatCount = lotto.length;
    let index = 0;
    for (; index < repeatCount; index++) {
      const standardLotto = lottoRule.makeStardardLotto(lotto[index]);

      Console.print(`[${standardLotto}]`);
    }
  },
};

module.exports = OutputView;
