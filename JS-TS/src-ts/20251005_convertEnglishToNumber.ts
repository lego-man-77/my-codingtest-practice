/**
 * 영어가 싫어요
 *
 * 🧾 문제 설명
 * 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
 * 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
 *
 * ⚙️ 제한사항
 * - numbers는 소문자로만 구성되어 있습니다.
 * - numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
 * - 1 ≤ numbers의 길이 ≤ 50
 * - "zero"는 numbers의 맨 앞에 올 수 없습니다.
 *
 * 💡 입출력 예
 * numbers: "onetwothreefourfivesixseveneightnine" → result: 123456789
 * numbers: "onefourzerosixseven" → result: 14067
 *
 * 📘 입출력 예 설명
 * 예 #1: "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
 * 예 #2: "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.
 */
const convertEnglishToNumber = (numbers: string): number => {
  const numbersMap: Record<string, string> = {
    "one": "1",
    "zero": "0",
    "three": "3",
    "two": "2",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
  }

  let result: string = ``
  let answer: string = ``
  for(let i: number = 0; i < numbers.length; i = i + 1) {
    result = result + numbers[i];
    if(numbersMap[result] !== undefined) {
      answer = answer + numbersMap[result];
      result = ``;
    }
  }
  return Number(answer);
}

console.log(convertEnglishToNumber("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(convertEnglishToNumber("onefourzerosixseven")); // 14067
