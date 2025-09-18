/**
 * 문제 설명
 * 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
 * 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share가 주어질 때,
 * balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 반환하세요.
 *
 * 제한사항
 * 1 ≤ balls ≤ 30
 * 1 ≤ share ≤ 30
 * share ≤ balls
 * 구슬을 고르는 순서는 고려하지 않습니다.
 *
 * 입출력 예
 * balls = 3, share = 2   ->   result = 3
 * balls = 5, share = 3   ->   result = 10
 */
const ballsShare = (balls: number, share: number): number => {
  let result: number = 1;
  for (let i: number = 1; i <= share; i = i + 1) {
    result = (result * (balls - share + i)) / i;
  }

  return result;
};

console.log(ballsShare(3, 2));
console.log(ballsShare(5, 3));
console.log(ballsShare(5, 2));
console.log(ballsShare(30, 3));
// balls의 팩토리얼, share의 팩토리얼, balls - share의 팩토리얼을 다 구해서,
// Combination의 공식에 대입해도 되지만,
// 30!과 같은 너무 큰 숫자는 JavaScript에서 정밀도가 떨어지고 오버 플로우 에러가 발생할 수 있음
// 그래서 위와 같은 개선된 형식으로 코딩

// Factorial(팩토리얼)
// n! ➡️ n * (n-1) * (n-2) * ... * 1
// 1부터 n까지 모든 수를 곱한 값으로, 연속된 곱셈의 기본 단위 역할

// Combination(조합)
// nCr ➡️ n! / (r! * (n-r)!)
// 순서를 고려하지 않고 n개 중 r개를 선택하는 경우의 수
// 어떤 항목들이 선택됐는지만 중요하며, 나열된 순서는 무시

// Permutation(순열)
// nPr ➡️ n! / (n-r)!
// 순서를 고려하여 n개 중 r개를 뽑아 일렬로 나열하는 경우의 수
// 순서를 고려하였기 때문에 같은 값이 주어졌을때, 무조건 Combination보다 큰 수가 나옴

// 순서를 고려함 & 순서를 고려하지 않음
// 예제 1: 구슬 A, B 두 개 중 2개를 뽑을 때
// 순서를 고려하지 않음 (조합): {A, B} ➡️ 1가지
// 순서를 고려함   (순열): A -> B, B -> A ➡️ 2가지

// 예제 2: 숫자 1, 2, 3 세 개 중 2개를 뽑을 때
// 순서를 고려하지 않음 (조합): {1,2}, {1,3}, {2,3} ➡️ 3가지
// 순서를 고려함   (순열):
//   1 -> 2, 2 -> 1,
//   1 -> 3, 3 -> 1,
//   2 -> 3, 3 -> 2
// ➡️ 총 6가지
