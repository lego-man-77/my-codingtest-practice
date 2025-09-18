/**
 * 문제 설명
 * 머슥이는 추운 날에도 아이스 아메리카노만 마십니다.
 * 아이스 아메리카노는 한 잔에 5,500원입니다.
 * 머슥이가 가지고 있는 돈 money가 매개변수로 주어질 때,
 * 머슥이가 최대로 마실 수 있는 아메리카노의 잔 수와
 * 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 0 < money ≤ 1,000,000
 *
 * 입출력 예
 * 1) money = 5,500 → [1, 0]
 * 2) money = 15,000 → [2, 4,000]
 */
const calIceCoffee = (money: number): number[] => {
  // money를 5500으로 나눈 몫 = 마실 수 있는 커피 수
  // money를 5500으로 나눈 나머지 = 남는 돈
  const iceCoffeeCups: number = Math.floor(money / 5500);
  const change: number = money % 5500;

  return [iceCoffeeCups, change];
};

console.log(calIceCoffee(11500));
