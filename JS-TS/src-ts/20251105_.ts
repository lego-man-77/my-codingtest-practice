/**
 * 문제 설명
 * 머쓱이는 행운의 숫자 7을 가장 좋아합니다.
 * 정수 배열 array가 매개변수로 주어질 때,
 * 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 1 ≤ array의 길이 ≤ 100
 * 0 ≤ array의 원소 ≤ 100,000
 *
 * 입출력 예
 * array	        result
 * [7, 77, 17]	    4
 * [10, 29]	    0
 *
 * 입출력 예 설명
 * 입출력 예 #1
 * [7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.
 *
 * 입출력 예 #2
 * [10, 29]에는 7이 없으므로 0을 return 합니다.
 */
const calLuckySeven = (array: number[]): number => {
  // 1. array의 모든 원소를 문자열로 합침
  // 2. 해당 문자열을 순회하며 7의 갯수 계산하여 반환
  let result = 0;
  const arrayToString = array.join(``);
  for (let i = 0; i < arrayToString.length; i++) {
    if (arrayToString[i] === "7") {
      result = result + 1;
    }
  }
  return result;
};

console.log(calLuckySeven([7, 77, 17])); // 4
console.log(calLuckySeven([10, 29])); // 0
console.log(calLuckySeven([0])); // 0

// 이슈⚠️
// 코드 리팩토링

const calLuckySevenV2 = (array: number[]): number => {
  return array.join(``).split("7").length - 1;
  // 문자열.split("7").length - 1 ➡️ 7의 갯수를 의미
}

const calLuckySevenV3 = (array: number[]): number => {
  return array.reduce((sum, e) => sum + (String(e).split("7").length - 1), 0);
  // sum의 초기값 0
  // array의 모든 원소(e)를 사용해서 각 원소를 돌때마다
  // sum + (String(e).split("7").length - 1) 실행
}

console.log(calLuckySevenV2([7, 77, 17])); // 4
console.log(calLuckySevenV2([10, 29])); // 0
console.log(calLuckySevenV2([0])); // 0
console.log(calLuckySevenV3([7, 77, 17])); // 4
console.log(calLuckySevenV3([10, 29])); // 0
console.log(calLuckySevenV3([0])); // 0

// 해결⛑️
// 아래 함수들로 리팩토링
// join()
// split()
// reduce(() => {})
