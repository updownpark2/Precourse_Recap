const { Random } = require("@woowacourse/mission-utils");

function MakeRandomNum() {
  return Random.pickNumberInRange(1, 10);
}

module.exports = MakeRandomNum;
