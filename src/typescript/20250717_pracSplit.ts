// split은 string에 사용 할 수 있음, string[]에는 사용 불가
// 대신 split은 separator를 기준으로 배열 1개 만들어서 반환
// 관련된 코테 문제 몇개 풀어보기
const printWithSplit = (): void => {
  const allUsers: string[] = [
    "aaaa@aaaa, aaaa, aa",
    "bbbb@bbbb, bbbb, bb",
    "cccc@cccc, cccc, cc",
    "dddd@dddd, dddd, dd",
  ];
  const allUsers1 = allUsers[0].split(`, `);
  const allUsers2 = allUsers[0].split(`\n`); // 이게 잘 이해가 안됨
  const allUsers3 = allUsers[0].split(` `);
  const allUsers4 = allUsers[0].split(`a`); // 이게 잘 이해가 안됨
  console.log(allUsers1);
  console.log(allUsers2);
  console.log(allUsers3);
  console.log(allUsers4);
};

printWithSplit();
console.log(`========================`);

/**
 * 문제 1: 아이디와 닉네임 추출하기
 *
 * 온라인 게임 유저들의 정보가 문자열로 주어집니다.
 * 각 문자열은 "이메일, 닉네임, 레벨" 형태입니다.
 * 예를 들어: "aaa@naver.com, 철수, 15"
 *
 * 이 중에서 "이메일"과 "닉네임"만 추출해서 새로운 배열에 담아 반환하세요.
 *
 * ➡️ 제한사항
 * - 입력 배열의 길이는 1 이상 100 이하입니다.
 * - 문자열은 항상 "이메일, 닉네임, 숫자" 형식으로 들어옵니다.
 *
 * ➡️ 입출력 예시
 * 입력: ["aaa@naver.com, 철수, 15", "bbb@gmail.com, 영희, 10"]
 * 출력: [["aaa@naver.com", "철수"], ["bbb@gmail.com", "영희"]]
 *
 */

class UserEntityWithoutAge {
  public email: string;
  public name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const userInfoOnlyEmailName = (userInfo: string[]) => {
  let result = [];
  for (let i: number = 0; i < userInfo.length; i = i + 1) {
    const [email, name, age] = userInfo[i].split(`, `);
    const userEntityWithoutAge = new UserEntityWithoutAge(email, name);
    result.push(userEntityWithoutAge);
  }
  return result;
};

const userInfo: string[] = [
  "aaa@naver.com, 철수, 10",
  "bbb@gmail.com, 영희, 10",
  "ccc@gmail.com, 재희, 18",
];
console.log(userInfoOnlyEmailName(userInfo));
console.log(`========================`);

/**
 * 문제 2: 단어 길이 세기
 *
 * 문자열이 주어집니다. 이 문자열은 공백(" ")을 기준으로 여러 단어가 들어있습니다.
 * 예를 들어: "I am learning TypeScript"
 *
 * 각 단어의 길이를 배열로 반환하세요.
 *
 * ➡️ 제한사항
 * - 문자열은 길이가 1 이상 100 이하입니다.
 * - 단어는 공백 한 칸으로만 구분됩니다.
 *
 * ➡️ 입출력 예시
 * 입력: "I am learning TypeScript"
 * 출력: [1, 2, 8, 10]
 *
 */

const wordLengthCounter = (word: string): number[] => {
  // 띄워쓰기 기준으로 나누기
  const splitWithSpace = word.split(` `);
  console.log(splitWithSpace);

  // 각 원소 length를 result 배열에 담기
  let result: number[] = [];
  for (let i: number = 0; i < splitWithSpace.length; i = i + 1) {
    result.push(splitWithSpace[i].length);
  }
  return result;
};

const word: string = `I am learning TypeScript`;
console.log(wordLengthCounter(word));
