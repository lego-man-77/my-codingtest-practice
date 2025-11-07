/**
 * my_string은 "3 + 5"처럼 문자열로 된 수식입니다.
 * 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
 *
 * 제한사항
 * - 연산자는 +, -만 존재합니다.
 * - 문자열의 시작과 끝에는 공백이 없습니다.
 * - 0으로 시작하는 숫자는 주어지지 않습니다.
 * - 잘못된 수식은 주어지지 않습니다.
 * - 5 ≤ my_string의 길이 ≤ 100
 * - my_string을 계산한 결과값은 1 이상 100,000 이하입니다.
 * - my_string의 중간 계산 값은 -100,000 이상 100,000 이하입니다.
 * - 계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수입니다.
 * - my_string에는 연산자가 적어도 하나 포함되어 있습니다.
 * - return type 은 정수형입니다.
 * - my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.
 *
 * 입출력 예
 * - 입력:  my_string = "3 + 4"
 * - 출력:  result = 7
 *
 * 입출력 예 설명
 * - 3 + 4 = 7을 return 합니다.
 */
const calculateNumberOfString = (myString: string): number => {
  let calNumber = 0;
  let result = 0;
  for (let i = 0; i < myString.length; i = i + 1) {
    const parseIntMyString = parseInt(myString[i]);
    if (!Number.isNaN(parseIntMyString)) {
      calNumber = parseIntMyString;
    } else if (myString[i] === "+") {
      result = result + calNumber;
      calNumber = 0;
    }
  }
  result = result + calNumber;
  return result;
};

console.log(calculateNumberOfString("3 + 4")); // 7✅
console.log(calculateNumberOfString("10 + 5 - 4")); // 11❌
console.log(calculateNumberOfString("1 + 3 / 3 * 5 - 5")); // 1❌
console.log(`========================`);

// ⚠️이슈
// 사칙연산 중에서 "더하기"만 가능
// 두 자릿수 이상 숫자판별 불가
// 2개 이상의 연산 불가
// "곱하기, 나누기"와 같은 복합 연산 불가

const calculateNumberOfStringV2 = (myString: string): number => {
  const myStringArray = myString.split(` `);
  let result = Number(myStringArray[0]);
  for (let i = 1; i < myStringArray.length; i = i + 2) {
    const op = myStringArray[i];
    const calNumber = Number(myStringArray[i + 1]);
    if (op === "+") {
      result = result + calNumber;
    } else if (op === "-") {
      result = result - calNumber;
    }
  }
  return result;
};

console.log(calculateNumberOfStringV2("3 + 4")); // 7✅
console.log(calculateNumberOfStringV2("10 + 5 - 4")); // 11✅
console.log(calculateNumberOfStringV2("1 + 3 / 3 * 5 - 5")); // 1❌
console.log(`========================`);

// ⛑️해결
// 공백을 기준으로 나누어져 있는 myString을 split으로 배열로 변환,
// "숫자 - 연산자 - 숫자 - 연산자"규칙을 이용하여 "두자릿수, 더하기, 빼기"연산 문제 해결

// ⚠️이슈
// "곱하기, 나누기"와 같은 복합 연산 불가

const calculateNumberOfStringV3 = (myString: string) => {
  const myStringArray = myString.split(` `);
  let resultArray: number[] = [Number(myStringArray[0])];
  for (let i = 1; i < myStringArray.length; i = i + 2) {
    const op: any = myStringArray[i];
    const calNumber: number = Number(myStringArray[i + 1]);
    if (op === "*") {
      resultArray[resultArray.length - 1] =
        resultArray[resultArray.length - 1] * calNumber;
    } else if (op === "/") {
      resultArray[resultArray.length - 1] =
        resultArray[resultArray.length - 1] / calNumber;
    } else {
      resultArray.push(op, calNumber);
    }
  }

  let result: number = resultArray[0];
  for (let i = 1; i < resultArray.length; i = i + 2) {
    const op: any = resultArray[i];
    const calNumber = Number(resultArray[i + 1]);
    if (op === "+") {
      result = result + calNumber;
    } else if (op === "-") {
      result = result - calNumber;
    }
  }
  return result;
};

console.log(calculateNumberOfStringV3("3 + 4")); // 7✅
console.log(calculateNumberOfStringV3("10 + 5 - 4")); // 11✅
console.log(calculateNumberOfStringV3("1 + 3 / 3 * 5 - 5")); // 1✅

// ⛑️해결
// "곱하기, 나누기"부터 먼저 연산
// "덧셈, 뺄셈"이 등장하는 경우, "연산자, 그 다음 숫자"를 resultArray에 추가
// resultArray의 "마지막 숫자"에만 연산을 하면 되기 때문에, "resultArray.length - 1"를 인덱스로 사용

// ⚠️이슈
// TypeScript 특성 상, number[]에 string을 push 하려고 하자 타입 에러 발생 -> op: any로 임시해결
