/**
 * 문제 설명
 * 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다.
 * 그낭은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다.
 * 문자열 letter 가 매개변수로 주어질 때,
 * letter 를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 *
 * 모스부호는 다음과 같습니다:
 *
 * morse = {
 *   '.-':'a', '-...':'b', '-.-.':'c', '-..':'d', '.':'e', '..-.':'f',
 *   '--.':'g', '....':'h', '..':'i', '.---':'j', '-.-':'k', '.-..':'l',
 *   '--':'m', '-.':'n', '---':'o', '.--.':'p', '--.-':'q', '.-.':'r',
 *   '...':'s', '-':'t', '..-':'u', '...-':'v', '.--':'w', '-..-':'x',
 *   '-.--':'y', '--..':'z'
 * }
 *
 * 제한사항
 * 1 ≤ letter 의 길이 ≤ 1,000
 * return값은 소문자입니다.
 * letter 의 모스부호는 공백으로 나누어져 있습니다.
 * letter 에 공백은 연속으로 두 개 이상 존재하지 않습니다.
 * 해독할 수 없는 편지는 주어지지 않습니다.
 * 편지의 시작과 끝에는 공백이 없습니다.
 *
 * 입출력 예
 * ".... . .-.. .-.. ---"        | "hello"
 * ".--. -.-- - .... --- -."     | "python"
 */
const morseCodeTranslator1 = (letter: string): string => {
  const morseMap: Record<string, string> = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  let answer: string = ``;
  let result: string = ``;
  for (let i: number = 0; i < letter.length; i = i + 1) {
    if (letter[i] !== ` `) {
      // 공백이 아니면 answer에 하나씩 추가 -> 이후 value로 사용
      answer = answer + letter[i];
    } else {
      // 공백이 등장했다는 것은 한 단어가 완성됐다는 뜻이기 때문에 result에 morseMap에서 해당되는 key값 추가
      // 그리고 answer는 새로운 단어를 넣어야하기 때문에 공백으로 초기화
      result = result + morseMap[answer];
      answer = ``;
    }
  }
  result = result + morseMap[answer];
  return result;
};

console.log(morseCodeTranslator1(".... . .-.. .-.. ---"));
console.log(morseCodeTranslator1(".--. -.-- - .... --- -."));
console.log(`========================`);

const morseCodeTranslator1UseSplit = (letter: string): string => {
  const morseMap: Record<string, string> = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  let result: string = ``;
  let answer: string[] = letter.split(` `);
  console.log(answer);
  for (let i: number = 0; i < answer.length; i = i + 1) {
    result = result + morseMap[answer[i]];
  }
  return result;
};

console.log(morseCodeTranslator1UseSplit(".... . .-.. .-.. ---"));
console.log(morseCodeTranslator1UseSplit(".--. -.-- - .... --- -."));
