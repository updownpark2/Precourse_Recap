class BridgeGame {
  #result = [[], []];
  #count = 0;
  #tryCount = 1;
  upPass() {
    this.#result[0].push(`O`);
    this.#result[1].push(` `);
  }
  downPass() {
    this.#result[0].push(` `);
    this.#result[1].push(`O`);
  }
  upFail() {
    this.#result[0].push(`X`);
    this.#result[1].push(` `);
  }
  downFail() {
    this.#result[0].push(` `);
    this.#result[1].push(`X`);
  }

  reset() {
    this.#result = [[], []];
    this.#count = 0;
    this.tryCountUp();
  }

  tryCountUp() {
    this.#tryCount = this.#tryCount + 1;
  }

  countUp() {
    this.#count = this.#count + 1;
  }

  checkPass(bridge, move) {
    if (bridge[this.#count] === move) {
      return true;
    }
    return false;
  }

  checkUpDown(bridge) {
    if (bridge[this.#count] === "U") {
      return "Up";
    }
    return "Down";
  }

  passCase(bridge) {
    if (this.checkUpDown(bridge) === "Up") {
      this.upPass();
    }
    if (this.checkUpDown(bridge) === "Down") {
      this.downPass();
    }
  }

  failCase(bridge) {
    if (this.checkUpDown(bridge) === "Up") {
      this.upFail();
    }
    if (this.checkUpDown(bridge) === "Down") {
      this.downFail();
    }
  }

  move(bridge, move) {
    if (this.checkPass(bridge, move) === true) {
      this.passCase(bridge);
    }
    if (this.checkPass(bridge, move) === false) {
      this.failCase(bridge);
    }
    this.countUp();
  }

  getResult() {
    return this.#result;
  }

  getTryCount() {
    return this.#tryCount;
  }

  checkRetry(retry) {
    if (retry === "R") {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;
