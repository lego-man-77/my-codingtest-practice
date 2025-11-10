/**
 * 문제 설명
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * -10,000 ≤ numbers의 원소 ≤ 10,000
 * 2 ≤ numbers 의 길이 ≤ 100
 * 
 * 입출력 예
 * numbers                    result
 * [1, 2, -3, 4, -5]          15
 * [0, -31, 24, 10, 1, 9]     240
 * [10, 20, 30, 5, 5, 20, 5]  600
 * 
 * 입출력 예 설명
 * 입출력 예 #1
 * 두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.
 * 
 * 입출력 예 #2
 * 두 수의 곱중 최댓값은 10 * 24 = 240 입니다.
 * 
 * 입출력 예 #3
 * 두 수의 곱중 최댓값은 20 * 30 = 600 입니다.
 */
const maxMultiplication = (numbers: number[]): number => {
  // 아이디어💡
  // 각 원소를 모두 곱해서 가장 큰 값을 반환
   let maxNumber = -10000 * 10000;
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] * numbers[j] > maxNumber) {
                maxNumber = numbers[i] * numbers[j];
            }
        }
        console.log(`${i + 1}번째 반복의 maxNumber: ${maxNumber}`);
    }
    return maxNumber;
}

console.log(maxMultiplication([1, 2, -3, 4, -5])); // 15
console.log(maxMultiplication([0, -31, 24, 10, 1, 9])); // 240
console.log(maxMultiplication([10, 20, 30, 5, 5, 20, 5])); // 600
console.log(maxMultiplication([10000, -10000, -10000, 10000])); // 100000000
console.log(maxMultiplication([-1000, 2])); // -2000
console.log(maxMultiplication([0, -5])); // 0

// 이슈⚠️
// 모든 배열을 2중 for문으로 반복하기 때문에 비효율적
// -> 코드 리팩토링

const maxMultiplicationV2 = (numbers: number[]): number => {
  //아이디어💡
  // 오름차순으로 정리하고 접근하면 쉽게 풀 수 있음
  // [0] * [1] = 부호 "+" 최댓값
  // [length - 1] * [length - 2] = 부호 "-" 최댓값
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return Math.max(
    sortedNumbers[0] * sortedNumbers[1], 
    sortedNumbers[sortedNumbers.length - 1] * sortedNumbers[sortedNumbers.length - 2]);
}

console.log(maxMultiplicationV2([1, 2, -3, 4, -5])); // 15
console.log(maxMultiplicationV2([0, -31, 24, 10, 1, 9])); // 240
console.log(maxMultiplicationV2([10, 20, 30, 5, 5, 20, 5])); // 600
console.log(maxMultiplicationV2([10000, -10000, -10000, 10000])); // 100000000
console.log(maxMultiplicationV2([-1000, 2])); // -2000
console.log(maxMultiplicationV2([0, -5])); // 0

// 해결⛑️
// 아래 함수들로 리팩토링
// sort
// Math.max
