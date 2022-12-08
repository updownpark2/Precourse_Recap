const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  showError(error) {
    Console.print(error);
  },

  showLottoCount(money) {
    const lottoCount = money / 1000;

    Console.print(`${lottoCount}개를 구매했습니다.`);
  },
};

module.exports = OutputView;
