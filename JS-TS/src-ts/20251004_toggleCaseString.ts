/** 
대문자와 소문자
제출 내역

문제 설명
문자열 my_string이 매개변수로 주어질 때, 
대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

입출력 예
my_string    result
"cccCCC"     "CCCccc"
"abCdEfghIJ" "ABcDeFGHij"

입출력 예 설명
입출력 예 #1
소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.

입출력 예 #2
소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.
*/
const toggleCaseString = (myString: string) => {
    // 65 ~ 90 -> A ~ Z
    // 97 ~ 122 -> a ~ z
    // 순환하면서 알파벳들을 -> 번호로 바꿈 (my_string[i].charCodeAt() 사용)
    // 65와 90사이라면 + 32해서 다시 알파벳으로 바꿈 (String.fromCharCode(my_string[i]) 사용)
    // 97과 122사이라면 -32해서 다시 알파벳으로 바꿈 (String.fromCharCode(my_string[i]) 사용)
    // 각 과정마다 answer.push로 넣고 쓸데없는 순환 줄이기 위해서 break;
    let answer = '';
    for(let i = 0; i < myString.length; i = i + 1) {
        const stringToAscii = myString[i].charCodeAt(Number(myString[i]));
        if(stringToAscii <= 90 && stringToAscii >= 65) {
            answer = answer + String.fromCharCode(stringToAscii + 32);
        } else if(stringToAscii >= 97 && stringToAscii <= 122) {
            answer = answer + String.fromCharCode(stringToAscii - 32);
        }
    }
    return answer;
}

console.log(toggleCaseString("CCCccc"));
console.log(toggleCaseString("ABcDeFGHij"));
