const { Random } = require("@woowacourse/mission-utils");

function LottoMake(lottoCount) {
  let LottoArr = [];
  let i = 0;
  for (; i < lottoCount; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    LottoArr.push(numbers);
  }
  return LottoArr;
}

module.exports = LottoMake;
