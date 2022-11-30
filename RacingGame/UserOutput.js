const { Console } = require("@woowacourse/mission-utils");
class UserOutput {
  resultment() {
    Console.print(`실행 결과`);
  }

  numberToStick(number) {
    let i = 0;
    let stick = "";
    for (; i < number; i++) {
      stick = stick + "-";
    }
    return stick;
  }

  result(result, carName) {
    let carNameArr = carName.split(",");
    carNameArr.forEach((carName) => {
      Console.print(
        `${carName} : ${this.numberToStick(result.get(carName))}\n`
      );
    });
  }
}

module.exports = UserOutput;
