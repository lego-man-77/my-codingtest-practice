// 두 값의 나머지 구하기
const remainder = (num1: number, num2: number): number => {
  return num1 % num2;
};

console.log(remainder(10, 5));
console.log(`========================`);

// 중앙값 구하기
// 주어지는 배열의 원소 범위 = -1000 < 원소 < 1000
const centerElement = (numArray: number[]): number => {
  if (numArray.length % 2 === 0 || numArray.length === 0) {
    console.log("배열의 길이가 짝수이거나 0입니다.");
    return -1;
  }

  // 빈 배열 생성
  let result: number[] = [];

  // 주어진 배열의 원소 갯수 만큼 반복
  let count: number = 0;
  while (count < numArray.length) {
    let minNumber: number = 1000;

    // 가장 작은 원소 찾기 & 빈 배열에 넣기
    for (let i = 0; i < numArray.length; i = i + 1) {
      if (numArray[i] < minNumber) {
        minNumber = numArray[i];
      }
    }
    result.push(minNumber);

    // 위에서 찾은 가장 작은 원소값과 같은 원소를 큰 수로 바꾸면 됨
    // 기존 배열에서 가장 작은 원소를 제거 (가장 작은 원소를 1000으로 바꿔주는 방법 사용)
    for (let i = 0; i < numArray.length; i = i + 1) {
      if (numArray[i] === minNumber) {
        numArray[i] = 1000;
        break; // 가장 작은 원소가 여러개 일수도 있기 때문에, 처음 만나는 가장 작은 원소만 바꾸고 반복문 종료
      }
    }
    console.log(numArray);
    console.log(result);
    count = count + 1;
  }

  // 배열의 길이에서 "-1 이후 /2"한 값의 인덱스에 있는 원소는 중앙값에 해당
  // 💡Math.floor() -> "버림", -2.2 ➡️ -3 & 3.1 ➡️ 3 (음수의 경우 더 작은 쪽으로 내림)
  // 💡Math.trunc() -> "그냥 정수만 남김", -2.2 ➡️ -2 & 3.1 ➡️ 3 (음수의 경우 0에 가까운 쪽으로 내림)
  const elementLength: number = Math.trunc(result.length / 2);
  return result[elementLength];
};

console.log(`배열의 중앙값: ${centerElement([3, -200, 11, 95, -47])}`);
