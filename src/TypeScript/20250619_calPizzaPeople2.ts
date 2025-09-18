/**
 * 문제 설명
 * 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
 * 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
 * n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면
 * 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해 보세요.
 *
 * 제한사항
 * 1 <= n <= 100
 *
 * 입출력 예
 * | n   | result |
 * |-----|--------|
 * | 6   | 1      |
 * | 10  | 5      |
 * | 4   | 2      |
 */
const calPizzaPeople2 = (n: number): number => {
  let result: number = 0;

  // n명이 주어지면, 1명 ~ n명까지 pizza * 6으로 나누어보다가 맨 처음 나머지가 0인 수가 필요한 pizza 갯수
  for (let pizza: number = 1; pizza <= n; pizza = pizza + 1) {
    if ((pizza * 6) % n === 0) {
      result = pizza;
      break;
    }
  }
  return result;
};

console.log(calPizzaPeople2(5)); // 5
console.log(calPizzaPeople2(6)); // 1
console.log(calPizzaPeople2(12)); // 2
console.log(calPizzaPeople2(13)); // 13
