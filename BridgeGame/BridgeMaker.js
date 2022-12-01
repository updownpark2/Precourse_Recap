const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      let alpabet = ["D", "U"];
      const randomNum = generateRandomNumber();
      bridge.push(alpabet[randomNum]);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
