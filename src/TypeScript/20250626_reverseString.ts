/**
 * 문제 설명
 * 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
 * my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
 *
 * 제한사항
 * - my_string은 숫자와 알파벳으로만 이루어져 있습니다.
 * - 1 ≤ my_string의 길이 ≤ 1,000
 * - 0 ≤ s ≤ e < my_string의 길이
 *
 * 입출력 예
 * | my_string           | s  | e   | result               |
 * |---------------------|----|-----|----------------------|
 * | `Progra21Sremm3`    | 6  | 12  | `ProgrammerS123`     |
 * | `Stanley1yelnaTS`   | 4  | 10  | `Stanley1yelnaTS`    |
 */
const reverseString = (myString: string, s: number, e: number): string => {
  // 인덱스[s] 직전까지 담은 배열 1개
  let arrayBeforeS: string = ``;
  for (let i = 0; i < s; i = i + 1) {
    arrayBeforeS = arrayBeforeS + myString[i];
  }
  console.log(`arrayBeforeS = ${arrayBeforeS}`);

  // 인덱스[e] 부터 담은 배열 1개 (인덱스[e] 직전까지)
  let arrayFromE: string = ``;
  for (let i = e + 1; i < myString.length; i = i + 1) {
    arrayFromE = arrayFromE + myString[i];
  }
  console.log(`arrayFromE = ${arrayFromE}`);

  // 인덱스[s]와 인덱스[e] 사이를 담은 배열 1개
  let arrayBetweenSE: string = ``;
  for (let i = s; i <= e; i = i + 1) {
    arrayBetweenSE = arrayBetweenSE + myString[i];
  }
  console.log(arrayBetweenSE);

  let arrayBetweenSEReverse: string = ``;
  // arrayBetweenSE 배열 뒤집기
  for (let i = arrayBetweenSE.length - 1; i >= 0; i = i - 1) {
    arrayBetweenSEReverse = arrayBetweenSEReverse + arrayBetweenSE[i];
  }
  console.log(`arrayBetweenSEReverse = ${arrayBetweenSEReverse}`);

  // 3개의 배열 합치기
  return arrayBeforeS + arrayBetweenSEReverse + arrayFromE;
};

console.log(reverseString(`123456789`, 4, 6)); // 123476589
console.log(reverseString(`Progra21Sremm3`, 6, 12)); // ProgrammerS123
console.log(reverseString(`Stanley1yelnaTS`, 4, 10)); // Stanley1yelnaTS
console.log(`========================`);

const reverseStringV2 = (myString: string, s: number, e: number): string => {
  // 인덱스[s] 이전 문자열
  const prefix: string = myString.slice(0, s);

  // 인덱스[s] ~ 인덱스[e] 사이를 잘라서 배열로 만든 후, 역순으로 뒤집고 다시 문자열로 바꿈
  const middle: string = myString
    .slice(s, e + 1) // 인덱스 s부터 e까지 추출
    .split(``) // 글자 하나하나를 배열 요소로
    .reverse() // 배열 뒤집기
    .join(``); // 다시 문자열로 합치기

  // 인덱스[e] 이후 문자열
  const suffix: string = myString.slice(e + 1);

  return prefix + middle + suffix;
};

console.log(reverseStringV2(`123456789`, 4, 6)); // 123476589
console.log(reverseStringV2(`Progra21Sremm3`, 6, 12)); // ProgrammerS123
console.log(reverseStringV2(`Stanley1yelnaTS`, 4, 10)); // Stanley1yelnaTS

// 문자열 문법 split & join
// 💡split(): 문자열을 특정 구분자(separator)로 분할하여 배열로 반환(원본 문자열은 변경되지 않음)
// 인수 없이 -> 문자열 전체를 단일 요소로 반환(예: `abc`.split() -> [`abc`])
// separator='' -> 문자열을 글자 단위로 분할(예: `abc`.split('') -> [`a`,`b`,`c`])
// separator='' -> 문자열을 글자 단위로 분할(예: `a,b,c`.split('') -> [`a`, `,`, `b`, `,`, `c`])
// separator가 있을 때 -> 해당 구분자로 문자열을 분리(예: `a,b,c`.split(',') -> [`a`,`b`,`c`])
// limit 지정 시 -> 최대 limit 개수만큼 요소를 반환(예: `a,b,c`.split(',', 2) -> [`a`,`b`])

// 💡join(): 배열 요소를 문자열로 결합하여 반환(원본 배열은 변경되지 않음)
// 인수 없이 -> 쉼표(,)를 구분자(separator)로 사용(예: [`a`,`b`,`c`].join() -> `a,b,c`)
// separator='' -> 구분자 없이 딱 붙여서 문자열로 결합(예: [`a`,`b`,`c`].join('') -> `abc`)
// separator 지정 시 -> 해당 문자열을 구분자로 사용(예: [`a`,`b`,`c`].join('-') -> `a-b-c`)
// separator 지정 시 -> 해당 문자열을 구분자로 사용(예: [`a`,`b`,`c`].join(', ') -> `a, b, c`)
