/**
 * 문제 설명
 * 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
 * rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 0 < rsp 의 길이 ≤ 100
 * rsp 와 길이가 같은 문자열을 return 합니다.
 * rsp 는 숫자 0, 2, 5로 이루어져 있습니다.
 *
 * 입출력 예
 * "2"     | "0"
 * "205"   | "052"
 */
const winnerRSP = (rsp: string): string => {
  const rspRecord: Record<string, string> = {
    "2": "0",
    "0": "5",
    "5": "2",
  };
  let result: string = ``;
  for (let i: number = 0; i < rsp.length; i = i + 1) {
    result = result + rspRecord[rsp[i]];
  }
  return result;
};

console.log(winnerRSP(`2`));
console.log(winnerRSP(`205`));
