const { Random } = require("@woowacourse/mission-utils");

function makeLottoArr(lottoCount) {
  let lottoArr = [];
  let index = 0;
  for (; index < lottoCount; index++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    lottoArr.push(numbers);
  }
  return lottoArr;
}

module.exports = makeLottoArr;
