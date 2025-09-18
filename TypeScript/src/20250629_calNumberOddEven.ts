/**
 * 문제 설명
 * 정수가 담긴 리스트 num_list가 주어질 때,
 * num_list의 요소 중 짝수와 홀수의 개수를 담은 배열을 return하도록 solution 함수를 완성하세요.
 *
 * 제한사항
 * 1 ≤ num_list의 길이 ≤ 100
 * 0 ≤ num_list의 요소 ≤ 1,000
 *
 * 입출력 예
 * | num_list        | result   |
 * |-----------------|----------|
 * | [1, 2, 3, 4, 5] | [2, 3]   |
 * | [1, 3, 5, 7]    | [0, 4]   |
 */
const calNumberOddEven = (numList: number[]): number[] => {
  let cntEven: number = 0;
  let cntOdd: number = 0;
  for (let i: number = 0; i < numList.length; i = i + 1) {
    if (numList[i] % 2 === 0) {
      cntEven = cntEven + 1;
    } else {
      cntOdd = cntOdd + 1;
    }
  }
  console.log(`짝수 개수: ${cntEven}, 홀수 개수: ${cntOdd}`);
  return [cntEven, cntOdd];
};

console.log(calNumberOddEven([0, 1, 2, 3, 4, 5, 6]));
