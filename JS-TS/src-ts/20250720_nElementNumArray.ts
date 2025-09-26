/**
 * 문제 설명
 *
 * 정수 배열 num_list 와 정수 n 이 매개변수로 주어집니다.
 * num_list 를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
 *
 * num_list 가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n 이 2이므로
 * num_list 를 2 * 4 배열로 바꾸면 [[1, 2], [3, 4], [5, 6], [7, 8]] 이 됩니다.
 * 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠
 * 2차원 배열의 원소로 넣어줍니다.
 *
 * 제한사항
 * - num_list 의 길이는 n 의 배수개입니다.
 * - 0 ≤ num_list 의 길이 ≤ 150
 * - 2 ≤ n < num_list 의 길이
 *
 * 입출력 예
 * num_list = [1, 2, 3, 4, 5, 6, 7, 8], n = 2 → [[1, 2], [3, 4], [5, 6], [7, 8]]
 * num_list = [100, 95, 2, 4, 5, 6, 18, 33, 948], n = 3 → [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
 */
const nElementNumArray = (numList: number[], n: number): number[][] => {
  let answer: number[] = [];
  let result: number[][] = [];
  for (let i: number = 0; i < numList.length; i = i + 1) {
    answer.push(numList[i]);
    if (answer.length === n) {
      result.push(answer);
      answer = [];
    }
  }
  if (answer.length > 0 && answer.length < n) {
    result.push(answer);
  }
  return result;
};

console.log(nElementNumArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(nElementNumArray([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
console.log(`========================`);

const nElementNumArrayUseSlice = (numList: number[], n: number): number[][] => {
  let answer: number[] = [];
  let result: number[][] = [];
  for (let i: number = 0; i < numList.length; i = i + n) {
    answer = numList.slice(i, i + n);
    result.push(answer);
  }
  return result;
};

console.log(nElementNumArrayUseSlice([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(nElementNumArrayUseSlice([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
// slice는 배열 길이를 넘어가면 에러가 뜨지않고, 해당 원소 ~ 배열끝까지 잘라서 담아줌
