const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      let alpabet = ["D", "U"];
      bridge.push(alpabet[generateRandomNumber]);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
