class Validation {
  #checkCarNamelength(carNameArr) {
    carNameArr.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(`[ERROR] 이름은 5글자 이하만 가능합니다.`);
      }
    });
  }

  #checkCarNameBlank(carNameArr) {
    if (carNameArr.length === 0) {
      throw new Error(`[ERORR] 공백은 입력될 수 없습니다.`);
    }
  }

  #checkCarNameOnlyAlpabet(carNameArr) {
    const stringCarName = carNameArr.join(`,`);
    console.log(stringCarName);
    if (/^[a-zA-Z]/g.test(stringCarName) === false) {
      throw new Error(`[ERROR] 알파벳만 입력이 가능합니다.`);
    }
  }

  #checkCarNameComma(carNameArr) {
    carNameArr.forEach((carName) => {
      if (carName === ``) {
        throw new Error(`[ERROR] ,이 연속으로 입력 되었습니다.`);
      }
    });
  }

  #checkCarNameDuplication(carNameArr) {
    const checkArr = [];
    carNameArr.forEach((carName) => {
      if (checkArr.includes(carName)) {
        throw new Error(`[ERROR] 중복된 이름은 사용할 수 없습니다.`);
      }
      checkArr.push(carName);
    });
  }

  #checkCarNameIncludesBlank(carNameArr) {
    carNameArr.forEach((carName) => {
      carName.split("").forEach((carNameCharset) => {
        if (carNameCharset === ` `) {
          throw new Error(`[ERROR] 이름에 공백이 존재합니다.`);
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
}

module.exports = Validation;
