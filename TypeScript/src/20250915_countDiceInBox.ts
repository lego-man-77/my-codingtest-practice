/**
 * 머쓱이는 직육면체 모양의 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
 * 상자의 가로, 세로, 높이가 저장된 배열 box와 주사위 모서리의 길이 n이 주어졌을 때,
 * 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 함수를 완성하세요.
 *
 * 제한사항
 * - box의 길이는 3입니다.
 * - box[0] = 상자의 가로 길이, box[1] = 세로 길이, box[2] = 높이 길이
 * - 1 ≤ box의 원소 ≤ 100
 * - 1 ≤ n ≤ 50
 * - n ≤ box의 원소
 * - 주사위는 상자와 평행하게 넣습니다.
 *
 * 입출력 예
 * - box: [1, 1, 1], n: 1 -> result: 1
 * - box: [10, 8, 6], n: 3 -> result: 12
 */
const countDiceInBox = (box: number[], n: number): number => {
  let result = 1;
  for (let i = 0; i < 3; i = i + 1) {
    result = result * Math.floor(box[i] / n);
  }
  return result;
};

console.log(countDiceInBox([10, 8, 6], 3));
console.log(countDiceInBox([12, 10, 8], 2));
