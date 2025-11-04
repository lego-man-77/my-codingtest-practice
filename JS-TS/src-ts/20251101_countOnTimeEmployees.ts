/**
 * 문제 설명
 * 그렙은 재택근무와 함께 출근 희망 시각을 자유롭게 정하는 유연근무제를 시행하고 있습니다.
 * 제도 정착을 위해 오늘부터 일주일 동안 각자 설정한 출근 희망 시각에 늦지 않고 출근한 직원들에게
 * 상품을 주는 이벤트를 진행하려고 합니다.
 * 
 * 직원들은 일주일동안 자신이 설정한 출근 희망 시각 + 10분까지 어플로 출근해야 합니다.
 * (예: 출근 희망 시각이 9시 58분 → 10시 8분까지 출근)
 * 토요일, 일요일의 출근 시각은 이벤트에 영향을 끼치지 않습니다.
 * 직원들은 매일 한 번씩만 어플로 출근하고,
 * 모든 시각은 시*100 + 분 형태의 정수로 표현됩니다. (예: 10시 13분 → 1013, 9시 58분 → 958)
 * 
 * 목표
 * 직원들이 설정한 출근 희망 시각(schedules)과 실제로 출근한 기록(timelogs)을 바탕으로
 * 상품을 받을 직원의 수를 구하세요.
 * 
 * 입력
 * - schedules: 길이 n의 1차원 정수 배열 (i번째 값은 i+1번째 직원의 출근 희망 시각)
 * - timelogs: n x 7의 2차원 정수 배열 (i번째 직원의 j일차 출근 시각)
 * - startday: 이벤트 시작 요일 (1=월, 2=화, 3=수, 4=목, 5=금, 6=토, 7=일)
 * 
 * 제한사항
 * - 1 ≤ n = schedules.length ≤ 1,000
 * - 700 ≤ schedules[i] ≤ 1100
 * - 1 ≤ timelogs.length = n ≤ 1,000
 * - timelogs[i].length = 7
 * - 600 ≤ timelogs[i][j] ≤ 2359
 * - 1 ≤ startday ≤ 7  (1:월, 2:화, 3:수, 4:목, 5:금, 6:토, 7:일)
 * - 출근 희망 시각과 실제 출근 시각의 (값 % 100)은 59 이하 (정상적인 분 단위)
 * 
 * 테스트 케이스 구성 안내
 * 1   | 10% | n=1, 시작일 월요일, 희망 시각 정각
 * 2   | 10% | 시작일 월요일, 희망 시각 정각
 * 3   | 15% | 희망 시각 정각
 * 4   | 15% | 시작일 월요일
 * 5   | 50% | 추가 조건 없음
 * 
 * 평일 판정 규칙
 * - startday 기준으로 7일간 진행
 * - 토요일(6), 일요일(7)은 이벤트 결과에 영향 없음 (지각 여부 미반영)
 * 
 * 출력
 * - 상품을 받을 직원의 수를 반환
 * 
 * 입출력 예
 * 1)
 * schedules = [700, 800, 1100]
 * timelogs  = [
 *   [710, 2359, 1050, 700, 650, 631, 659],
 *   [800, 801, 805, 800, 759, 810, 809],
 *   [1105, 1001, 1002, 600, 1059, 1001, 1100]
 * ]
 * startday = 5
 * result   = 3
 * 
 * 2)
 * schedules = [730, 855, 700, 720]
 * timelogs  = [
 *   [710, 700, 650, 735, 700, 931, 912],
 *   [908, 901, 805, 815, 800, 831, 835],
 *   [705, 701, 702, 705, 710, 710, 711],
 *   [707, 731, 859, 913, 934, 931, 905]
 * ]
 * startday = 1
 * result   = 2
 */
const countOnTimeEmployees = (
  schedules: number[],
  timelogs: number[][],
  startDay: number,
): number => {
  let result = 0;
  for (let i = 0; i < schedules.length; i = i + 1) {
    const limitTime: number = schedules[i] + 10;
    let isCorrectTime: boolean = true;

    for (let j = 0; j < 7; j = j + 1) {
      const date: number = startDay + j;
      const realComeTime: number = timelogs[i][j];
      const isRightTime: boolean = realComeTime <= limitTime;

      // 날짜가 "주말" 일 경우
      if (date > 5 && date < 8) {
        console.log(`${date} is Weekend`, `출근시간 상관없음`);
        continue;
      }

      // 날짜가 "월~금" 이지만, 출근시간을 안지켰을 경우
      if (date > 0 && !isRightTime) {
        console.log(`${date} is Day`, `출근시간초과❌`);
        isCorrectTime = false;
        break;
      }

      console.log(`${date} is Day`, `출근시간준수✅`);
    }
    if (isCorrectTime) {
      result = result + 1;
    }
    console.log(`======검사직원교체======`);
  }
  return result;
};

