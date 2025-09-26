/**
 * 정수 n이 매개변수로 주어질 때,
 * n 이하의 홀수(odd number)가 오름차순으로 담긴 배열을 return 하도록
 * solution 함수를 완성해주세요.
 *
 * 제한사항:
 * 1 ≤ n ≤ 100
 *
 * 입출력 예:
 * solution(10) => [1, 3, 5, 7, 9]
 * solution(15) => [1, 3, 5, 7, 9, 11, 13, 15]
 **/

const iDontLikeEvenNumber = (n: number): number[] => {
  // n보다 작은수를 하나하나 보면서 나누기 2를 하고, 나머지가 1인 애들만 새로운 배열에 담음
  let result: number[] = [];
  for (let i: number = 1; i <= n; i = i + 1) {
    if (i % 2 === 1) {
      result.push(i);
    }
  }
  return result;
};

console.log(iDontLikeEvenNumber(15));
