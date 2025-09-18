/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때, [최빈값, 반복된 횟수]를 return 하도록 함수를 완성하세요.
 * 최빈값이 여러 개면 [-1, 0]을 return 합니다.
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 **/
const solution21 = (array: number[]): number[] => {
  let sortedArray = [];
  for (let i = 0; i < array.length; i = i + 1) {
    let maxNumber = 1000;
    for (let j = 0; j < array.length; j = j + 1) {
      if (array[j] < maxNumber) {
        maxNumber = array[j];
      }
    }
    for (let k = 0; k < array.length; k = k + 1) {
      if (array[k] === maxNumber) {
        array[k] = 1000;
        break;
      }
    }
    sortedArray.push(maxNumber);
  }

  // sortedArray = [1, 1, 1, 3, 5, 5, 5, 8]
  // sortedArray = [1, 1, 3, 5, 5, 5, 5, 8]
  // 가장 처음숫자로 현재값, 현재값 카운트, 최빈값, 최빈값 카운트 초기화
  // 다음 비교하는 숫자가 다르다면 현재값, 현재값 카운트 초기화
  // 다음 비교하는 숫자가 같다면 최빈값, 최빈값 카운트 + 1
  let recentNumber = 0;
  let recentNumberCount = 0;
  let modeNumber = 0;
  let modeNumberCount = 0;
  let isDuplicateCount = false;
  for (let i = 0; i < sortedArray.length; i = i + 1) {
    if (sortedArray[i] !== recentNumber) {
      recentNumber = sortedArray[i];
      recentNumberCount = 1;
    } else {
      recentNumberCount = recentNumberCount + 1;
    }

    if (modeNumber === recentNumberCount) {
      isDuplicateCount = true;
    }

    if (modeNumberCount < recentNumberCount) {
      modeNumber = recentNumber;
      modeNumberCount = recentNumberCount;
      isDuplicateCount = false;
    }
  }

  if (isDuplicateCount) {
    return [-1, modeNumberCount];
  } else {
    return [modeNumber, modeNumberCount];
  }
};

console.log(solution21([3, 5, 5, 1, 8, 5, 1, 1])); // [-1, 3]
console.log(solution21([3, 5, 5, 1, 8, 5, 1, 5])); // [5, 4]