// ⚠️이슈
// 주어진 파라미터의 시간 + 10분에서 에러발생
// 위 문제에서는 시간을 *100을 연산하여 표현하는데, (9:59 ➡️ 959)
// 특정 값에서 단순히 "10을 더하면" 에러 발생 (959 + 10 = 969❌, 10:09분이 되어야함✅)

const calculateLimitTime = (time: number) => {
  const limitTime = (Math.floor(time / 100) * 60) + (time % 100) + 10;
  const formatLimitTime = Math.floor(limitTime / 60) * 100 + limitTime % 60;
  return formatLimitTime;
}

const countOnTimeEmployeesV2 = (
  schedules: number[],
  timelogs: number[][],
  startDay: number,
): number => {
  let result = 0;
  for (let i = 0; i < schedules.length; i = i + 1) {
    const limitTime: number = calculateLimitTime(schedules[i]);
    let isCorrectTime: boolean = true;

    for (let j = 0; j < 7; j = j + 1) {
      const date: number = startDay + j;
      const realComeTime: number = timelogs[i][j];
      const isRightTime: boolean = realComeTime <= limitTime;

      // 날짜가 "주말" 일 경우
      if (date > 5 && date < 8) {
        console.log(`${date} is Weekend`, `출근시간 상관없음`);
        continue;
      }

      // 날짜가 "월~금" 이지만, 출근시간을 안지켰을 경우
      if (date > 0 && !isRightTime) {
        console.log(`${date} is Day`, `출근시간초과❌`);
        isCorrectTime = false;
        break;
      }

      console.log(`${date} is Day`, `출근시간준수✅`);
    }
    if (isCorrectTime) {
      result = result + 1;
    }
    console.log(`======검사직원교체======`);
  }
  return result;
};

// ⛑️해결
// 주어진 시간을 분으로 변경하고,
// 10을 더한 값을 다시 hhmm으로 변경하여 반환하는,
// "calculateLimitTime 함수" 생성 (959hhmm ➡️ 599분 ➡️ 609분 ➡️ 1009hhmm)

// ⚠️이슈
// 코드 리팩토링

const countOnTimeEmployeesV3 = (
  schedules: number[],
  timelogs: number[][],
  startDay: number,
): number => {
  let result = 0;
  for (let i = 0; i < schedules.length; i = i + 1) {
    const limitTime: number = calculateLimitTime(schedules[i]);
    let isCorrectTime: boolean = true;

    for (let j = 0; j < 7; j = j + 1) {
      const date: number = (startDay + j) % 7;
      if (date === 6 || date === 0) continue;

      if (timelogs[i][j] > limitTime) {
        isCorrectTime = false;
        break;
      }
    }
    if (isCorrectTime) result = result + 1;
  }
  return result;
}

// ⛑️해결
// 1. console.log 제거
// 2. if문 축약
// 3. 쓸데없는 변수 할당 제거

// 4. date ➡️ "(startDay + j) % 7" 연산으로 수정
// (나머지를 이용해서 넘어가는 요일을 계산)

// 5. 출근시간검증 ➡️ "timelogs[i][j] > limitTime" 조건으로 수정
// ("제한출근시간보다 실제출근시간이 작거나 같으면 무조건 통과" 이기 때문에 조건 간소화)

console.log(
  countOnTimeEmployeesV3(
    [700, 800, 1100],
    [
      [710, 2359, 1050, 700, 650, 631, 659],
      [800, 801, 805, 800, 759, 810, 809],
      [1105, 1001, 1002, 600, 1059, 1001, 1100],
    ],
    5,
  ),
);

console.log(
  countOnTimeEmployeesV3(
    [730, 855, 700, 720],
    [
      [710, 700, 650, 735, 700, 931, 912],
      [908, 901, 805, 815, 800, 831, 835],
      [705, 701, 702, 705, 710, 710, 711],
      [707, 731, 859, 913, 934, 931, 905],
    ],
    1,
  ),
);

console.log(
  countOnTimeEmployeesV3(
    [959, 959],
    [
      [1009, 945, 1000, 1009, 1009, 800, 800],
      [1010, 930, 1009, 1009, 900, 800, 800],
    ],
    3,
  ),
);