class Validation {
  CheckNumber(number) {
    console.log(number.split(""));
    if (number.split("").includes(" ")) {
      throw new Error(`[ERROR] 공백이 있습니다.`);
    }
    if (number.length !== 3) {
      throw new Error(`[ERROR] 3개의 숫자만 입력할 수 있습니다.`);
    }
    if (/^[0-9]*$/g.test(number) === false) {
      throw new Error(`[ERROR] 숫자만 입력이 가능합니다.`);
    }
  }
}

module.exports = Validation;
