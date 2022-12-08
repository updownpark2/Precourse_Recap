class Validation {
  #checkMoneyUnit(money) {
    if (money % 1000 !== 0) {
      throw new Error(`[ERROR] 1000원 단위로 입력해주세요.`);
    }
  }

  #checkMoneyOnlyNum(money) {
    if (/^[0-9]*$/g.test(money) === false) {
      throw new Error(`[ERROR] 숫자만을 입력해주세요.`);
    }
  }

  #checkMoneyRange(money) {
    if (money <= 0) {
      throw new Error("[ERROR] 1000원이 최소 입력 금액입니다.");
    }
  }

  totalCheckMoney(money) {
    this.#checkMoneyUnit(money);
    this.#checkMoneyOnlyNum(money);
    this.#checkMoneyRange(money);
  }

  #checkWinNumLength(winNumArr) {
    if (winNumArr.length !== 6) {
      throw new Error(`[ERROR] 숫자 6개만 입력해 주세요.`);
    }
  }
  #checkWinNumRange(winNumArr) {
    winNumArr.forEach((winNum) => {
      if (winNum > 45 || winNum < 1) {
        throw new Error(`[ERROR] 숫자의 범위는 1~45 입니다.`);
      }
    });
  }

  #checkWinNumComma(winNumArr) {
    winNumArr.forEach((winNum) => {
      if (winNum === ``) {
        throw new Error(`[ERROR] ,이 연속으로 입력되었습니다.`);
      }
    });
  }

  #checkWinNumOnlyNum(winNumArr) {
    const stringWinNum = winNumArr.join("");
    if (/^[0-9]*$/g.test(stringWinNum) === false) {
      throw new Error(`[ERROR] 숫자만 입력이 가능합니다.`);
    }
  }

  #checkWinNumDuplication(winNumArr) {
    const checkArr = [];
    winNumArr.forEach((winNum) => {
      if (checkArr.includes(winNum)) {
        throw new Error(`[ERROR] 중복된 값은 입력이 불가능합니다.`);
      }
      checkArr.push(winNum);
    });
  }

  totalCheckWinNum(winNum) {
    const winNumArr = winNum.split(`,`);
    this.#checkWinNumComma(winNumArr);
    this.#checkWinNumDuplication(winNumArr);
    this.#checkWinNumLength(winNumArr);
    this.#checkWinNumOnlyNum(winNumArr);
    this.#checkWinNumRange(winNumArr);
  }
}

module.exports = Validation;
