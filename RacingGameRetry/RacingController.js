const InputView = require(`./InputView`);

class RacingController {
  getCarName() {
    InputView.carName((carName) => {});
  }
}

module.exports = RacingController;
