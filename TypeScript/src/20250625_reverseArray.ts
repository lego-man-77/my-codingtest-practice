/**
 * 문제 설명
 * 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다.
 * num_list의 요소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 1 ≤ num_list의 길이 ≤ 1,000
 * 0 ≤ num_list의 요소 ≤ 1,000
 *
 * 입출력 예
 * | num_list             | result               |
 * |----------------------|----------------------|
 * | [1, 2, 3, 4, 5]      | [5, 4, 3, 2, 1]      |
 * | [1, 1, 1, 1, 1, 2]   | [2, 1, 1, 1, 1, 1]   |
 * | [1, 0, 1, 1, 1, 3, 5] | [5, 3, 1, 1, 1, 0, 1] |
 */
const reverseArray = (numList: number[]): number[] => {
  // 새로운 배열에 주어진 배열의 끝 원소부터 차례대로 넣기
  // 주어진 배열의 length부터 -1 하면서 원소를 끝에서부터 확인
  let result: number[] = [];
  for (let i: number = numList.length - 1; i >= 0; i = i - 1) {
    result.push(numList[i]);
  }
  return result;
};

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(`========================`);

const reverseArraysV2 = (numList: number[]): number[] => {
  // 원본 배열을 건드리지 않기 위해 slice로 복사한 후, 뒤집기 위해 reverse 사용
  return numList.slice().reverse();
};

console.log(reverseArraysV2([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 배열 문법 slice(문자열에도 사용가능) & 배열 문법 reverse
// 💡 slice(): 배열이나 문자열의 일부를 추출하여 새 배열이나 문자열로 반환 (원본은 변경되지 않음)
// 인수 없이 -> 전체 복사 반환
//   예: [1, 2, 3].slice() -> [1, 2, 3]
//        'abc'.slice()    -> 'abc'
// start ≥ 0 -> 앞에서부터 해당 인덱스 위치를 시작점으로 사용하여 마지막 값까지  담음
//   예: [1, 2, 3, 4].slice(1) -> [2, 3, 4]
//        'abcd'.slice(1)      -> 'bcd'
// start < 0 -> 뒤에서부터 오프셋만큼 계산하여 시작점으로 사용하여 마지막 값까지 담음
//   예: [1, 2, 3, 4].slice(-2) -> [3, 4]
//        'abcd'.slice(-2)      -> 'cd'
// end ≥ 0 -> 시작점부터 end 인덱스 직전까지 추출하여 담음
//   예: [1, 2, 3, 4].slice(1, 3) -> [2, 3]
//        'abcd'.slice(1, 3)      -> 'bc'
// end < 0 -> 뒤에서부터 오프셋만큼 계산하여 end 인덱스 직전까지 추출하여 담음
//   예: [1, 2, 3, 4].slice(1, -1) -> [2, 3]
//        'abcd'.slice(1, -1)      -> 'bc'

// 💡reverse(): 배열 요소의 순서를 뒤집어 반환(원본 배열이 변경됨)
// 배열 요소를 역순으로 재배열(예: [1, 2, 3].reverse() -> [3, 2, 1])
// reverse() 후 다른 메서드와 연결 가능(예: [1, 2, 3].reverse().slice(0, 2) -> [3, 2])
