/**
 * 📘 문제 설명
 * 자연수 n이 주어지면, n의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
 *
 * 🔒 제한사항
 * - N의 범위: 100,000,000 이하의 자연수
 *
 * 🧩 입출력 예
 * | N   | answer  |
 * |-----|---------|
 * | 123 | 6       |
 * | 987 | 24      |
 *
 * 💬 입출력 예 설명
 * - 예 #1: 문제의 예시와 같습니다.
 * - 예 #2: 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
 */
const sumOfDigits = (n: number): number => {
  let result: number = 0;
  const nToString = String(n);
  for (let i = 0; i < nToString.length; i = i + 1) {
    result = result + Number(nToString[i]);
  }
  return result;
};

console.log(sumOfDigits(123));
console.log(sumOfDigits(987));
