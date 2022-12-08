const InputView = require(`./InputView`);
const OutputView = require(`./OutputView`);
const Validation = require(`./Validation`);

class RacingController {
  #validation = new Validation();

  getCarName() {
    InputView.carName((carName) => {
      if (this.#checkCarName(carName) !== false) {
      }
    });
  }

  #checkCarName(carName) {
    try {
      this.#validation.totalCheckCarName(carName);
    } catch (error) {
      this.#validationFailAndShowError(error);
      this.getCarName();
      return false;
    }
  }

  #validationFailAndShowError(error) {
    OutputView.showError(error);
  }
}

module.exports = RacingController;
