/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때, [최빈값, 반복된 횟수]를 return 하도록 함수를 완성하세요.
 * 최빈값이 여러 개면 [-1, 0]을 return 합니다.
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 **/

const solution21 = (array: number[]): number[] => {


  return [-1, 0];
}

console.log(solution21([3, 5, 5, 1, -1, 5, 1, 1])) // [-1, 3]
console.log(solution21([3, 5, 5, 1, -1, 5, 1, 5])) // [5, 4]
