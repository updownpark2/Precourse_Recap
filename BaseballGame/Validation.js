class Validation {
  #checkRange(userInput) {
    let checkArr = [];
    let i = 0;
    for (; i < 3; i++) {
      if (checkArr.includes(userInput[i])) {
        return false;
      }
      checkArr.push(userInput[i]);
    }
    return true;
  }

  CheckNumber(number) {
    if (number.split("").includes(" ")) {
      throw new Error(`[ERROR] 공백이 있습니다.`);
    }
    if (number.length !== 3) {
      throw new Error(`[ERROR] 3개의 숫자만 입력할 수 있습니다.`);
    }
    if (/^[1-9]*$/g.test(number) === false) {
      throw new Error(`[ERROR] 숫자만 입력이 가능합니다.`);
    }
    if (this.#checkRange(number) === false) {
      throw new Error(`[ERROR] 중복값이 있으면 안됩니다.`);
    }
  }

  checkRetry(retry) {
    if (/^[1-2]*$/g.test(retry) === false) {
      throw new Error(`[ERROR] 숫자만 입력이 가능합니다.`);
    }
    if (retry.length !== 1) {
      throw new Error(`[ERROR] 1 혹은 2 둘 중 한 숫자만 입력해주세요.`);
    }
  }
}

module.exports = Validation;
