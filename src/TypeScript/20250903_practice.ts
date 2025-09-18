/**
 * 문제 설명
 * 머쓱이는 친구들과 둥그렇게 서서 공 던지기 게임을 하고 있습니다.
 * 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
 * 친구들의 번호가 들어있는 정수 배열 numbers 와 정수 k 가 주어질 때,
 * k 번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * - 2 < numbers 의 길이 < 100
 * - 0 < k < 1,000
 * - numbers 의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
 * - numbers 는 1부터 시작하며 번호는 순서대로 올라갑니다.
 *
 * 입출력 예
 * numbers = [1, 2, 3, 4], k = 2 → result = 3
 * numbers = [1, 2, 3, 4, 5, 6], k = 5 → result = 3
 * numbers = [1, 2, 3], k = 3 → result = 2
 */
const solution20 = (numbers: number[], k: number): number => {
  return numbers[((k - 1) * 2) % numbers.length];
};

console.log(solution20([1, 2, 3, 4, 5], 4));
// 1번째: [0] (1 - 1) * 2 % length = 0
// 2번째: [2] (2 - 1) * 2 % length = 2
// 3번째: [4] (3 - 1) * 2 % length = 4
// 4번째: [1] (4 - 1) * 2 % length = 1
// 5번째: [3] (5 - 1) * 2 % length = 3
// k번째: [n] (k - 1) * 2 % length = n
