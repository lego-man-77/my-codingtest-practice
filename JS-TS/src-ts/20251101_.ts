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