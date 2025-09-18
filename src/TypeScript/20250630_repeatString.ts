/**
 * 문제 설명
 * 문자열 str과 정수 n이 매개변수로 주어집니다.
 * str이 n번 반복된 문자열을 return하도록 solution 함수를 작성해 주세요.
 *
 * 제한사항
 * 1 ≤ str의 길이 ≤ 10
 * 1 ≤ n ≤ 5
 *
 * 입출력 예
 * | "string" | 5 | "stringstringstringstringstring"         |
 */
const repeatString = (str: string, n: number): string => {
  let result: string = ``;
  for (let i: number = 1; i <= n; i = i + 1) {
    result = result + str;
  }
  return result;
};

console.log(repeatString(`string`, 5));
console.log(`========================`);

const repeatStringV2 = (str: string, n: number): string[] => {
  return new Array(n).fill(str);
};

console.log(repeatStringV2(`string`, 5));
console.log(`========================`);

const repeatStringV3 = (str: string, n: number): string[] => {
  return Array.from({ length: n }, (_, i) => str);
};

console.log(repeatStringV3(`string`, 5));

// 배열 문법 new Array().fill() & Array.from({length: n}, (value, index) => 콜백)
// 💡new Array(n).fill(value)
// 길이가 n인 “빈 슬롯” 배열을 만들고, 모든 슬롯을 value로 채웁니다.
// 얕은 복사 방식이므로 참조형 value일 경우 동일 객체를 가리킵니다.
//
// 예1) 숫자 채우기
// const zeros = new Array(5).fill(0);
// zeros -> [0, 0, 0, 0, 0]
//
// 예2) 객체 채우기
// 객체의 값을 변경하면 모든 객체의 값이 바뀜(같은 객체를 참조하고 있기 때문)
// const objs = new Array(3).fill({ x: 1, y: 2 });
// objs[0].x = 99;
// console.log(objs);
// [{ x: 99, y: 2 }, { x: 99, y: 2 }, { x: 99, y: 2 }]

// 💡Array.from({length: n}, (value, index) => 콜백)
// “길이 n 짜리” 배열을 만들고, 두 번째 인자로 받은 콜백(각 요소에 적용할 함수)으로 각 요소를 생성 및 변경합니다.
// 첫 번째 인자 value는 주어진 배열을 사용(사용하지 않을 시 "_" 표시)
// {length: n}인 경우, value는 항상 undefined
// iterable(배열 & 문자열)인 경우, 원본 요소값이 value에 들어감
// 두 번째 인자 index는 0부터 n-1만큼 혹은 주어진 배열의 length-1만큼 반복
//
// 예1) 인덱스 기반 값 생성
// const evens = Array.from({length: 5}, (_, i) => i * 2);
// evens -> [0, 2, 4, 6, 8]
//
// 예2) 각기 다른 새 객체 생성
// const points = Array.from({length: 3}, (_, i) => ({ id: i }));
// points -> [{ id: 0 }, { id: 1 }, { id: 2 }]
//
// 예3) 기존 배열의 원소에 2를 곱한 새 배열 생성
// 주어진 배열이 있다면 {length: n}과 같이 따로 명시하지 않아도, 알아서 그 배열의 length만큼 반복함
// const nums = [1, 2, 3, 4];
// const doubled = Array.from(nums, (value) => value * 2);
// doubled -> [2, 4, 6, 8]
