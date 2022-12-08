const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  showError(error) {
    Console.print(error);
  },

  showLottoCount(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
  },

  showLotto(lottoArr) {
    lottoArr.forEach((lotto) => {
      const lottoToShow = lotto.join(`, `);

      Console.print(`[${lottoToShow}]`);
    });
  },
};

module.exports = OutputView;
