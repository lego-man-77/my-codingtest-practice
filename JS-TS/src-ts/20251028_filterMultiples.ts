/** 
 * 📘 문제 설명
 * 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, 
 * numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 📏 제한사항
 * 1 ≤ n ≤ 10,000
 * 1 ≤ numlist의 크기 ≤ 100
 * 1 ≤ numlist의 원소 ≤ 100,000
 * 
 * 💡 입출력 예
 * n       numlist                                 result
 * 3    →  [4, 5, 6, 7, 8, 9, 10, 11, 12]          [6, 9, 12]
 * 5    →  [1, 9, 3, 10, 13, 5]                    [10, 5]
 * 12   →  [2, 100, 120, 600, 12, 12]              [120, 600, 12, 12]
 * 
 * 🧩 입출력 예 설명
 * 예 #1: numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.
 * 예 #2: numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.
 * 예 #3: numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.
 */
const filterMultiples = (n: number, numlist: number[]): number[] => {
  let result: number[] = [];
  for(let i = 0; i < numlist.length; i = i + 1) {
    if(numlist[i] % n === 0) {
      result.push(numlist[i]);
    }
  }
  return result;
}

console.log(filterMultiples(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(filterMultiples(5, [1, 9, 3, 10, 13, 5]));
console.log(filterMultiples(12, [2, 100, 120, 600, 12, 12]));
console.log(`========================`);

// ⚠️이슈
  // 코드 가독성 개선

const filterMultiplesV2 = (n: number, numlist: number[]): number[] => {
  return numlist.filter((numlistElement) => {
    return numlistElement % n === 0;
  })
}

console.log(filterMultiplesV2(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(filterMultiplesV2(5, [1, 9, 3, 10, 13, 5]));
console.log(filterMultiplesV2(12, [2, 100, 120, 600, 12, 12]));

// ⛑️해결
  // filter함수 사용
