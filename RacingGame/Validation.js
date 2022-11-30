const { carName } = require("./UserInput");

class Validation {
  carName(carName) {
    let carNameArr = carName.split(",");
    console.log(carNameArr);
    this.checkComma(carNameArr);
    this.checkLength(carNameArr);
    this.checkEnglish(carNameArr);
    this.checkDuplication(carNameArr);
  }

  checkEnglish(carNameArr) {
    carNameArr.forEach((carName) => {
      if (/^[a-z|A-Z]+$/g.test(carName) === false) {
        throw new Error(`[ERROR] 영어,영어의 형태로 입력이 가능합니다.`);
      }
    });
  }
  checkDuplication(carNameArr) {
    let checkArr = [];
    let i = 0;
    for (; i < carNameArr.length; i++) {
      if (checkArr.includes(carNameArr[i])) {
        throw new Error(`[ERROR] 중복된 이름은 사용할 수 없습니다.`);
      }
      checkArr.push(carNameArr[i]);
    }
  }
  checkComma(carNameArr) {
    carNameArr.forEach((carName) => {
      if (carName === "") {
        throw new Error(`[ERROR] ,,가 연속으로 입력 되었습니다.`);
      }
    });
  }

  checkLength(carNameArr) {
    carNameArr.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(
          `[ERROR] ,를 써주지 않으셨거나 이름이 5글자 이상입니다.`
        );
      }
    });
  }
}

module.exports = Validation;
