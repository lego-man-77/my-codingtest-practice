/**
 * 문제 설명
 * 두 배열이 얼마나 유사한지 확인해보려고 합니다.
 * 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 1 ≤ s1, s2의 길이 ≤ 100
 * 1 ≤ s1, s2의 원소의 길이 ≤ 10
 * s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다.
 * s1과 s2는 각각 중복된 원소를 갖지 않습니다.
 *
 * 입출력 예
 * s1	                  s2	                        result
 * ["a", "b", "c"]	    ["com", "b", "d", "p", "c"]	2
 * ["n", "omg"]	        ["m", "dot"]	              0
 *
 * 입출력 예 설명
 * 입출력 예 #1
 * "b"와 "c"가 같으므로 2를 return합니다.
 *
 * 입출력 예 #2
 * 같은 원소가 없으므로 0을 return합니다.
 */
const countDupElement = (s1: string[], s2: string[]): number => {
  let result: number = 0;
  for (let i = 0; i < s1.length; i = i + 1) {
    for (let j = 0; j < s2.length; j = j + 1) {
      if (s1[i] === s2[j]) {
        result = result + 1;
      }
    }
  }
  return result;
};

console.log(countDupElement(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(countDupElement(["n", "omg"], ["m", "dot"]));
console.log(`========================`);

// ⚠️이슈
// 2중 for문으로 s1, s2의 길이가 조금만 길어져도 성능이 급격하게 떨어짐

const countDupElementV2 = (s1: string[], s2: string[]): number => {
  let result: number = 0;
  let recordTable: Record<string, boolean> = {};

  for (let i = 0; i < s2.length; i = i + 1) {
    recordTable[s2[i]] = true;
  }

  for (let j = 0; j < s1.length; j = j + 1) {
    if (recordTable[s1[j]] === true) {
      result = result + 1;
    }
  }
  return result;
};

console.log(countDupElementV2(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(countDupElementV2(["a", "b", "c"], ["a", "b", "c", "a", "c"]));
console.log(countDupElementV2(["n", "omg"], ["m", "dot"]));

// ⛑️해결
// Record<key, value> 자료형의 특성을 사용, 반복을 "총 2번" 으로 개선
// s1, s2에 중복되는 원소가 있어도 에러❌
