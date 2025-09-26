/**
 * 문제 설명
 * 길이가 같은 배열 A, B 두 개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
 * 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며,
 * 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다.
 * (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)
 *
 * 예를 들어 A = [1, 4, 2], B = [5, 4, 4] 라면
 *  1) A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값: 0 + 1×5 = 5)
 *  2) A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값: 5 + 4×4 = 21)
 *  3) A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값: 21 + 2×4 = 29)
 * 즉, 이 경우가 최소가 되므로 29를 return 합니다.
 *
 * 제한사항
 * 배열 A, B의 크기: 1,000 이하의 자연수
 * 배열 A, B의 원소의 크기: 1,000 이하의 자연수
 *
 * 입출력 예
 * 1) A = [1, 4, 2], B = [5, 4, 4] → 29
 * 2) A = [1, 2], B = [3, 4] → 10
 */
// a는 오름차순, b는 내림차순으로 정렬하고, 각각의 동일된 인덱스롤 곱한 값을 resultArray에 담음
// resultArray의 원소들의 합을 반환
const calMinNumber = (a: number[], b: number[]): number => {
  let resultArray: number[] = [];
  let sumResultArray: number = 0;
  let sortedA: number[] = [];
  let sortedB: number[] = [];

  // a 오름차순
  for (let i: number = 0; i < a.length; i = i + 1) {
    let minNumber: number = 1001;
    for (let j: number = 0; j < a.length; j = j + 1) {
      if (a[j] < minNumber) {
        minNumber = a[j];
      }
    }
    sortedA.push(minNumber);
    for (let j: number = 0; j < a.length; j = j + 1) {
      if (a[j] === minNumber) {
        a[j] = 1001;
        break;
      }
    }
  }
  console.log(sortedA);

  // b 내림차순
  for (let i: number = 0; i < b.length; i = i + 1) {
    let maxNumber: number = 0;
    for (let j: number = 0; j < b.length; j = j + 1) {
      if (b[j] > maxNumber) {
        maxNumber = b[j];
      }
    }
    sortedB.push(maxNumber);
    for (let j: number = 0; j < b.length; j = j + 1) {
      if (b[j] === maxNumber) {
        b[j] = 0;
        break;
      }
    }
  }
  console.log(sortedB);

  // sortedA, sortedB를 같은 인덱스끼리 곱해서 resultArray에 담고, 모두 합친 값을 sumResultArray에 담아서 반환
  for (let i: number = 0; i < sortedA.length; i = i + 1) {
    // .length는 모든 배열이 다 똑같기 때문에 뭘 쓰든 상관없음
    resultArray.push(sortedA[i] * sortedB[i]);
  }
  for (let i: number = 0; i < resultArray.length; i = i + 1) {
    sumResultArray = sumResultArray + resultArray[i];
  }
  console.log(resultArray);
  return sumResultArray;
};

console.log(calMinNumber([4, 1, 2], [4, 4, 5])); // 29
console.log(calMinNumber([1, 2], [3, 4])); // 10
console.log(calMinNumber([2, 1], [4, 3])); // 10
