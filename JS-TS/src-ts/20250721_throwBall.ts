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
const throwBall = (numbers: number[], k: number): number => {
  let alreadyThrowBall: number = 0;
  // 배열을 계속 순환해야하니까 중간식은 "공백"
  for (let i: number = 0; ; i = i + 2) {
    if (i >= numbers.length) {
      i = i % numbers.length;
    }
    alreadyThrowBall = alreadyThrowBall + 1;
    if (alreadyThrowBall === k) {
      return numbers[i];
    }
  }
};

console.log(throwBall([1, 2, 3, 4], 5));
console.log(throwBall([1, 2, 3, 4, 5, 6], 5));
console.log(throwBall([1, 2, 3], 3));
console.log(`========================`);

// 아래 수식을 표로 정리해보면 쉽게 이해할 수 있음
// 배열을 계속 순환해야하는 경우는 인덱스에 "나머지" 연산 자주 사용
// 왜 -1을 해야하는건지? -> [index]라서
const throwBallBetter = (numbers: number[], k: number): number => {
  return numbers[((k - 1) * 2) % numbers.length];
};

console.log(throwBallBetter([1, 2, 3, 4], 5));
console.log(throwBallBetter([1, 2, 3, 4, 5, 6], 5));
console.log(throwBallBetter([1, 2, 3], 3));
