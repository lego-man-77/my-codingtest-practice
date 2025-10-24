/**
 * 문제 설명
 * 정수 n이 매개변수로 주어질 때, 
 * n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 10,000
 * 
 * 입출력 예
 * n	    result
 * 24	    [1, 2, 3, 4, 6, 8, 12, 24]
 * 29	    [1, 29]
 * 
 * 입출력 예 설명
 * 입출력 예 #1  
 * 24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.  
 * 
 * 입출력 예 #2  
 * 29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.
 */
const getDivisors = (n: number): number[] => {
  let result: number[] = [];
  for(let i = 1; i <= n; i = i + 1) {
    if(n % i === 0 ) {
      result.push(i);
    }
  }
  return result;
}

console.log(getDivisors(24));
console.log(getDivisors(29));

const getDivisorsV2 = (n: number): number[] => {
  let smallNumberArray: number[] = [];
  let bigNumberArray: number[] = [];

  // n을 i로 나누었을 때 약수가 2개 생김 -> i, n / i
  // 따라서 i * i <= n 범위 지정
  for(let i = 1; i * i <= n; i = i + 1) {
    if(n % i === 0) {
      smallNumberArray.push(i);
      const pair = n / i;
      if (pair !== i) { // i가 6일 때, false이기 때문에 아래 로직 실행X
        bigNumberArray.push(pair);
      }
    }
  }
  const sortedBigNumberArray = bigNumberArray.sort((a, b) => a - b);
  return smallNumberArray.concat(sortedBigNumberArray);
}

console.log(getDivisorsV2(24));
console.log(getDivisorsV2(29));
