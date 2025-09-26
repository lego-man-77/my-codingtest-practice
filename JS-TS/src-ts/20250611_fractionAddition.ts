// 숫자 비교하기
const compareNumbers = (num1: number, num2: number): number => {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
};
console.log(compareNumbers(1, 1));
console.log(`========================`);

// 분수의 덧셈
// 💡기약 분수: 분자와 분모를 나눌 수 있는 값이 1밖에 없는 분수
// 💡분자: numerator & 분모: denominator
// 💡몫이 1이다 🆚 나머지가 0이다 ➡️ 아예 다른 의미
// 즉, 이 값이 다른 값으로 "나누어 떨어지는지를 판단할 때"는 반드시 "나머지가 0이다"로 접근해야함
const fractionAddition = (
  numer1: number,
  denom1: number,
  numer2: number,
  denom2: number,
): number[] => {
  // 분수 덧셈
  // 1. 분모끼리 곱함 -> 더한 분수의 분모
  // 2. 각 분자와 분모를 곱해서 더함 -> 더한 분수의 분자
  let denom3: number = denom1 * denom2;
  let numer3: number = numer1 * denom2 + numer2 * denom1;

  // 큰값 & 작은값 문법
  // 💡Math.min() -> 주어진 숫자중 가장 작은 값을 반환
  // 💡Math.max() -> 주어진 숫자중 가장 큰 값을 반환
  // 💡위 메서드를 배열에 사용하기 위해서는 (...배열 변수명) 즉, 스프레드 문법으로 작성해야함
  let minNumber = 0;
  if (denom3 < numer3) {
    minNumber = denom3;
  } else {
    minNumber = numer3;
  }

  // 최대공약수로 나누기
  // 1. 두 숫자중 작은 값으로 나눠봄
  // 2. 나눠지지 않으면 작은 값에서 1씩 빼가면서 나눠질때까지 함 -> 최초로 나눠지는 수가 최대공약수
  for (let i = minNumber; i > 1; i = i - 1) {
    if (numer3 % i === 0 && denom3 % i === 0) {
      return [numer3 / i, denom3 / i];
    }
  }
  return [numer3, denom3]; // 최대공약수가 1인 경우
};

console.log(fractionAddition(1, 2, 1, 3));
console.log(`========================`);

// 분수의 덧셈 V2
const fractionAdditionV2 = (
  numer1: number,
  denom1: number,
  numer2: number,
  denom2: number,
): number[] => {
  const denom3: number = denom1 * denom2;
  const numer3: number = numer1 * denom2 + numer2 * denom1;

  // 최대공약수 공식
  // 💡유클리드 호제법
  // 1. 이전 값(b)을 저장하기 위해 temp 변수 추가
  // 2. b는 a % b 즉, 나머지
  // 3. a는 이전 b값
  // 4. a % b이 0이되는 경우(b === 0) ➡️ 이전 b값이 최대공약수(a === 최대공약수)
  const gcd = (a: number, b: number): number => {
    while (b !== 0) {
      const temp: number = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const divisor = gcd(numer3, denom3);
  return [numer3 / divisor, denom3 / divisor];
};

console.log(fractionAdditionV2(3, 5, 7, 10));
console.log(`========================`);
