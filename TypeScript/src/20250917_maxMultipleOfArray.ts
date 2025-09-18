/**
 * 문제 설명
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 0 ≤ numbers의 원소 ≤ 10,000
 * 2 ≤ numbers의 길이 ≤ 100
 *
 * 입출력 예
 * numbers	                result
 * [1, 2, 3, 4, 5]	        20
 * [0, 31, 24, 10, 1, 9]	  744
 *
 * 입출력 예 설명
 * 예 #1) 두 수의 곱 중 최댓값은 4 * 5 = 20 입니다.
 * 예 #2) 두 수의 곱 중 최댓값은 31 * 24 = 744 입니다.
 */
const maxMultipleOfArray = (numbers: number[]): number => {
  let maxNumberArray: number[] = [];
  for (let i = 0; i < 2; i = i + 1) {
    let maxNumber = 0;
    for (let j = 0; j < numbers.length; j = j + 1) {
      if (maxNumber < numbers[j]) {
        maxNumber = numbers[j];
      }
    }
    maxNumberArray.push(maxNumber);

    for (let k = 0; k < numbers.length; k = k + 1) {
      if (numbers[k] === maxNumber) {
        numbers[k] = maxNumber;
        numbers[k] = 0;
        break;
      }
    }
  }
  console.log(maxNumberArray);
  return maxNumberArray[0] * maxNumberArray[1];
};

console.log(maxMultipleOfArray([1, 2, 3, 4, 5])); // 20
console.log(maxMultipleOfArray([0, 31, 24, 10, 1, 9])); // 744
console.log(`========================`);

/**
 * 응용 문제 설명
 * 만약 원소가 음수를 포함 할 수 있고,
 * 음수끼리의 곱이 더 크다면?
 *
 * 입출력 예
 * numbers	                result
 * [1, 5, -99, -200]	      19800
 */
const maxMultipleOfArrayUseSort = (numbers: number[]): number => {
  const sortedArray = numbers.sort((a, b) => a - b);
  const firstCompareMaxNumber = sortedArray[0] * sortedArray[1];
  const secondCompareMaxNumber =
    sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2];
  console.log(sortedArray);
  if (secondCompareMaxNumber < firstCompareMaxNumber) {
    return firstCompareMaxNumber;
  } else {
    return secondCompareMaxNumber;
  }
};

console.log(maxMultipleOfArrayUseSort([1, 5, -99, -200])); // 19800

// sort의 "a - b", "b - a"는 배열의 각 원소를 비교하는 값이고,
// 그 값이 "양수"라면 두 위치를 바꾼다.
// a에서 b를 뺀다면 "오름차순"이 되고,
// b에서 a를 뺀다면 "내림차순"이 됨
// [3, 1, 2]와 같은 단순한 배열로 계산해보면 이해가 됨
