class BridgeGame {
  #result = [[], []];

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

  checkPass(bridge, move, index) {
    if (bridge[index] === move) {
      return true;
    }
    return false;
  }

  checkUpDown(bridge, index) {
    if (bridge[index] === "U") {
      return "Up";
    }
    return "Down";
  }

  passCase(bridge, index) {
    if (this.checkUpDown(bridge, index) === "Up") {
      this.upPass();
    }
    if (this.checkUpDown(bridge, index) === "Down") {
      this.downPass();
    }
  }

  failCase(bridge, index) {
    if (this.checkUpDown(bridge, index) === "Up") {
      this.upFail();
    }
    if (this.checkUpDown(bridge, index) === "Down") {
      this.downFail();
    }
  }

  move(bridge, move, index) {
    if (this.checkPass(bridge, move, index) === true) {
      this.passCase(bridge, index);
    }
    if (this.checkPass(bridge, move, index) === false) {
      this.failCase(bridge, index);
    }
  }

  getResult() {
    return this.#result;
  }
}
/*
 if (move === "U" && bridge[index] === move) {
      this.upPass();
    }
    if (move === "D" && bridge[index] === move) {
      this.downPass();
    }
    if (move === "U" && bridge[index] !== move) {
      this.upFail();
    }
    if (move === "D" && bridge[index] !== move) {
      this.downFail();
    }
*/
