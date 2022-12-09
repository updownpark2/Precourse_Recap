const { Random } = require("@woowacourse/mission-utils");
const { PICKNUMBER } = require(`./utils/constants`);

function MakeRandomNum() {
  return Random.pickNumberInRange(PICKNUMBER.MIN_RANGE, PICKNUMBER.MAX_RANGE);
}

module.exports = MakeRandomNum;
