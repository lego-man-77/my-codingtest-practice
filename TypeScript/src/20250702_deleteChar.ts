/**
 * 문제 설명
 * 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
 * my_string에서 letter를 제거한 문자열을 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 1 ≤ my_string의 길이 ≤ 100
 * letter은 길이가 1인 영문자입니다.
 * my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
 * 대문자와 소문자를 구분합니다.
 *
 * 입출력 예
 * | "abcdef"  | "f"    | "abcde" |
 * | "BCBdbe"  | "B"    | "Cdbe"  |
 */
const deleteChar = (myString: string, letter: string) => {
  let result: string = ``;
  for (let i: number = 0; i < myString.length; i = i + 1) {
    if (myString[i] !== letter) {
      result = result + myString[i];
    }
  }
  return result;
};

console.log(deleteChar(`abcdef`, `f`));
console.log(deleteChar(`BCBdbe`, `B`));

// 주어진 myString에서 첫번째 letter만 제거한 버전의 result반환
// boolean & continue 사용
const deleteOnlyFirstChar = (myString: string, letter: string): string => {
  let result: string = "";
  let removed: boolean = false;
  for (let i: number = 0; i < myString.length; i = i + 1) {
    if (!removed && myString[i] === letter) {
      removed = true; // 첫 삭제 완료 표시, 이후로는 removed가 true이기 때문에 이 조건이 발동하지 않음
      continue; // 현재의 myString[i]를 result에 추가하는 코드는 건너뛰고, 바로 다음 반복 진행
    }
    result = result + myString[i];
  }
  return result;
};

console.log(deleteOnlyFirstChar("abcfdef", "f")); // "abcde"
console.log(deleteOnlyFirstChar("BCBdbe", "B")); // "CBdbe"
