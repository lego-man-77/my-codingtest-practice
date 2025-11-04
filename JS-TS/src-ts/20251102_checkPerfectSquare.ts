/**
 * 문제 설명
 * 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 
 * 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 1,000,000
 * 
 * 입출력 예
 * n	    result
 * 144	    1
 * 976	    2
 * 
 * 입출력 예 설명
 * 입출력 예 #1
 * 144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.
 * 
 * 입출력 예 #2
 * 976은 제곱수가 아닙니다. 따라서 2를 return합니다.
 */
const checkPerfectSquare = (n: number): number => {
    for(let i = 1; i < n; i++) {
    if(i * i === n) {
      return 1;
    }
  }
  return 2;
}

console.log(checkPerfectSquare(144));
console.log(checkPerfectSquare(976));

// ⚠️이슈
// 쓸데없는 반복이 실행됨

const checkPerfectSquareV2 = (n: number): number => {
  for(let i = 0; i * i <= n; i++) {
    if(i * i === n) {
      return 1;
    }
  }
  return 2;
}

console.log(checkPerfectSquareV2(144));
console.log(checkPerfectSquareV2(976));

// ⛑️해결
// 반복 범위를 "i * i" 로 축소시켜 반복 횟수를 줄임
