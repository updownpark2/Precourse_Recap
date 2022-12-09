const ERROR = Object.freeze({
  CAR_NAME_LENGTH: `[ERROR] 이름은 5글자 이하만 가능합니다.`,
  CAR_NAME_BLANK: `[ERROR] 공백은 입력될 수 없습니다.`,
  CAR_NAME_ONLY_ALPABET: `[ERROR] 알파벳만 입력이 가능합니다.`,
  CAR_NAME_COMMA: `[ERROR] ,이 연속으로 입력 되었습니다.`,
  CAR_NAME_DUPLICATION: `[ERROR] 중복된 이름은 사용할 수 없습니다.`,
  CAR_NAME_INCLUDES_BLANK: `[ERROR] 이름에 공백이 존재합니다.`,

  TRY_COUNT_ONLY_NUM: `[ERROR] 숫자만 입력이 가능합니다.`,
  TRY_COUNT_RANGE: `[ERROR] 최소 입력값은 1입니다.`,
});

const INPUT = Object.freeze({
  CAR_NAME: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분`,
  TRY_COUNT: `시도할 회수는 몇회인가요?`,
});

const OUTPUT = Object.freeze({
  WINNER: `최종 우승자 : `,
});

const PICKNUMBER = Object.freeze({
  MIN_RANGE: 1,
  MAX_RANGE: 10,
});

module.exports = { ERROR, INPUT, OUTPUT, PICKNUMBER };
