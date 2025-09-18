/**
 * 문제 설명
 * "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고 합니다.
 * 정수 n이 주어지면 높이와 너비가 n인 직각 이등변 삼각형을 출력하도록 solution 함수를 작성해주세요.
 *
 * 제한사항
 * 1 ≤ n ≤ 10
 *
 * 입출력 예
 * 입력: 3
 * 출력:
 * *
 * **
 * ***
 */
const rightTriangle = (n: number): void => {
  for (let i: number = 1; i <= n; i = i + 1) {
    let stars: string = ``;
    for (let j: number = 1; j <= i; j = j + 1) {
      stars = stars + `*`;
    }
    console.log(stars);
  }
};

// 함수 자체가 console.log를 찍기 때문에 호출만 하면됨
// console.log(rightTriangle(3)); -> 반환값이 void이기 때문에, undefined 출력됨
rightTriangle(3);
