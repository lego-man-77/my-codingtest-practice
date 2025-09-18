/**
 * 문제 설명
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
 * numbers의 num1번째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 2 ≤ numbers의 길이 ≤ 30
 * 0 ≤ numbers의 요소 ≤ 1,000
 * 0 ≤ num1 < num2 < numbers의 길이
 *
 * 입출력 예
 * | [1, 2, 3, 4, 5] | 1    | 3    | [2, 3, 4]   |
 * | [1, 3, 5]       | 1    | 2    | [3, 5]      |
 */
const cutArray = (numbers: number[], num1: number, num2: number): number[] => {
  let result: number[] = [];
  for (let i: number = num1; i <= num2; i = i + 1) {
    result.push(numbers[i]);
  }
  return result;
};

console.log(cutArray([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
console.log(cutArray([1, 3, 5], 1, 2)); // [3, 5]
