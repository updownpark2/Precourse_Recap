const { ERROR } = require("./utils/constants");

class Validation {
  #checkCarNamelength(carNameArr) {
    carNameArr.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(ERROR.CAR_NAME_LENGTH);
      }
    });
  }

  #checkCarNameBlank(carNameArr) {
    if (carNameArr.length === 0) {
      throw new Error(ERROR.CAR_NAME_BLANK);
    }
  }

  #checkCarNameOnlyAlpabet(carNameArr) {
    const stringCarName = carNameArr.join(`,`);
    console.log(stringCarName);
    if (/^[a-zA-Z]/g.test(stringCarName) === false) {
      throw new Error(ERROR.CAR_NAME_ONLY_ALPABET);
    }
  }

  #checkCarNameComma(carNameArr) {
    carNameArr.forEach((carName) => {
      if (carName === ``) {
        throw new Error(ERROR.CAR_NAME_COMMA);
      }
    });
  }

  #checkCarNameDuplication(carNameArr) {
    const checkArr = [];
    carNameArr.forEach((carName) => {
      if (checkArr.includes(carName)) {
        throw new Error(ERROR.CAR_NAME_DUPLICATION);
      }
      checkArr.push(carName);
    });
  }

  #checkCarNameIncludesBlank(carNameArr) {
    carNameArr.forEach((carName) => {
      carName.split("").forEach((carNameCharset) => {
        if (carNameCharset === ` `) {
          throw new Error(ERROR.CAR_NAME_INCLUDES_BLANK);
        }
      });
    });
  }

  totalCheckCarName(carName) {
    const carNameArr = carName.split(`,`);
    this.#checkCarNamelength(carNameArr);
    this.#checkCarNameOnlyAlpabet(carNameArr);
    this.#checkCarNameBlank(carNameArr);
    this.#checkCarNameComma(carNameArr);
    this.#checkCarNameDuplication(carNameArr);
    this.#checkCarNameIncludesBlank(carNameArr);
  }

  #checkTryCountOnlyNum(tryCount) {
    if (/^[0-9]*$/g.test(tryCount) === false) {
      throw new Error(ERROR.TRY_COUNT_ONLY_NUM);
    }
  }

  #checkTryCountRange(tryCount) {
    if (tryCount < 1) {
      throw new Error(ERROR.TRY_COUNT_RANGE);
    }
  }

  totalCheckTryCount(tryCount) {
    this.#checkTryCountOnlyNum(tryCount);
    this.#checkTryCountRange(tryCount);
  }
}

module.exports = Validation;
