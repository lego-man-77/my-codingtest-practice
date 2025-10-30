/**
문제 설명
덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 
수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 
단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
1 ≤ quiz의 길이 ≤ 10
X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 
각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
-10,000 ≤ X, Y ≤ 10,000
-20,000 ≤ Z ≤ 20,000
[연산자]는 + 와 - 중 하나입니다.

입출력 예
quiz	=>	result
["3 - 4 = -3", "5 + 6 = 11"]	=>	["X", "O"]
["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]	=>	["O", "O", "X", "O"]

입출력 예 설명
입출력 예 #1
3 - 4 = -3 은 틀린 수식이므로 "X", 5 + 6 = 11 은 옳은 수식이므로 "O" 입니다.
따라서 ["X", "O"]를 return합니다.

입출력 예 #2
19 - 6 = 13 은 옳은 수식이므로 "O", 
5 + 66 = 71 은 옳은 수식이므로 "O", 
5 - 15 = 63 은 틀린 수식이므로 "X", 
3 - 1 = 2는 옳은 수식이므로 "O"
따라서 ["O", "O", "X", "O"]를 return합니다.
*/
const OXQuiz = (quiz: string[]): string[] => {
  let result: string[] = [];
  for (let i = 0; i < quiz.length; i = i + 1) {
    const quizElement: string[] = quiz[i].split(` `);
    if (quizElement[1] === "-") {
      const compareNumber = Number(quizElement[0]) - Number(quizElement[2]);
      if (compareNumber !== Number(quizElement[quizElement.length - 1])) {
        result.push("X");
      } else {
        result.push("O");
      }
    } else if (quizElement[1] === "+") {
      const compareNumber = Number(quizElement[0]) + Number(quizElement[2]);
      if (compareNumber !== Number(quizElement[quizElement.length - 1])) {
        result.push("X");
      } else {
        result.push("O");
      }
    }
  }
  return result;
};

console.log(OXQuiz(["3 - 4 = -3", "5 + 6 = 11"]));
console.log(OXQuiz(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]));
console.log(`========================`);

// ⚠️이슈
// 코드 가독성 개선

const OXQuizV2 = (quiz: string[]): string[] => {
  let result: string[] = [];
  for (let i = 0; i < quiz.length; i = i + 1) {
    const [firstNumber, op, secondNumber, _, thirdNumber] = quiz[i].split(` `);
    const x = Number(firstNumber);
    const y = Number(secondNumber);
    const z = Number(thirdNumber);
    const calResult = String(op) === "+" ? x + y : x - y;
    if (calResult !== z) {
      result.push("X");
    } else {
      result.push("O");
    }
  }
  return result;
};

console.log(OXQuizV2(["3 - 4 = -3", "5 + 6 = 11"]));
console.log(OXQuizV2(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]));

// ⛑️해결
// "구조 분해 할당" 사용
// "TS 타입 에러" 방지를 위해서
  // 1. 먼저 모든 원소를 string으로 split 한 후,
  // 2. 숫자에만 Number() 사용
