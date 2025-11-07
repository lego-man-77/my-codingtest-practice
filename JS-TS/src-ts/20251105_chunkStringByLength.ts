/**
 * 문제 설명
 * 문자열 my_str과 n이 매개변수로 주어질 때,
 * my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * - 1 ≤ my_str의 길이 ≤ 100
 * - 1 ≤ n ≤ my_str의 길이
 * - my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
 *
 * 입출력 예
 * my_str                 n   result
 * "abc1Addfggg4556b"     6   ["abc1Ad", "dfggg4", "556b"]
 * "abcdef123"            3   ["abc", "def", "123"]
 *
 * 입출력 예 설명
 * - 입출력 예 #1
 *   "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.
 * - 입출력 예 #2
 *   "abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.
 */
const chunkStringByLength = (myStr: string, n: number): string[] => {
  // 아이디어💡
  // 1. my_str 순회하면서 문자열 변수에 원소들을 result에 담음
  // 2. 문자열 변수의 길이가 n개 되면 배열에 넣고 문자열 변수 초기화
  // 3. 순회가 끝나면, 남아있는 문자열이 있을 수도 있으니까,
  // 문자열 변수의 길이가 0이 아니면, 나머지 문자열도 result에 담아서 반환
  let myStrCutPerN = ``;
  let result = [];
  for (let i = 0; i < myStr.length; i++) {
    myStrCutPerN = myStrCutPerN + myStr[i];
    if (myStrCutPerN.length === n) {
      result.push(myStrCutPerN);
      myStrCutPerN = ``;
    }
  }
  if (myStrCutPerN.length !== 0) {
    result.push(myStrCutPerN);
  }
  return result;
};

console.log(chunkStringByLength("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(chunkStringByLength("abcdef123", 3)); // ["abc", "def", "123"]
