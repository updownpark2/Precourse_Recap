const { Random } = require("@woowacourse/mission-utils");

function MakeRandomNum() {
  const computer = [];
  while (computer.length < 3) {
    const number = String(MissionUtils.Random.pickNumberInRange(1, 9));
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

module.exports = MakeRandomNum;
