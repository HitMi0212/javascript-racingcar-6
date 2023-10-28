import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Message';
import { checkCarNames, checkTryNumber } from './Validation';
class App {
  async play() {
    const winner = await this.carRacingGame();
  }

  // 자동차 경주 시작
  async carRacingGame() {
    try {
      const carNameArr = await this.getCarNames();
      const tryNumber = await this.getTryNumber();
    } catch (e) {
      throw e;
    }
  }

  async getCarNames() {
    const carNames = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR_NAME);
    checkCarNames(carNames);
    return carNames.split(',');
  }

  async getTryNumber() {
    const tryNumber = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_TRY_NUMBER,
    );
    checkTryNumber(tryNumber);
    return tryNumber;
  }
}

export default App;
