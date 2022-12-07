class LottoRule {
  getLottoCount(money) {
    return money / 1000;
  }

  makeStardardLotto(lotto) {
    return lotto.sort((a, b) => a - b).join(`, `);
  }
}

module.exports = LottoRule;
