// 분수 2개의 합을 기약분수로 바꾸고, 각 분자와 분모를 배열로 반환
// 유클리드 호제법 사용연습
const solution = (
  denom1: number,
  numer1: number,
  denom2: number,
  numer2: number,
): number[] => {
  const denom3: number = denom1 * denom2;
  const numer3: number = denom1 * numer2 + denom2 * numer1;

  const gcd = (a: number, b: number): number => {
    while (b !== 0) {
      let c: number = b;
      b = a % b;
      a = c;
    }
    return a;
  };
  const i: number = gcd(denom3, numer3);
  console.log(denom3, numer3, i);
  return [numer3 / i, denom3 / i];
};

console.log(solution(4, 5, 2, 3));
console.log(`========================`);

// 주어지는 배열을 내림차순하고 정렬된 배열의 중앙값 구하기
// 주어지는 배열의 원소 범위 = -1000 < 원소 < 1000
const solution2 = (array: number[]): number[] => {
  // 가장 작은 값 찾기
  // 가장 작은 값을 새로운 배열에 담기
  // 기존 배열에서 가장 작은 값 뺴기 or 해당 원소를 범위 밖의 값으로 바꾸기
  // 위 과정 반복

  const result: number[] = [];
  let i: number = 0;

  while (i < array.length) {
    let minNumber: number = 1000;

    for (let i: number = 0; i < array.length; i = i + 1) {
      if (array[i] < minNumber) {
        minNumber = array[i];
      }
    }
    result.push(minNumber);

    for (let i: number = 0; i < array.length; i = i + 1) {
      if (array[i] === minNumber) {
        array[i] = 1000;
      }
    }
    i = i + 1;
    console.log(array);
    console.log(result);
  }
  console.log(result[Math.floor(result.length / 2)]);
  return result;
};

console.log(solution2([5, 10, -20]));
