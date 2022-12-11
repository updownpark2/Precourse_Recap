# precourse-Recap
우테코 [5기] 에서 배운 것들을 복습한다! (미션 다시 수행)

# 프리코스가 끝난 후

포크해온 레포지토리는 잔디가 심어지지 않아 Readme파일에 따로 기록해보겠다!!

11월 23일 프리코스가 종료되었다!! 아쉬움도 있었고 후련함도 있었다.
필자는 몰입을 한 경험 후에는 늘어지는 경향이 있어 이번 프리코스가 끝난 이 후 시점 역시 굉장히 중요했다! 그런데 이번 프리코스가 끝난 후는 달랐다.
~~(물론 목요일부터 일요일까지는 푹쉬었다.. ㅎㅎ, 2보 전진을 위한 1보 후퇴!😁)~~
이번엔 내가 얼마나 성장했는지 궁금하기도 하고 또 예전에 수행했던 미션들을 
다시 코딩하며 복습해보고싶었다. 

## 2주차 미션을 다시 풀다! 
2주차 미션은 **숫자야구 게임**으로 개인적으로 수행하는데 가장 오래 걸렸던 미션이다! 
2주차 미션의 요구사항을 만족하는데 오늘 5시간정도 걸렸다.~~(잘했는지는..)~~
하지만 3주전의 나는 상상도 못할 정도의 다양한 생각과 스피드가 생겼음을 분명 느낄 수 있었다. 4주 동안의 노력이 나에게 정말 좋은 영양분이 되었구나..🌴 라는 생각을 했다..

이번 포스팅에서는 3주전의 나와 지금의 나를 비교해 볼 것이다! 

