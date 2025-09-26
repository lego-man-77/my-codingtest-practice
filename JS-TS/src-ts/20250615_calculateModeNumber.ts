/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때, [최빈값, 반복된 횟수]를 return 하도록 함수를 완성하세요.
 * 최빈값이 여러 개면 [-1, 0]을 return 합니다.
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 **/

const calculateModeNumber = (array: number[]): number[] => {
  let sortedArray: number[] = [];
  let cntArray: number = 0;

  while (cntArray < array.length) {
    // 가장 작은값을 비교하며 구하기 위해 범위에서 벗어나는 값을 변수에 할당
    let minNumber: number = 1000;

    // 가장 작은값 구하기
    for (let i: number = 0; i < array.length; i = i + 1) {
      if (array[i] < minNumber) {
        minNumber = array[i];
      }
    }
    sortedArray.push(minNumber);

    // 기존 배열에서 가장 작은값을 범위 외 값으로 바꾸기
    for (let i: number = 0; i < array.length; i = i + 1) {
      if (array[i] === minNumber) {
        array[i] = 1000;
        break;
      }
    }
    // console.log(array)
    // console.log(minNumber)
    cntArray = cntArray + 1;
  }
  console.log(sortedArray);

  let cntSortedArray: number = 0;
  let modeNumber: number = -1; // 최빈값(원소로 들어갈 수 없는 -1이 디폴트)
  let modeNumberCnt: number = 0; // 최빈값이 될 때 값이 최빈값이 반복된 횟수
  let beforeNumber: number = -1; // 현재 보고있는 값의 이전값(배열의 숫자가 바뀌었는지 판단하는 용도, 원소로 들어갈 수 없는 -1이 디폴트)
  let numberCnt: number = 0; // 현재 보고있는 값이 반복된 횟수(최빈값이 반복된 횟수와 비교하는 용도)
  let isDupModeNumber: boolean = false; // 최빈값이 중복되는지 판단하는 용도

  // sortedArray의 원소갯수만큼 반복
  while (cntSortedArray < sortedArray.length) {
    // 현재 보고있는 값과 이전값이 다르다면 새로운 숫자가 등장했다는 뜻이기 때문에,
    // 현재 보고있는 값이 반복된 횟수를 1로 지정
    // 0번째 인덱스의 값은 무조건 1로 지정(왜? beforeNumber의 초기값이 -1이기 때문에)
    // beforeNumber가 현재 보고있는 값과 같다면 즉, 이전 원소와 같은 값이라면 현재 보고있는 값이 반복된 횟수를 +1
    if (sortedArray[cntSortedArray] !== beforeNumber) {
      numberCnt = 1;
    } else {
      numberCnt = numberCnt + 1;
    }

    // 최빈값이 여러개가 된 그 순간
    // 아래 파라미터로 주어진 배열을 예로 들면 1이 4개로 최빈값이 된 이후,
    // 3을 4개째 카운트 할 때 아래 조건을 만족해버림
    // 하지만, 뒤에 등장한 3이 더 많은 경우에는 최빈값과 그 값이 반복된 횟수가 갱신되어야 하기 때문에,
    // 바로 [-1, 0]을 반환하지않고, isDupModeNumber에 중복될때가 있었다고 저장만해둠
    if (modeNumberCnt === numberCnt && modeNumber !== beforeNumber) {
      isDupModeNumber = true;
    }

    // 최빈값이 반복된 횟수보다 현재 보고있는 값이 반복된 횟수가 크다면,
    // 즉, 현재 보고있는 값이 최빈값보다 많이 반복되었다면,
    // 최빈값과 최빈값이 반복된 횟수를 갱신
    // "0번째 인덱스의 값과 그 값이 1번 반복된 횟수"는 무조건 "최빈값과 최빈값이 반복된 횟수"가 됨(왜? modeNumberCnt의 초기값이 0이기 때문에)
    // "0번째 인덱스 값과 그 값이 반복된 횟수"가 지정된 이후,
    // 아래 조건식을 다시 만족하는 경우는 "최빈값이 바뀔때" 뿐임
    // 즉, 최빈값이 여러개가 아니라는 말이기 때문에 isDupModeNumber = false로 지정
    if (modeNumberCnt < numberCnt) {
      modeNumberCnt = numberCnt;
      modeNumber = sortedArray[cntSortedArray];
      isDupModeNumber = false;
      console.log(modeNumber, modeNumberCnt);
    }

    beforeNumber = sortedArray[cntSortedArray];
    cntSortedArray = cntSortedArray + 1;
  }

  console.log(`최빈값이 여러개입니까? ${isDupModeNumber}`);
  if (isDupModeNumber) {
    return [-1, 0];
  }
  return [modeNumber, modeNumberCnt];
};

console.log(calculateModeNumber([3, 1, 1, 1, 3, 1, 3, 3, 3, 3]));
