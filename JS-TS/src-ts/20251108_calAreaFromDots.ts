/**
 * 문제 설명
 * 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
 * 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가
 * 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * - dots의 길이 = 4
 * - dots의 원소의 길이 = 2
 * - -256 < dots[i]의 원소 < 256
 * - 잘못된 입력은 주어지지 않습니다.
 *
 * 입출력 예
 * dots                                           result
 * [[1, 1], [2, 1], [2, 2], [1, 2]]               1
 * [[-1, -1], [1, 1], [1, -1], [-1, 1]]           4
 *
 * 입출력 예 설명
 * 입출력 예 #1
 * 좌표 [[1, 1], [2, 1], [2, 2], [1, 2]] 를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 1, 1이므로
 * 직사각형의 넓이는 1 x 1 = 1입니다.
 *
 * 입출력 예 #2
 * 좌표 [[-1, -1], [1, 1], [1, -1], [-1, 1]]를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 2, 2이므로
 * 직사각형의 넓이는 2 x 2 = 4입니다.
 */
const calAreaFromDots = (dots: number[][]): number => {
  // 아이디어💡
  // x축 숫자가 같은 2개의 점에서 y축끼리 빼면 -> 세로줄
  // y축 숫자가 같은 2개의 점에서 x축끼리 빼면 -> 가로줄

  // 절대값 반환 함수 ➡️ Math.abs()

  // 세로길이 구하기
  // 1. x축이 같은 원소 2개 구하기
  // 2. y축끼리 뺀 "절대값"이 세로길이

  // 가로길이 구하기
  // 1. y축이 같은 원소 2개 구하기
  // 2. x축끼리 뺀 "절대값"이 가로길이
  let sero: number[][] = [];
  let garo: number[][] = [];

  // y축이 같은 좌표 -> 가로길이를 구할 수 있음
  for (let i = 1; i < dots.length; i++) {
    if (dots[0][1] === dots[i][1]) {
      garo.push(dots[0], dots[i]);
      break;
    }
  }
  console.log(`y축이 같은 좌표 2개 ${garo}`);

  // x축이 같은 좌표 -> 세로길이를 구할 수 있음
  for (let i = 1; i < dots.length; i++) {
    if (dots[0][0] === dots[i][0]) {
      sero.push(dots[0], dots[i]);
      break;
    }
  }
  console.log(`x축이 같은 좌표 2개 ${sero}`);

  const seroLength = Math.abs(sero[0][1] - sero[1][1]);
  const garoLength = Math.abs(garo[0][0] - garo[1][0]);

  console.log(`세로길이: ${seroLength},가로길이: ${garoLength}`);
  return seroLength * garoLength;
};

console.log(
  calAreaFromDots([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ]),
); // 1
console.log(
  calAreaFromDots([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ]),
); // 4
console.log(`========================`);

// 이슈⚠️
// 코드 리팩토링

const calAreaFromDotsV2 = (dots: number[][]): number => {
  // 아이디어💡
  // 가장 큰 x축 - 가장 작은 x축 = 세로길이
  // 가장 큰 y축 - 가장 작은 y축 = 가로길이
  const xArray = dots.map((e) => {
    return e[0];
  });
  const yArray = dots.map((e) => {
    return e[1];
  });
  return (
    (Math.max(...xArray) - Math.min(...xArray)) * (Math.max(...yArray) - Math.min(...yArray))
  );
};

console.log(
  calAreaFromDotsV2([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ]),
); // 1
console.log(
  calAreaFromDotsV2([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ]),
); // 4

// 해결⛑️
// 아래 함수들로 리팩토링
// - map
// - 스프레드 연산자
// - Math.max, Math.min
