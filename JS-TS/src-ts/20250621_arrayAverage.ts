/**
 * 배열의 평균값
 *
 * 문제 설명
 * 정수 배열 `numbers`가 매개변수로 주어집니다.
 * `numbers`의 요소의 평균값을 return하도록 `solution` 함수를 완성해 주세요.
 *
 * 제한사항
 * - 0 ≤ `numbers`의 요소 ≤ 1,000
 * - 1 ≤ `numbers`의 길이 ≤ 100
 * - 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
 *
 * 입출력 예
 * | numbers                              | result |
 * |--------------------------------------|--------|
 * | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]      | 5.5    |
 * | [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] | 94.0   |
 */
const arrayAverage = (numbers: number[]): number => {
  // 원소를 모두 더해서 sum에 저장
  // sum / numbers.legnth 반환
  let sum: number = 0;
  for (let i: number = 0; i < numbers.length; i = i + 1) {
    sum = sum + numbers[i];
  }
  return sum / numbers.length;
};

console.log(arrayAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5
