/**
 * 문제 설명
 * 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
 * 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 3 ≤ numbers의 길이 ≤ 20
 * direction은 "left" 와 "right" 둘 중 하나입니다.
 *
 * 입출력 예
 * numbers	            direction	result
 * [1, 2, 3]	        "right"	    [3, 1, 2]
 * [4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]
 *
 * 입출력 예 설명
 * 예시 #1
 * numbers 가 [1, 2, 3]이고 direction이 "right" 이므로
 * 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
 * [1, 2, 3, 4] = [4, 1, 2, 3] ->
 * 예시 #2
 * numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로
 * 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.
 */
const rotateArray = (numbers: number[], direction: string): number[] => {
  let result: number[] = [];
  if (direction === "left") {
    result.push(numbers[numbers.length - 1]);
    for (let i = 0; i < numbers.length - 1; i = i + 1) {
      result.push(numbers[i]);
    }
  } else if (direction === "right") {
    for (let i = 1; i < numbers.length; i = i + 1) {
      result.push(numbers[i]);
    }
    result.push(numbers[0]);
  }
  return result;
};

console.log(rotateArray([1, 2, 3, 4], `left`));
console.log(rotateArray([1, 2, 3, 4], `right`));
console.log(`========================`);

const rotateArrayUseArrayMethod = (
  numbers: number[],
  direction: string,
): number[] => {
  if (direction === "left") {
    const lastItem = numbers.pop();
    numbers.unshift(lastItem!);
  } else if (direction === "right") {
    const firstItem = numbers.shift();
    numbers.push(firstItem!);
  }
  return numbers;
};

console.log(rotateArrayUseArrayMethod([1, 2, 3, 4], `left`));
console.log(rotateArrayUseArrayMethod([1, 2, 3, 4], `right`));
