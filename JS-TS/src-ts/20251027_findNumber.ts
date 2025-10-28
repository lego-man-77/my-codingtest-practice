/**
 * 문제 설명
 * 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면
 * num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록
 * solution 함수를 완성해보세요.
 *
 * 제한사항
 * - 0 < num < 1,000,000
 * - 0 ≤ k < 10
 * - num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
 *
 * 입출력 예
 * ┌────────┬───┬────────┐
 * │  num   │ k │ result │
 * ├────────┼───┼────────┤
 * │ 29183  │ 1 │   3    │
 * │ 232443 │ 4 │   4    │
 * │ 123456 │ 7 │  -1    │
 * └────────┴───┴────────┘
 *
 * 입출력 예 설명
 * - 예 #1: 29183에서 1은 3번째에 있습니다.
 * - 예 #2: 232443에서 4는 4번째에 처음 등장합니다.
 * - 예 #3: 123456에 7은 없으므로 -1을 return 합니다.
 *
 * 요구사항 정리
 * - 자리 수는 1부터 시작하는 1-기반 인덱스입니다.
 * - k는 한 자리 정수(0~9)입니다.
 */

/**
 * 함수 시그니처(구현 금지 — 문제변환 단계):
 * - num: 양의 정수 (1 이상, 1,000,000 미만)
 * - k: 0 이상 9 이하의 한 자리 정수
 * 반환값:
 * - num의 십진수 표기에서 k가 처음 나타나는 자리(1-based) 또는 없으면 -1
 */
const findNumber = (num: number, k: number): number => {
  const numberToString = String(num);
  for (let i = 0; i < numberToString.length; i = i + 1) {
    console.log(numberToString[i]);
    if (Number(numberToString[i]) === k) {
      return i + 1;
    }
  }
  return -1;
};

console.log(findNumber(29183, 1));
console.log(findNumber(232443, 4));
console.log(findNumber(123456, 7));
