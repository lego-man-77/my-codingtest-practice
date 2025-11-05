/**
 * 문제 설명:
 * 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
 * my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항:
 * 0 < my_string 길이 < 100
 * 
 * 입출력 예:
 * my_string     result
 * "Bcad"        "abcd"
 * "heLLo"       "ehllo"
 * "Python"      "hnopty"
 * 
 * 입출력 예 설명:
 * 예 #1: "Bcad" → "bcad" → "abcd"
 * 예 #2: "heLLo" → "hello" → "ehllo"
 * 예 #3: "Python" → "python" → "hnopty"
 */
const sortStringToLowercase = (myString: string): string => {
  // 1. myString 각 문자를 ascii code로 변환 -> .charCodeAt(index)
  // 2. 만약 65 ~ 90 범위의 숫자는 "+ 32" ("A" ~ "Z")
  // 3. 변환한 숫자를 오름차순으로 정렬
  // 4. 정렬된 숫자를 순차적으로 문제로 변환 -> String.fromCharCode()
  let numberArray = []
  let result = ``;
  console.log(`주어진 문자열: ${myString}`);
  for(let i = 0; i < myString.length; i++) {
    let stringToNumber = myString.charCodeAt(i)
    if(stringToNumber >= 65 && stringToNumber <= 90) {
       stringToNumber = stringToNumber + 32;
    }
    numberArray.push(stringToNumber);
  }
  
  console.log(`문자열을 숫자로 변환: ${numberArray}`);
  numberArray.sort((a, b) => a - b);
  console.log(`오름차순으로 정렬: ${numberArray}`);

  for(let i = 0; i < numberArray.length; i++) {
    result = result + String.fromCharCode(numberArray[i]);
  }

  console.log(`숫자를 문자열로 변환: ${numberArray}`);
  console.log(`정렬된 최종 문자열: ${result}`);
  return result;
}

console.log(sortStringToLowercase("Bcad")); // "abcd"
console.log(sortStringToLowercase("heLLo")); // "ehllo"
console.log(sortStringToLowercase("Python")); // "hnopty"
