class Validation {
  bridgeLength(bridgeLength) {
    if (bridgeLength > 20 || bridgeLength < 3) {
      throw new Error(`[ERROR] 다리 길이는 3~20 사이의 숫자만 가능합니다.`);
    }
    if (/^[0-9]*$/g.test(bridgeLength) === false) {
      throw new Error(`[ERROR] 숫자만 입력 해주세요.`);
    }
  }
}
module.exports = Validation;
