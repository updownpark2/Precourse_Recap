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

  showResult(result) {
    Console.print(`당첨통계\n`);
    Console.print(`---\n`);
    Console.print(`3개 일치 (5,000원) - ${result.get("5등")}`);
    Console.print(`4개 일치 (50,000원) - ${result.get("4등")}`);
    Console.print(`5개 일치 (1,500,000원) - ${result.get("3등")}`);
    Console.print(`5개 일치 (30,000,000원)+보너스번호 - ${result.get("2등")}`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result.get("1등")}`);
  },
};

module.exports = OutputView;
