const { Random } = require("@woowacourse/mission-utils");

function LottoMake(lottoCount) {
  let Lotto = [];
  for (; lottoCount < 6; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    Lotto.push(numbers);
  }
  return Lotto;
}

module.exports = LottoMake;
