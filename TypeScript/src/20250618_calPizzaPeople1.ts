/**
 * 문제 설명
 * 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다.
 * 피자를 나눠먹을 사람의 수 n이 주어질 때,
 * 모든 사람이 피자를 한 조각 이상 먹기 위해
 * 필요한 피자의 수를 return 하는 solution 함수를 완성하세요.
 * (1명부터 100명까지의 피자의 수를 담은 배열을 반환하는 문제로 바꿈)
 *
 * 제한사항
 * 1 <= n <= 100
 *
 * 입출력 예
 * | n   | result |
 * |-----|--------|
 * | 7   | 1      |
 * | 1   | 1      |
 * | 15  | 3      |
 */
const calPizzaPeople1 = (): number[] => {
  let result: number[] = [];
  for (let i: number = 1; i <= 100; i = i + 1) {
    const quotient: number = Math.floor(i / 7);
    const remainder: number = i % 7;

    // 나머지가 0인경우 -> 사람수가 7명 미만이거나, 7의 배수
    if (remainder === 0) {
      result.push(quotient);

      // 나머지가 0이 아닌 경우 -> 그 외 모든 숫자들(1~100)
    } else {
      result.push(quotient + 1);
    }
  }
  return result;
};

console.log(calPizzaPeople1());

// Math.ceil 사용
const calPizzaPeople1UseCeil = (n: number): number => {
  return Math.ceil(n / 7);
};

console.log(calPizzaPeople1UseCeil(4)); // 1
console.log(calPizzaPeople1UseCeil(8)); // 2
console.log(calPizzaPeople1UseCeil(14)); // 2
console.log(calPizzaPeople1UseCeil(50)); // 8

// 소수점 올림 & 내림 문법
// 💡Math.floor: 내림 (작은 정수 방향)
// 양수 -> 소수점 아래 버리고 0에 가까워짐 (예: 4.7 → 4)
// 음수 -> 소수점 아래 버리고 0에서 멀어짐 (예: -4.7 → -5)

// 💡Math.trunc: 소수점 절삭 (0에 가까운 정수 방향)
// 양수 -> 소수점 아래 버리고 0에 가까워짐 (예: 4.7 → 4)
// 음수 -> 소수점 아래 버리고 0에 가까워짐 (예: -4.7 → -4)

// 💡Math.round: 반올림 (가까운 정수 방향)
// 양수 -> 0.5 이상이면 올림, 미만이면 내림 (예: 4.5 → 5, 4.4 → 4)
// 음수 -> -0.5 이하이면 내림, 초과면 올림 (예: -4.5 → -5, -4.4 → -4)

// 💡Math.ceil: 올림 (큰 정수 방향)
// 양수 -> 소수점 아래 버리고 0에서 멀어짐 (예: 4.1 → 5)
// 음수 -> 소수점 아래 버리고 0에 가까워짐 (예: -4.1 → -4)
