/**
 * 문제 설명
 * 각도 angle이 매개변수로 주어질 때,
 * 0 < angle < 90   → 예각   → 1
 * angle = 90       → 직각   → 2
 * 90 < angle < 180 → 둔각   → 3
 * angle = 180      → 평각   → 4
 * 위 기준에 따라 알맞은 값을 반환하는 solution 함수를 작성하세요.
 *
 * 제한사항
 * 0 < angle ≤ 180
 * angle은 정수입니다.
 *
 * | 70    | 1      |
 * | 91    | 3      |
 * | 180   | 4      |
 */
const calAngle = (angle: number): number => {
  if (0 < angle && angle < 90) {
    return 1;
  }
  if (angle === 0) {
    return 2;
  }
  if (90 < angle && angle < 180) {
    return 3;
  }
  return 4;
};

console.log(calAngle(70));
console.log(calAngle(90));
console.log(calAngle(130));
console.log(calAngle(180));
