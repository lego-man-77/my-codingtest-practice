/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때, [최빈값, 반복된 횟수]를 return 하도록 함수를 완성하세요.
 * 최빈값이 여러 개면 [-1, 0]을 return 합니다.
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 **/
const solution3 = (array: number[]): number[] => {
  // 주어진 배열을 오름차순으로 정리
  let sortedArray: number[] = [];
  let cntArray: number = 0;

  while (cntArray < array.length) {
    let minNumber: number = 1000;
    for (let i: number = 0; i < array.length; i = i + 1) {
      if (array[i] < minNumber) {
        minNumber = array[i];
      }
    }
    console.log(minNumber);
    sortedArray.push(minNumber);

    for (let i: number = 0; i < array.length; i = i + 1) {
      if (array[i] === minNumber) {
        array[i] = 1000;
        break;
      }
    }
    console.log(sortedArray);
    console.log(array);
    cntArray = cntArray + 1;
  }

  // 정렬된 배열의 원소를 하나씩 세어서 최빈값과 반복된 횟수를 기록 및 갱신
  let modeNumber: number = -1; // 최빈값
  let modeNumberCnt: number = 0; // 최빈값이 반복된 횟수
  let beforeNumber: number = -1; // 지금 보고있는 값의 이전값
  let repeatCnt: number = 0; // 지금 보고있는 값이 반복된 횟수
  let isDupModeNumber: boolean = false;
  let cntSortedArray: number = 0;

  while (cntSortedArray < sortedArray.length) {
    // 만약에, cntSortedArray번째 인덱스값이 이전값과 다르다면 현재 반복된 횟수는 1로 지정
    // 그렇지 않다면, 현재 반복된 횟수 +1
    if (sortedArray[cntSortedArray] !== beforeNumber) {
      repeatCnt = 1;
    } else {
      repeatCnt = repeatCnt + 1;
    }

    // "처음 등장하는 값과 반복된 횟수 1"을 일단 최빈값과 최빈값이 반복된 횟수"에 지정
    // 만약에, 최빈값이 반복된 횟수보다 지금 보고있는 값이 반복된 횟수가 많다면 최빈값과 최빈값 반복된 횟수 갱신
    // 또한, 처음값 외에 다른 최빈값이 등장했다는 말은 최빈값이 중복이 아니라는 말이기 때문에,
    // 다시 isDupModeNumber를 false로 변경
    if (modeNumberCnt < repeatCnt) {
      modeNumberCnt = repeatCnt;
      modeNumber = sortedArray[cntSortedArray];
      isDupModeNumber = false;
    }

    // 최빈값과 지금 보고있는 값의 반복되는 횟수가 같고, 값 자체는 다를 경우는 최빈값이 중복되는 경우이기 때문에,
    // isDupModeNumber를 true로 변경
    if (
      repeatCnt === modeNumberCnt &&
      modeNumber !== sortedArray[cntSortedArray]
    ) {
      isDupModeNumber = true;
    }

    beforeNumber = sortedArray[cntSortedArray];
    cntSortedArray = cntSortedArray + 1;
  }
  if (isDupModeNumber) {
    return [0, -1];
  }
  return [modeNumber, modeNumberCnt];
};

console.log(solution3([-5, 1, 1, 0, 3, 3, 1, 3, 3]));
console.log(`========================`);

/**
 * 정수 n이 매개변수로 주어질 때,
 * n 이하의 홀수(odd number)가 오름차순으로 담긴 배열을 return 하도록
 * solution 함수를 완성해주세요.
 *
 * 제한사항:
 * 1 ≤ n ≤ 100
 *
 * 입출력 예:
 * solution(10) => [1, 3, 5, 7, 9]
 * solution(15) => [1, 3, 5, 7, 9, 11, 13, 15]
 **/
const solution4 = (n: number): number[] => {
  let result: number[] = [];
  let cnt: number = 1;
  while (cnt <= n) {
    if (cnt % 2 !== 0) {
      result.push(cnt);
    }
    cnt = cnt + 1;
  }
  return result;
};

console.log(solution4(10));
