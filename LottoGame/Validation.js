class Validation {
  #checkUnit(money) {
    if (money % 1000 !== 0) {
      throw new Error(`[ERROR] 1000원 단위로 금액을 입력해주세요.`);
    }
  }

  #checkOnlyNum(money) {
    if (/^[0-9]*$/g.test(money) === false) {
      throw new Error(`[ERROR] 숫자만을 입력해주세요.`);
    }
  }

  #checkZero(money) {
    if (money <= 0) {
      throw new Error(`[ERROR] 최소 1000원을 입력해주세요.`);
    }
  }

  checkMoney(money) {
    this.#checkOnlyNum(money);
    this.#checkUnit(money);
    this.#checkZero(money);
  }
}

module.exports = Validation;
