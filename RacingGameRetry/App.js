const { Console, Random } = require("@woowacourse/mission-utils");
const RacingController = require(`./RacingController`);

class App {
  play() {
    const racingController = new RacingController();
    racingController.getCarName();
  }
}

module.exports = App;
