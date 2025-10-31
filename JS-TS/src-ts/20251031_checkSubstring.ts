/**
 * 문제 설명
 * 문자열 str1, str2가 매개변수로 주어집니다.
 * str1 안에 str2가 있다면 1을, 없다면 2를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 1 ≤ str1의 길이 ≤ 100
 * 1 ≤ str2의 길이 ≤ 100
 * 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.
 *
 * 입출력 예
 * str1	                      str2	    result
 * "ab6CDE443fgh22iJKlmn1o"	  "6CD"	    1
 * "ppprrrogrammers"	        "pppp"	  2
 * "AbcAbcA"	                "AAA"	    2
 *
 * 입출력 예 설명
 * 예 #1 : "ab6CDE443fgh22iJKlmn1o" 안에 "6CD"가 존재하므로 1을 return합니다.
 * 예 #2 : "ppprrrogrammers" 안에 "pppp"가 없으므로 2를 return합니다.
 * 예 #3 : "AbcAbcA" 안에 "AAA"가 없으므로 2를 return합니다.
 */
const checkSubstring = (str1: string, str2: string): number => {
  return str1.includes(str2) ? 1 : 2;
};

console.log(checkSubstring("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(checkSubstring("ppprrrogrammers", "pppp"));
console.log(checkSubstring("AbcAbcA", "AAA"));
console.log(`========================`);

// ⚠️이슈
// 너무 날먹 코드라서, 컴퓨터적인 사고를 하지않음

const checkSubstringV2 = (str1: string, str2: string): number => {
  for (let i = 0; i <= str1.length - str2.length; i = i + 1) {
    let isMatch: boolean = true;
    if (str1[i] !== str2[0]) {
      continue;
    }

    for (let j = 1; j < str2.length; j = j + 1) {
      if (str1[i + j] !== str2[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
        return 1;
      }
  }
  return 2;
};

console.log(checkSubstringV2("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(checkSubstringV2("ppprrrogrammers", "pppp"));
console.log(checkSubstringV2("AbcAbcA", "AAA"));
console.log(`========================`);

// ⛑️해결
// 기본적인 조건문, 반복문으로 해결

// ⚠️이슈
// 코드 가독성 개선

const checkSubstringV3 = (str1: string, str2: string): number => {
  outer: for (let i = 0; i <= str1.length - str2.length; i = i + 1) {
    if (str1[i] !== str2[0]) {
      continue;
    }
    for (let j = 1; j < str2.length; j = j + 1) {
      if (str1[i + j] !== str2[j]) {
        continue outer;
      }
    }
    return 1;
  }
  return 2;
}

console.log(checkSubstringV3("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(checkSubstringV3("ppprrrogrammers", "pppp"));
console.log(checkSubstringV3("AbcAbcA", "AAA"));

// ⛑️해결
// "현재 반복문 탈출 + 바로 상위 반복문 다음 조건 수행" 문법을 찾던중
// "continue outer, label 개념" 학습 후, 적용
// continue 뒤에는 반드시 "반복문(for/while/do-while)" 와야함
