const LottoController = require("./LottoController");

class App {
  play() {
    const lottoController = new LottoController();
    lottoController.start();
  }
}

module.exports = App;
