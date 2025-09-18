export class Calculator {
  // 두 수의 합
  public addition = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  // 두 수의 차
  public subtraction = (num1: number, num2: number): number => {
    return num1 - num2;
  };

  // 두 수의 곱
  public multiplication = (num1: number, num2: number): number => {
    return num1 * num2;
  };

  // 두 수의 몫과 나머지
  public divisionAndRemainder = (num1: number, num2: number): number[] => {
    let division: number = num1 / num2;
    const remainder: number = num1 % num2;
    return [Math.floor(division), remainder];
  };
}

const calculator = new Calculator();
console.log(`
두 수의 합: ${calculator.addition(10, 5)}
두 수의 차: ${calculator.subtraction(10, 5)}
두 수의 곱: ${calculator.multiplication(10, 5)}
두 수의 몫과 나머지: ${calculator.divisionAndRemainder(10, 5)}
`);

// // 💡파라미터 -> int & 리턴값 -> string 해야한다면? ➡️ parseInt(), toString()
// const additionV2 = (num1: string, num2: string): string => {
//   const parseIntNum1: number = parseInt(num1);
//   const parseIntNum2: number = parseInt(num2);
//   const answer: number = parseIntNum1 + parseIntNum2;
//   return answer.toString();
// };
