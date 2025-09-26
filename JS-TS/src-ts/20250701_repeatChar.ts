/**
 * 문제 설명
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때,
 * my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록
 * solution 함수를 완성해주세요.
 *
 * 제한사항
 * 2 ≤ my_string의 길이 ≤ 5
 * 2 ≤ n ≤ 10
 * my_string은 영어 대소문자로 이루어져 있습니다.
 *
 * 입출력 예
 * | "hello"   | 3 | "hhheeellllllooo"    |
 */
const repeatChar = (myString: string, n: number): string => {
  // 이중 for문?
  let result: string = ``;
  for (let i: number = 0; i < myString.length; i = i + 1) {
    for (let j: number = 0; j < n; j = j + 1) {
      result = result + myString[i];
    }
  }
  return result;
};

console.log(repeatChar(`hello`, 3));
