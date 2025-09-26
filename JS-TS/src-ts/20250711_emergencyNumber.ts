/**
 * 진료 순서 정하기
 *
 * 문제 설명:
 * 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
 * 정수 배열 emergency가 매개변수로 주어질 때, 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항:
 * 중복된 원소는 없습니다.
 * 1 ≤ emergency의 길이 ≤ 10
 * 1 ≤ emergency의 원소 ≤ 100
 *
 * 입출력 예:
 * | [3, 76, 24]             | [3, 1, 2]        |
 * | [1, 2, 3, 4, 5, 6, 7]   | [7, 6, 5, 4, 3, 2, 1] |
 * | [30, 10, 23, 6, 100]    | [2, 4, 3, 5, 1]  |
 */
const emergencyNumber = (emergency: number[]): number[] => {
  // rank 변수 1 선언
  // 비교하는 원소(i번째)가 나머지 원소들(j번째)보다 작을 때마다 rank + 1
  // 마지막에 result에 rank를 담음
  let result: number[] = [];
  for (let i: number = 0; i < emergency.length; i = i + 1) {
    let rank: number = 1;
    for (let j: number = 0; j < emergency.length; j = j + 1) {
      if (emergency[i] < emergency[j]) {
        rank = rank + 1;
      }
    }
    result.push(rank);
  }
  return result;
};

console.log(emergencyNumber([3, 76, 24]));
console.log(emergencyNumber([1, 2, 3, 4, 5, 6, 7]));
console.log(emergencyNumber([30, 10, 23, 6, 100]));
console.log(`========================`);

const sortedEmergencyWithIdx = (emergency: number[]): number[] => {
  // 기존 배열의 원소들에 value, idx를 추가한 배열 생성
  // 객체를 담은 배열이기 때문에, number[]이 아닌 "타입 추론"에 맡김
  let arrayWithIdx = [];
  for (let i: number = 0; i < emergency.length; i = i + 1) {
    arrayWithIdx.push({ value: emergency[i], idx: i });
  }
  console.log(arrayWithIdx);

  // value, idx가 추가된 배열을 내림차순
  let sortedArrayWithIdx = arrayWithIdx.sort((a, b) => b.value - a.value);
  console.log(sortedArrayWithIdx);

  // 결과를 담을 result 배열을 new Array로 원소 길이만큼 빈 배열 생성
  // 기존에 있던 idx 값을 지정된 자리에 1 ~ sortedArrayWithIdx.length 만큼 담음
  let result: number[] = new Array(sortedArrayWithIdx.length);
  for (let i: number = 0; i < sortedArrayWithIdx.length; i = i + 1) {
    result[sortedArrayWithIdx[i].idx] = i + 1;
  }
  return result;
};

console.log(sortedEmergencyWithIdx([3, 76, 24]));
console.log(sortedEmergencyWithIdx([1, 2, 3, 4, 5, 6, 7]));
console.log(sortedEmergencyWithIdx([30, 10, 23, 6, 100]));

// array 문법
// 💡array.push({ value: arr[i], idx: i }): 배열에 “값 + 인덱스” 형태의 객체를 추가
// 배열에 요소를 뒤에 붙일 때 사용하는 push() 메서드에
// value(원본 값)와 idx(원본 위치)를 묶은 객체를 넘겨서 저장할 수 있습니다.
// 예:
//   const emergency = [30, 10, 23];
//   const paired: {value: number, idx: number}[] = [];
//   emergency.forEach((v, i) => paired.push({ value: v, idx: i }));
//   // 결과:
//   // paired = [ { value: 30, idx: 0 },
//   //            { value: 10, idx: 1 },
//   //            { value: 23, idx: 2 } ]
// push() 후에는 sort(), map() 등 다른 메서드와 연결해 가공 가능합니다.
// 예: paired.push(...).sort((a,b)=>b.value-a.value) ➡️ 내림차순

// 💡배열 선언 비교: let array = [] 🆚 let array = new Array(number)
// – []
//   길이가 0인 빈 배열을 만듭니다.
//   즉시 push() 등으로 요소 추가 가능.
//   예:
//     let a = [];
//     a.push(1,2);            // a = [1, 2]
// – new Array(n)
//   길이가 n인 배열을 만드나, 각 인덱스는 아직 "empty slot" 상태입니다.
//   map()/forEach() 같은 메서드를 바로 쓰면 동작하지 않을 수 있으므로
//     fill()로 초기화하거나 push()를 함께 써야 합니다.
//   예:
//     let b = new Array(3);  // b = [ <3 empty items> ]
//     b.fill(0);             // b = [0, 0, 0]
//     // 또는
//     let c = new Array(3);
//     c.push(1);             // c = [ <3 empty items>, 1 ] (length 4) ➡️ 빈 인덱스들은 그대로 있고, 맨 뒤에 값이 추가됨
