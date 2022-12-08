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
}

module.exports = Validation;