## 나 VS 나
![](https://velog.velcdn.com/images/tkdgk1996/post/1f9dbb96-feac-488a-9796-cb35551795ec/image.jpeg)

3주전의 나와 지금의 나를 비교 했을 때 가장 신경을 많이 썼던 부분은 

1. 객체를 객체답게 만들어 가독성과 효율성을 높여보자
2. 함수의 길이는 10줄이하로 만들자
3. 커밋의 수를 50개 밑으로 만들자
4. 테스트 코드를 잘 짜보자
이 세가지 이다. 

그 외에 함수분리, 클래스분리, 디렉토리 분리 등 4주간의 미션 요구사항을 모두 신경 쓰면서 최선의 코드를 만들어보려 노력했다! 

위 세 가지를 더욱 신경 쓴 이유는 가장 인상깊었기 때문이다. 저 세 가지를 충족시켰을 때의 그 쾌감과 실제 코드의 가독성이 나아지는 경험을 했고 또 필자에게 가장 어려운 요구사항이었기 때문에 어떻게 보면 과거의 나에게 핸디캡을 주었다 ㅎㅎ ..👀

## 커밋 비교 

2주차 미션의 커밋 수는 110개였다.. 필자에게 가장 어려웠던 미션이었던 만큼 가장 많은 커밋수를 기록하였다.. 그래서 더욱 커밋수를 최소한으로 미션을 다시 성공시켜보고 싶었다! 

> **결론은 커밋수 110개 -> 25개로 감소!!!**

![](https://velog.velcdn.com/images/tkdgk1996/post/24cf78a5-96dd-4d57-a1a0-efac220dc918/image.png)
![](https://velog.velcdn.com/images/tkdgk1996/post/80c22646-9824-448d-aa6c-054308fc72b4/image.png)

물론 한 번 해봤던 미션이기에 커밋수가 줄어든 경향도 있다. 그렇지만 코드를 직접 짜면서도 커밋에 신경쓰는 나를 발견할 수 있었다. 
커밋을 줄일 수 있었던 요인은 크게 두 가지가 있었다.

1. 기능목록 작성하는데 시간을 투자하기
2. 커밋할 때 다시 한번 기능 살피기

이는 4주차 미션 때 얻었던 나의 노하우 아닌 노하우 라고 볼 수 있다..ㅎㅎ
이를 통해 필요한 커밋만 추가할 수 있었다. 

본격적으로 코드를 비교하며 어떤 점이 나아졌는지 기록해보겠다!!

## 나 VS 나 코드 비교 💻

너무 많은 차이를 보여.. 포스팅의 길이가 길어질수 있는 점 미리 양해 부탁드립니다..

필자는 MVC패턴에 맞추어 각 디렉토리를 비교해보겠다!

### controller

#### App.js는 스위치 역할만하도록 구성!
 지금의 내가 짠 코드는
controller를 App.js로 설정하지 않고 따로 하나의 controller 파일을 만들었다. 
GameController.js에서 Model과 View에서의 정보를 받아 오도록 하였다.  
> 사실 App.js가 controller의 역할을 해도 되지만 
GameController.js을 만듦으로써 app.play()가 스위치의 역할만 하도록 코드를 구성하였다.

#### 불필요한 constructor 제거

과거의 나 코드는 불필요한 constructor가 많이 있었다. 

```js
class App {
  constructor() {
    this.computerInput = ComputerInput();
    this.firstTry = true;
    this.errorResult = ERROR.USER_INPUT_PASS;
    this.errorRetryResult = ERROR.USER_INPUT_PASS;
  }
  play() {
    this.gameStart();
  }

  startMention() {
    if (this.firstTry === true) {
      render.startment();
      console.log(this.computerInput);
    }
  }

  gameStart() {
    this.startMention();

    Console.readLine(GAME.START_GETNUMBER, (num) => {
      this.userNum = this.numToArr(num);
      this.checkVaild(this.userNum);
    });
  }
```
과거의 나 코드의 일부분을 가져왔다. 위 보면 this.firstTry 와 this.errorResult, this.errorRetryResult는 굳이 없어도 되는 부분이라고 판단이 된다.

지금의 나는 
```js
class GameController {
  getComputer() {
    this.computer = Computer();
  }

  gameStartMent() {
    UserOutput.start();
    this.getComputer();
  }

  gameStart() {
    UserInput.number((userInput) => {
      validation.checkNumber(userInput);
      this.gameCalculation(userInput);
    });
  }
```
this.computerInput을 제외하고는 constructor를 사용하지 않았다. 
객체를 객체답게 만들고 함수를 최대한 분리하다보니 constroller의 부담이 줄어든 것으로 보인다! 

this. firstTry는 시작 멘트를 출력하는데만 필요하다보니 따로 **StartMent메서드를 만들어 App.js에서 한 번만 실행되도록 코드를 구성하였다. **

#### 유저의 입력을 받는 부분은 View에서 처리되도록!

과거의 코드를 보면 Console.readLine 함수가 Controller에서 직접 실행된다. 하지만 이는 View가 담당해야할 역할이라 보인다. 그렇게 지금의 코드를 보면 UserInput이라는 View에서 인풋을 받아와 callback 함수만 controller에서 실행되도록 코드를 구성하였다. 이렇게 코드를 구성하니 Controller가 가벼워져 보기에도 좋고 각 함수들의 기능이 더욱 단순화 되었다.

#### 불필요한 class줄이기

과거의 나는 class를 왜 아무때나 사용했는지 모르겠다. 객체로 넘겨줄 수 도있고 함수만 넘겨줘도 되는 것들을 class로 넘겨주다보니 불필요한 생성자 함수들이 생겨났었다..
![](https://velog.velcdn.com/images/tkdgk1996/post/eaf701ba-b003-430f-a6c0-ffe718fad5b0/image.png)

필드값을 사용해 객체를 객체답게 만들어 내부에서 모든 값이 계산되도록 할 것이 아니라면 굳이 class를 사용하지 않아도 될 것이라 생각이 들었다.

![](https://velog.velcdn.com/images/tkdgk1996/post/3532c2a0-9481-426e-9b50-a3caaccaaec2/image.png)

이렇게 객체로 선언해주는 것이 Controller에서 함수를 사용할 때 더 가독성있고 사용하기 편하다! 

#### 불필요한 코드 띄기 줄이기

과거의 코드를 살펴보니 불필요하게 코드를 띄어 적는 오류를 발견했다. 이는 가독성을 헤치는 행위임을 알게되었다. 이번 코드에서는 코드컨벤션을 더욱 참고해서 필요한 부분 (return등)에서만 코드를 띄어 쓰고 그렇지 않은 부분은 그냥 붙여서 사용했다! 

과거의 코드
```js
 checkVaild(userNum) {
    const checkUserInputValid = checkNumVaild.checkUserInput(userNum);

    render.errorThrow(checkUserInputValid);

    this.gameRender();
  }

  gameRender() {
    const [userBallCount, userStrikeCount] = this.gameBallAndStrike();

    render.result(userBallCount, userStrikeCount);

    this.gameJudge(userStrikeCount);
  }

  gameJudge(userStrikeCount) {
    if (userStrikeCount !== 3) {
      this.notThreeStrike();
    }
    if (userStrikeCount === 3) {
      Console.readLine(GAME.END_RETRY_MENTION, (retryOrEndNum) => {
        this.userRetryNum = retryOrEndNum;
        this.checkRetryNumVaild(this.userRetryNum);
      });
    }
  }
```
현재의 코드
```js
  gameStart() {
    UserInput.number((userInput) => {
      validation.checkNumber(userInput);
      this.gameCalculation(userInput);
    });
  }

  gameCalculation(userInput) {
    gameRule.totalCalculation(this.computer, userInput);
    const gameResult = gameRule.result();
    if (this.gameEnd(gameResult) === true) {
      this.gameRetry(gameResult);

      return;
    }
    this.gameContinue(gameResult);
  }

  gameContinue(result) {
    UserOutput.showResult(result);
    gameRule.reset();
    this.gameStart();
  }
```

#### 매개변수명, 변수명 통일성가지기

이번 코드를 짜면서 받는 값이 동일한 특성이라면 최대한 같은 매개변수명을 사용하려 했다. 과거의 코드는 매개변수명이 계속 변경되다보니 어떤 값을 받는 것인지 정확하게 파악이 안됐던 오류가 있었던 거 같다. 지금의 코드는 만약 user에게 받는 정보라면 userInput으로 통일, 결과를 담는 매개변수라면 result를 한 눈에 타인이 파악이 가능하도록 매개변수명을 통일해 사용하였다.
변수명 역시 game이라는 키워드를 앞에 붙여 controller의 통일성을 부여했고 최대한 이 함수가 하는 기능에 맞추어 변수명을 결정하였다. 
만약 boolean타입을 변환하는 함수라면 true, false로 비교했을 때 다음 프로그램의 기능이 예측되도록 변수명을 결정하였다. 

아래의 코드는 현재의 내가 짠 코드이다! 
아래의 코드를 보면 userInput과 gameResult를 넣어 함수를 실행시키는데
실제 코드의 매개변수명도 userInput과 gameResult이다. 이처럼 매개변수와 실제 들어오는 값의 명의 동일시하여 최대한 가독성이 좋게 다시 구성하였다!
```js
 gameStart() {
    UserInput.number((userInput) => {
      validation.checkNumber(userInput);
      this.gameCalculation(userInput);
    });
  }

  gameCalculation(userInput) {
    gameRule.totalCalculation(this.computer, userInput);
    const gameResult = gameRule.result();
    if (this.gameEnd(gameResult) === true) {
      this.gameRetry(gameResult);

      return;
    }
    this.gameContinue(gameResult);
  }
```

아래의 코드를 보면 gameRule.retry()메서드가 있다. 
boolean 타입이 true 일때 실행되는 함수들이 retry할 때 실행되는 함수임을 알 수 있도록 코드를 구성하였다.
```js
gameRetry(result) {
    UserOutput.showResult(result);
    UserOutput.retry();
    UserInput.retry((userInput) => {
      validation.checkRetry(userInput);
      if (gameRule.retry(userInput) === true) {
        this.gameReplay();

        return;
      }
      this.gameComplete();
    });
  }
```
#### return을 통해 if문 줄이기

과거의 코드를 보면 if문을 연달아 쓰는 경우가 많았음을 알게되었다. if문이 많다보니 가독성은 떨어지고 코드 자체의 효율성도 좋지 않아졌다. return을 통해 if문을 줄인다는 말이 무엇인지 과거의 나는 잘몰랐었다.
이번 코드를 다시 짜보면서 return을 이용해 if문을 줄인다는 말을 이해하게 되었다!
```js
 gameCalculation(userInput) {
    gameRule.totalCalculation(this.computer, userInput);
    const gameResult = gameRule.result();
    if (this.gameEnd(gameResult) === true) {
      this.gameRetry(gameResult);

      return;
    }
    this.gameContinue(gameResult);
  }
```
지금의 코드는 위 코드와 같이 return을 해버려서 gameEnd 일때 gameRetry를 하고 아니면 continue한다는 게 잘 보인다.
반면 아래의 과거코드는 if문의 반복과 매개변수명으로 인해 코드가 잘 읽히지 않는다.
```js
gameJudge(userStrikeCount) {
    if (userStrikeCount !== 3) {
      this.notThreeStrike();
    }
    if (userStrikeCount === 3) {
      Console.readLine(GAME.END_RETRY_MENTION, (retryOrEndNum) => {
        this.userRetryNum = retryOrEndNum;
        this.checkRetryNumVaild(this.userRetryNum);
      });
    }
  }
```
이렇게 return을 통해 가독성이 더 나아질 수 있다는 점을 배웠다.

#### 전체적인 코드비교 <과거 vs 현재>

과거의 코드
```js
class App {
  constructor() {
    this.computerInput = ComputerInput();
    this.firstTry = true;
    this.errorResult = ERROR.USER_INPUT_PASS;
    this.errorRetryResult = ERROR.USER_INPUT_PASS;
  }
  play() {
    this.gameStart();
  }

  startMention() {
    if (this.firstTry === true) {
      render.startment();
      console.log(this.computerInput);
    }
  }

  gameStart() {
    this.startMention();

    Console.readLine(GAME.START_GETNUMBER, (num) => {
      this.userNum = this.numToArr(num);
      this.checkVaild(this.userNum);
    });
  }

  checkVaild(userNum) {
    const checkUserInputValid = checkNumVaild.checkUserInput(userNum);

    render.errorThrow(checkUserInputValid);

    this.gameRender();
  }

  gameRender() {
    const [userBallCount, userStrikeCount] = this.gameBallAndStrike();

    render.result(userBallCount, userStrikeCount);

    this.gameJudge(userStrikeCount);
  }

  gameJudge(userStrikeCount) {
    if (userStrikeCount !== 3) {
      this.notThreeStrike();
    }
    if (userStrikeCount === 3) {
      Console.readLine(GAME.END_RETRY_MENTION, (retryOrEndNum) => {
        this.userRetryNum = retryOrEndNum;
        this.checkRetryNumVaild(this.userRetryNum);
      });
    }
  }

  gameBallAndStrike() {
    const userInput = this.userNum;
    const computerInput = this.computerInput;

    const [userBallCount, userStrikeCount] = gameJudgment.judgement(
      userInput,
      computerInput
    );

    return [userBallCount, userStrikeCount];
  }

  checkRetryNumVaild() {
    const checkUserRetryInputValid = checkRetryNumVaild.checkUserRetryInput(
      this.userRetryNum
    );

    render.errorThrow(checkUserRetryInputValid);

    this.retryOrEnd();
  }

  retryOrEnd() {
    const userRetryNumber = this.userRetryNum;

    if (userRetryNumber === "1") {
      this.settingRetry();
    }

    if (userRetryNumber === "2") {
      const render = new Render();
      render.end();
    }
  }
  numToArr(num) {
    return [...String(num)];
  }

  settingRetry() {
    this.firstTry = false;
    this.computerInput = ComputerInput();
    this.play();
  }

  notThreeStrike() {
    this.firstTry = false;
    this.play();
  }
}
```
현재의 코드
```js
class GameController {
  getComputer() {
    this.computer = Computer();
  }

  gameStartMent() {
    UserOutput.start();
    this.getComputer();
  }

  gameStart() {
    UserInput.number((userInput) => {
      validation.checkNumber(userInput);
      this.gameCalculation(userInput);
    });
  }

  gameCalculation(userInput) {
    gameRule.totalCalculation(this.computer, userInput);
    const gameResult = gameRule.result();
    if (this.gameEnd(gameResult) === true) {
      this.gameRetry(gameResult);

      return;
    }
    this.gameContinue(gameResult);
  }

  gameContinue(result) {
    UserOutput.showResult(result);
    gameRule.reset();
    this.gameStart();
  }

  gameRetry(result) {
    UserOutput.showResult(result);
    UserOutput.retry();
    UserInput.retry((userInput) => {
      validation.checkRetry(userInput);
      if (gameRule.retry(userInput) === true) {
        this.gameReplay();

        return;
      }
      this.gameComplete();
    });
  }

  gameReplay() {
    gameRule.reset();
    this.getComputer();
    this.gameStart();
  }
  gameComplete() {
    UserOutput.complete();
  }

  gameEnd(result) {
    if (result[0] === 3) {
      return true;
    }
  }
}

```
현재의 코드는 전체적으로 길이가 줄어들었을 뿐 아니라 numToArray, settingRetry,notThreeStrike등 불필요한 메서드들을 줄이고 Model에서 이와 같은 처리를 하도록 설계하여 보기에 더 나은 코드를 보여준다. 


### Model 

가장 많이 바뀐 부분은 Model 이다! 이전에 Model에서 처리해야 할 것들을 Controller에서 처리한 부분이 많이 보였다. 
이번 코딩에서는 Controller는 함수를 호출만하고 Model은 내부에서 최대한 일을 하도록 설계하였다. 전체 적인 코드를 먼저 비교 후 하나하나 되짚어 볼 것이다! 

과거의 Game을 판단하는 Class(Model) 코드
```js
function countStrikeAndBall(user, computer) {
  let ballCount = 0;
  let strikeCount = 0;

  for (let i = 0; i < 3; i++) {
    if (user[i] === computer[i]) {
      strikeCount = strikeCount + 1;
    }
    if (user[i] !== computer[i] && computer.includes(user[i])) {
      ballCount = ballCount + 1;
    }
  }
  return [ballCount, strikeCount];
}

class GameJudgment {
  judgement(ballCount, strikeCount) {
    const [userBallCount, userStrikeCount] = countStrikeAndBall(
      ballCount,
      strikeCount
    );
    return [userBallCount, userStrikeCount];
  }
}
module.exports = GameJudgment;
```
1. 위 코드를 보면 Class 따로 function 따로 만들어져 굳이 class로 만들 이유를 찾기 힘들다..(왜 이렇게 했을까?)
2. countStrikeAndBall이라는 메서드를 class 내부로 넣어 judment를 했다면 더 좋았을 텐데 라는 아쉬움이 남는다. 
3. 또한 if 문이 두 번 사용이 되고 불필요한 return이 많아 이 코드가 최종적으로 무엇을 return하고 싶은건지알기 힘들다. 
4. 매개변수명이 user, computer인데 이보단 userInput, ComputerInput 이 더 적절한 매개명수명이 됐을 거 같다.

현재 Game을 판단하는 Class(Model) 코드
```js
class GameRule {
  #strikeCount;
  #ballCount;
  constructor(strikeCount, ballCount) {
    this.#strikeCount = strikeCount;
    this.#ballCount = ballCount;
  }
  stringToArr(userInput) {
    return userInput.split("");
  }

  strikeCountUp() {
    this.#strikeCount = this.#strikeCount + 1;
  }
  ballCountUp() {
    this.#ballCount = this.#ballCount + 1;
  }

  strikeCalulation(computer, userInput, i) {
    if (computer[i] === this.stringToArr(userInput)[i]) {
      this.strikeCountUp();
    }
  }
  ballCalulation(computer, userInput, i) {
    if (
      computer.includes(this.stringToArr(userInput)[i]) &&
      computer[i] !== this.stringToArr(userInput)[i]
    ) {
      this.ballCountUp();
    }
  }

  totalCalculation(computer, userInput) {
    for (let i = 0; i < 3; i++) {
      this.strikeCalulation(computer, userInput, i);
      this.ballCalulation(computer, userInput, i);
    }
  }

  result() {
    return [this.#strikeCount, this.#ballCount];
  }

  reset() {
    this.#strikeCount = 0;
    this.#ballCount = 0;
  }

  retry(userInput) {
    if (userInput === "1") {
      return true;
    }
    if (userInput === "2") {
      return false;
    }
  }
}

module.exports = GameRule;

```
1.현재의 코드에서 class의 필드를 적극 활용하여 내부에서 최대한 값이 처리되도록 수정하였다. 

2. setter함수인 strikeCountUp, ballCountUp,strikeCalculation, ballCalculation 등을 활용하여 값을 변경 시킨 후 getter 메서드인 result를 통해 strikecount와 ballcount를 밖으로 내보냈다. 

3. 또한 반복문은 한 번만 실행시키기 위해 index의 값을 매개변수로 받아 for문 안에서 함수를 index값 만큼 실행시키도록 하였다. 

4. stringToArr를 현재의 코드에서는 Controller가 아닌 Model에서 실행 시키도록 하였다. 이유는 string에서 array로 바꿔주는 것 역시 Model에서 실행되어야 코드가 깔끔해 진다고 판단하였다. 

5. 전체적으로 현재의 코드가 더 나아보인다(부족한 점은 아직 너무나 많지만..)

#### 타당성 검사 비교

과거의 코드
```js
function checkLengthOfUserInput(userNum) {
  if (userNum.length !== 3) {
    return false;
  }
}
function checkDuplicatesOfUserInput(userNum) {
  let checkArr = [];
  let i = 0;
  for (; i < userNum.length; i++) {
    if (checkArr.includes(userNum[i]) === true) {
      return false;
    }
    checkArr.push(userNum[i]);
  }
}
function checkRangeOfUserInput(userNum) {
  if (/^[1-9]*$/g.test(userNum.join("")) === false) {
    return false;
  }
}

function checkRangeOfRetryUserInput(retryNum) {
  if (/^[1-2]*$/g.test([...String(retryNum)].join("")) === false) {
    return false;
  }
}
function checkLengthOfRetryUserInput(retryNum) {
  if ([...String(retryNum)].length !== 1) {
    return false;
  }
}

class CheckInputValid {
  checkUserInput(userNum) {
    if (checkLengthOfUserInput(userNum) === false) {
      return ERROR.USER_INPUT_LENGTH;
    }

    if (checkDuplicatesOfUserInput(userNum) === false) {
      return ERROR.USER_INPUT_DUPLICATES;
    }

    if (checkRangeOfUserInput(userNum) === false) {
      return ERROR.USER_INPUT_RANGE;
    }
    return ERROR.USER_INPUT_PASS;
  }

  checkUserRetryInput(retryNum) {
    if (checkRangeOfRetryUserInput(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_RANGE;
    }

    if (checkLengthOfRetryUserInput(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_LENGTH;
    }
    return ERROR.USER_INPUT_PASS;
  }
}
module.exports = CheckInputValid;
```
1. 과거의 나는 타당성을 체크하는 class에서 바로 throw new Error를 날리지 않고 메세지를 리턴하는 방식을 사용했다. 하지만 이렇게 코드를 구성하니 코드가 길어 지고 지저분해졌음을 알 수 있었다.

2. 또한 각 상황별 타당성을 체크하는 함수들을 클래스 내부 메서드에 두는 게 더 보기 좋았을 거 같다. 

현재의 코드 
```js
class Validation {
  stringToArr(userInput) {
    return userInput.split("");
  }

  checkRange(userInput) {
    let checkArr = [];
    let i = 0;
    for (; i < 3; i++) {
      if (checkArr.includes(userInput[i])) {
        return false;
      }
      checkArr.push(userInput[i]);
    }
    return true;
  }

  checkNumber(userInput) {
    if (userInput.length !== 3) {
      throw new Error(`3개의 숫자만 입력해주세요.`);
    }
    if (/^[1-9]*$/g.test(userInput) === false) {
      throw new Error(`숫자만 입력해주세요.`);
    }
    if (this.checkRange(this.stringToArr(userInput)) === false) {
      throw new Error(`반복되지 않는 3개의 숫자를 입력해주세요.`);
    }
  }
  checkRetry(userInput) {
    if (userInput.length !== 1) {
      throw new Error(`1개의 숫자만 입력해주세요.`);
    }
    if (/^[1-2]*$/g.test(userInput) === false) {
      throw new Error(`1 또는 2의 숫자만 입력해주세요`);
    }
  }
}

module.exports = Validation;

```
1. 현재의 코드는 과거의 코드보다 길이는 줄었지만 가독성의 측면에서 더 좋은 모습을 보인다고 생각한다.

### 프라이빗 # 

# 를 붙여서 메서드를 외부에서 호출할 수 없도록 하는 방법을 학습하였다.
