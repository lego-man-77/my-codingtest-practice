/**
 * 문제 설명
 * 문자열 myString과 연속된 문자열 letter가 매개변수로 주어집니다.
 * myString에서 letter에 해당하는 모든 부분을 제거한 문자열을 반환하는 solution 함수를 작성하세요.
 *
 * 제한사항
 * 1 ≤ myString의 길이 ≤ 100
 * 1 ≤ letter의 길이 ≤ myString의 길이
 * myString과 letter는 알파벳 대소문자로만 이루어져 있습니다.
 *
 * 입출력 예
 * | "banana"   | "na"   | "ba"    |
 */
// letter.length만큼 반복하는 for문에서 myString[i + j] === letter[j]가 같다면 겹치는 단어라는 뜻
const solution11 = (myString: string, letter: string): string => {
  let result: string = ``;
  for (let i: number = 0; i < myString.length; i = i + 1) {
    let isMatch: boolean = true;
    for (let j: number = 0; j < letter.length; j = j + 1) {
      if (myString[i + j] !== letter[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      i = i + letter.length - 1;
      continue;
    }
    result = result + myString[i];
  }
  return result;
};

console.log(solution11(`bbbnbbbnanabbb`, `na`)); // bbbnbbb
console.log(solution11("abcfdefghf", "f")); // abcdegh
console.log(`========================`);

/**
 * 문제 설명
 * 문자열 myString과 연속된 문자열 letter가 매개변수로 주어집니다.
 * myString에서 letter가 처음 등장하는 부분만 제거한 문자열을 반환하는 solution 함수를 작성하세요.
 *
 * 제한사항
 * 1 ≤ myString의 길이 ≤ 100
 * 1 ≤ letter의 길이 ≤ myString의 길이
 * myString과 letter는 알파벳 대소문자로만 이루어져 있습니다.
 *
 * 입출력 예
 * | "banana"   | "na"   | "bana"   |
 */
// myString[i + j] === letter.length[j]가 모두 같다면 겹치는 부분 즉, result에 추가 X
// 위 조건을 만족해서 추가를 안했다는 것은 삭제됐다는 말이기 때문에 isRemoved를 true로 변경
// 이후, isRemoved를 사용해서 모든 문자열 추가
const solution12 = (myString: string, letter: string): string => {
  let result: string = ``;
  let isRemoved: boolean = false;
  for (let i: number = 0; i < myString.length; i = i + 1) {
    if (!isRemoved) {
      let isMatch: boolean = true;
      for (let j: number = 0; j < letter.length; j = j + 1) {
        if (myString[i + j] !== letter[j]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        i = i + letter.length - 1;
        isRemoved = true;
        continue;
      }
    }
    result = result + myString[i];
  }
  return result;
};

console.log(solution12(`bbbnbbbnanabbb`, `na`)); // bbbnbbbnabbb
console.log(solution12("abcfdefghf", "f")); // abcdefghf
