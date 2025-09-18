/**
 * 문제 설명
 * 정수 n이 매개변수로 주어질 때,
 * n 이하의 짝수만 모두 더한 값을 return 하도록
 * solution 함수를 완성해주세요.
 *
 * 제한사항
 * 0 < n ≤ 1000
 *
 * 입출력 예
 * | 10 | 30     |
 * | 4  | 6      |
 */
const sumEvenNumber = (n: number): number => {
  let sum: number = 0;
  for (let i: number = 0; i <= n; i = i + 1) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
};

console.log(sumEvenNumber(10));
console.log(sumEvenNumber(4));
