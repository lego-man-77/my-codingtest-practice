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
const solution22 = (balls: number, share: number): number => {
  let ballsFactorial = 1;
  for (let i = balls; i > 0; i = i - 1) {
    ballsFactorial = ballsFactorial * i;
  }
  console.log(`ballsFactorial: ${ballsFactorial}`);

  let shareFactorial = 1;
  for (let i = share; i > 0; i = i - 1) {
    shareFactorial = shareFactorial * i;
  }
  console.log(`ballsFactorial : ${shareFactorial}`);

  let etcFactorial = 1;
  for (let i = balls - share; i > 0; i = i - 1) {
    etcFactorial = etcFactorial * i;
  }
  console.log(`ectFactorial : ${etcFactorial}`);

  return ballsFactorial / (shareFactorial * etcFactorial);
};

console.log(solution22(3, 2)); // 3
console.log(solution22(5, 3)); // 10
console.log(solution22(6, 4)); // 15
console.log(solution22(10, 3)); // 20
console.log(solution22(10, 8)); // 45
console.log(`========================`);

const solution23 = (balls: number, share: number): number => {
  const minNumber = Math.min(share, balls - share);
  let result = 1;
  for (let i = 1; i <= minNumber; i = i + 1) {
    result = (result * (balls - minNumber + i)) / i;
  }

  return result;
};

console.log(solution23(3, 2)); // 3
console.log(solution23(5, 3)); // 10
console.log(solution23(6, 4)); // 15
console.log(solution23(10, 3)); // 20
console.log(solution23(10, 8)); // 45
