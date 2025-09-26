// 분수의 덧셈
const solution5 = (
  denom1: number,
  numer1: number,
  denom2: number,
  numer2: number,
): number[] => {
  let denom3: number = denom1 * denom2;
  let numer3: number = denom1 * numer2 + denom2 * numer1;
  const gcd = (a: number, b: number): number => {
    while (b !== 0) {
      let temp = b; // 이전 b값 저장
      b = a % b; // 나머지를 b로 보냄
      a = temp; // 이전 b값을 a로 보냄
    }
    return a; // 나머지가 0일 때, 이전 b값 즉, temp값이 최대 공약수(=a)
  };
  const gcdNumber: number = gcd(denom3, numer3); // 각 분모와 분자를 최대 공약수로 나눔 -> 기약 분수
  return [denom3 / gcdNumber, numer3 / gcdNumber];
};

console.log(solution5(2, 1, 4, 7));
console.log(`========================`);

// 중앙값 구하기
const solution6 = (numbers: number[]): number => {
  let sortedArray: number[] = [];

  // 주어진 배열의 원소 갯수만큼 반복
  for (let i: number = 0; i < numbers.length; i = i + 1) {
    let minNumber: number = 1000;

    // 주어진 배열의 원소 중에서 가장 작은 값를 찾고 빈 배열에 차례로 담음
    for (let j: number = 0; j < numbers.length; j = j + 1) {
      if (numbers[j] < minNumber) {
        minNumber = numbers[j];
      }
    }
    sortedArray.push(minNumber);

    // 기존 배열의 값을 범위 밖의 값으로 바꾸고 break;
    for (let k: number = 0; k < numbers.length; k = k + 1) {
      if (numbers[k] === minNumber) {
        numbers[k] = 1000;
        break; // 중복되는 값까지 전부 1000으로 바꾸지 않기 위함
      }
    }
  }

  // 중앙값을 구하기 위해 배열의 길이 나누기 2의 몫을 인덱스로 사용
  const centralNumber: number = Math.trunc(sortedArray.length / 2);
  console.log(sortedArray);
  console.log(numbers);
  return sortedArray[centralNumber];
};

console.log(solution6([1, 2, -1, 4, -5, 2, -10]));
console.log(`========================`);

const solution7 = (numbers: number[]): number => {
  const sortedArray: number[] = numbers
    .slice()
    .sort((a: number, b: number): number => a - b);
  const centralNumber: number = Math.trunc(sortedArray.length / 2);
  return sortedArray[centralNumber];
};

console.log(solution7([1, 2, -1, 4, -5, 2, -10]));
console.log(`========================`);

// 최빈값 구하기
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000
const solution8 = (array: number[]): number[] => {
  let modeNumber: number = -1; // 최빈값
  let modeNumberCnt: number = 0; // 최빈값이 반복된 횟수
  let beforeNumber: number = -1; // 이전값
  let numberCnt: number = 0; // 현재 값이 반복된 횟수
  let isDuplicateModeNumber: boolean = false; // 최빈값이 겹치는지 아닌지 확인

  // 주어진 배열을 오름차순으로 정렬
  const sortedArray: number[] = array.slice().sort((a, b) => a - b);

  // 다음값이 이전값과 같다면 현재 값 반복된 횟수 + 1 -> 반복
  for (let i: number = 0; i < sortedArray.length; i = i + 1) {
    if (beforeNumber !== sortedArray[i]) {
      beforeNumber = sortedArray[i];
      numberCnt = 1;
    } else {
      numberCnt = numberCnt + 1;
    }

    // 현재 값 반복된 횟수가 최빈값이 반복된 횟수보다 크다면 최빈값과 최빈값이 반복된 횟수를 갱신
    // 첫번째 인덱스의 값과 반복된 횟수 1회는 "반드시" 최빈값와 최빈값이 반복된 횟수로 지정됨
    // 첫번째 인덱스 이후, 이 조건이 다시 발동됐다는 것은 최빈값이 바뀌었다는 뜻
    if (modeNumberCnt < numberCnt) {
      modeNumber = sortedArray[i];
      modeNumberCnt = numberCnt;
      isDuplicateModeNumber = false;
    }

    // 최빈값이 여러개면 [-1, 0] 반환
    if (modeNumberCnt === numberCnt && modeNumber !== beforeNumber) {
      isDuplicateModeNumber = true;
    }
  }

  console.log(sortedArray);
  if (isDuplicateModeNumber) {
    return [-1, 0];
  }
  return [modeNumber, modeNumberCnt];
};

console.log(solution8([1, 2, 3, 2, 1, 1, 2, 1, 2, 2]));
console.log(solution8([3, 100, 5, 5, 100, 101, 2000]));
console.log(`========================`);

// 문자열 뒤집기
const solution9 = (myString: string, s: number, e: number): string => {
  // 인덱스[0]부터 인덱스[s] 이전까지 담은 배열
  let arrayBeforeS: string = ``;
  for (let i: number = 0; i < s; i = i + 1) {
    arrayBeforeS = arrayBeforeS + myString[i];
  }

  // 인덱스[e]부터 배열의 끝까지 담은 배열
  let arrayFromE: string = ``;
  for (let i: number = e + 1; i < myString.length; i = i + 1) {
    arrayFromE = arrayFromE + myString[i];
  }

  // 인덱스[s]부터 인덱스[e]까지 담은 배열
  let arrayBetweenSE: string = ``;
  for (let i: number = s; i <= e; i = i + 1) {
    arrayBetweenSE = arrayBetweenSE + myString[i];
  }

  // 배열 뒤집기
  let arrayBetweenSEReverse: string = ``;
  for (let i: number = arrayBetweenSE.length - 1; i >= 0; i = i - 1) {
    arrayBetweenSEReverse = arrayBetweenSEReverse + arrayBetweenSE[i];
  }
  return arrayBeforeS + arrayBetweenSEReverse + arrayFromE;
};

console.log(solution9(`Progra21Sremm3`, 6, 12));
console.log(solution9(`Stanley1yelnatS`, 4, 10));
console.log(`========================`);

const solution10 = (myString: string, s: number, e: number): string => {
  const arrayBeforeS: string = myString.split(``).slice(0, s).join(``);
  const arrayFromE: string = myString
    .split(``)
    .slice(e + 1, myString.length)
    .join(``);
  const arrayBetweenSEReverse: string = myString
    .split(``)
    .slice(s, e + 1)
    .reverse()
    .join(``);
  return arrayBeforeS + arrayBetweenSEReverse + arrayFromE;
};

console.log(solution10(`Progra21Sremm3`, 6, 12));
console.log(solution10(`Stanley1yelnatS`, 4, 10));
