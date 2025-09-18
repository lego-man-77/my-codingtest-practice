/**
 * 문제 설명
 * 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
 * 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
 * a는 0, b는 1, c는 2, ..., j는 9입니다.
 * 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
 * 나이 age가 매개변수로 주어질 때 PROGRAMMERS-962식 나이를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * age는 자연수입니다.
 * age ≤ 1,000
 * PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
 *
 * 입출력 예
 * | 23   | "cd"   |
 * | 51   | "fb"   |
 * | 100  | "baa"  |
 */
const calAlienAge = (age: number): string => {
  let char: string[] = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`];
  let stringAge: string = age.toString();
  let result: string = ``;
  for (let i: number = 0; i < stringAge.length; i = i + 1) {
    result = result + char[parseInt(stringAge[i])];
  }
  return result;
};

console.log(calAlienAge(23));
console.log(calAlienAge(51));
console.log(calAlienAge(100));
console.log(`========================`);

const calAlienAgeWithAscii = (age: number): string => {
  const stringAge: string = age.toString();
  let result: string = ``;
  // ascii code `0` = 48
  // ascii code `a` = 97
  for (let i: number = 0; i < stringAge.length; i = i + 1) {
    result = result + String.fromCharCode(stringAge[i].charCodeAt(0) + 49);
  }
  return result;
};

console.log(calAlienAgeWithAscii(23));
console.log(calAlienAgeWithAscii(51));
console.log(calAlienAgeWithAscii(100));

// ASCII Code 문법
// 💡String.fromCharCode(): ASCII Code 값을 해당 문자열로 반환
//    예: String.fromCharCode(65, 66, 67) -> "ABC"
// 여러 개의 인자를 쉼표로 구분해 전달 가능
//    예: String.fromCharCode(65, 66, 67).toLowerCase() -> "abc"

// 💡.charCodeAt(): 문자열에서 특정 인덱스의 문자를 ASCII Code 값으로 반환
//    예: "ABC".charCodeAt(0) -> 65
// 반환된 숫자는 숫자형이므로, toString() 등 숫자 메서드와 연결 가능
//    예: "A".charCodeAt(0).toString() -> "65"
// 유효 범위를 벗어나는 인덱스는 NaN 반환
