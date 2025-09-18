/**
 * 문제 설명
 *
 * 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
 * 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 1 ≤ n ≤ 1,000,000
 *
 * 입출력 예
 * 20    6
 * 100   9
 */
// 추가 과제: 순서쌍의 배열과 순서쌍의 갯수를 같이 반환
const pairOfNumbersCounter = (n: number): string[] => {
  // n을 1 ~ n까지 나눠서 나머지가 0인 경우 순서쌍으로 볼 수 있음
  // 나누는 수, 몫을 차례로 push 한 후, 순서쌍의 갯수를 출력
  let result: string[] = [];
  for (let i: number = 1; i <= n; i = i + 1) {
    if (n % i === 0) {
      result.push(`${i}, ${n / i}`);
    }
  }
  console.log(`순서쌍의 갯수는 ${result.length}개 입니다.`);
  return result;
};

console.log(pairOfNumbersCounter(20));
console.log(pairOfNumbersCounter(100));
