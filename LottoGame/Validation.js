class Validation {
  #checkMoneyUnit(money) {
    if (money % 1000 !== 0) {
      throw new Error(`[ERROR] 1000원 단위로 금액을 입력해주세요.`);
    }
  }

  #checkMoneyOnlyNum(money) {
    if (/^[0-9]*$/g.test(money) === false) {
      throw new Error(`[ERROR] 숫자만을 입력해주세요.`);
    }
  }

  #checkMoneyZero(money) {
    if (money <= 0) {
      throw new Error(`[ERROR] 최소 1000원을 입력해주세요.`);
    }
  }

  checkMoney(money) {
    this.#checkMoneyOnlyNum(money);
    this.#checkMoneyUnit(money);
    this.#checkMoneyZero(money);
  }

  #stringToArr(winNum) {
    return winNum.split(`,`);
  }

  #checkWinNumLength(winNum) {
    const winNumArr = this.#stringToArr(winNum);
    if (winNumArr.length !== 6) {
      throw new Error(`[ERROR] 1~45 사이의 6개 숫자를 입력해주세요.`);
    }
  }

  #checkWinNumDuplication(winNum) {
    const winNumArr = this.#stringToArr(winNum);
    console.log(winNumArr);
    let index = 0;
    let checkArr = [];
    for (; index < 6; index++) {
      if (checkArr.includes(winNumArr[index])) {
        throw new Error(`[ERROR] 당첨 숫자 중 중복은 있을 수 없습니다.`);
      }
      checkArr.push(checkArr[index]);
    }
  }

  #checkWinNumComma(winNum) {
    const winNumArr = this.#stringToArr(winNum);
    console.log(winNumArr);
    winNumArr.forEach((winNum) => {
      if (winNum === ``) {
        throw new Error(`[ERROR] ,이 연속으로 입력되었습니다.`);
      }
    });
  }

  #checkWinNumOnlyNum(winNum) {
    const winNumArr = this.#stringToArr(winNum);
    winNumArr.forEach((winNum) => {
      if (winNum < 1 || winNum > 45) {
        throw new Error(`[ERROR] 1~45사이의 숫자를 입력해주세요.`);
      }
    });
  }

  checkWinNum(winNum) {
    this.#checkWinNumLength(winNum);
    this.#checkWinNumComma(winNum);
    this.#checkWinNumDuplication(winNum);
    this.#checkWinNumOnlyNum(winNum);
  }
}

module.exports = Validation;
