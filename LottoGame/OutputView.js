const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  lottoCount(lottoCount) {
    Console.print(`구매하신 로또는 ${lottoCount}개 입니당.😁`);
  },

  lotto(lottoArr) {
    const repeatCount = lottoArr.length;
    let index = 0;
    for (; index < repeatCount; index++) {
      const standardLotto = lottoArr[index].join(`, `);
      Console.print(`[${standardLotto}]`);
    }
  },

  showError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
