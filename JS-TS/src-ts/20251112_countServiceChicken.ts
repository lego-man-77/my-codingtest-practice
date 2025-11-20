/**
 * 문제 설명
 * 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
 * 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고,
 * 서비스 치킨에도 쿠폰이 발급됩니다.
 * 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때
 * 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * - chicken은 정수입니다.
 * - 0 ≤ chicken ≤ 1,000,000
 *
 * 입출력 예
 * chicken   result
 * 100       11
 * 1,081     120
 *
 * 입출력 예 설명
 * 입출력 예 #1
 * - 100마리를 주문하면 쿠폰이 100장 발급되므로 서비스 치킨 10마리를 주문할 수 있습니다.
 * - 10마리를 주문하면 쿠폰이 10장 발급되므로 서비스 치킨 1마리를 주문할 수 있습니다.
 * - 따라서 10 + 1 = 11 을 return합니다.
 *
 * 입출력 예 #2
 * - 1081마리를 주문하면 쿠폰이 1081장 발급되므로 서비스 치킨 108마리를 주문할 수 있습니다.
 *   그리고 쿠폰이 1장 남습니다.
 * - 108마리를 주문하면 쿠폰이 108장 발급되므로 서비스 치킨 10마리를 주문할 수 있습니다.
 *   그리고 쿠폰이 8장 남습니다.
 * - 10마리를 주문하면 쿠폰이 10장 발급되므로 서비스 치킨 1마리를 주문할 수 있습니다.
 * - 1마리를 주문하면 쿠폰이 1장 발급됩니다.
 * - 가지고 있는 쿠폰이 총 10장이므로 서비스 치킨 1마리를 추가로 주문할 수 있습니다.
 * - 따라서 108 + 10 + 1 + 1 = 120 을 return합니다.
 */
const countServiceChicken = (chicken: number): number => {
  /* 아이디어💡  
  
  - 반복의 기준
    가지고 있는 치킨 개수(chicken)와 쿠폰 개수(coupon)를 합쳤을 때,
    10장 이상이면 아직 서비스 치킨을 받을 수 있음
    따라서 while 조건은 `chicken + coupon >= 10`
  
  - 반복문 안에서의 흐름
    1) 현재 가지고 있는 치킨만큼 쿠폰 적립
    치킨 1마리당 쿠폰 1장이므로: `coupon = coupon = chicken`
    
    2) 적립된 쿠폰으로 서비스 치킨 교환
    이번에 받을 수 있는 서비스 치킨 수: `serviceChicken = Math.floor(coupon / 10)`
    
    3) 쿠폰 사용 후 남은 쿠폰만 유지
    10장 단위로 교환했으니 나머지만 남김: `coupon = coupon % 10`
    
    4) 받은 서비스 치킨 수를 결과에 누적
    `result = result + serviceChicken`
    
    5) 새로 받은 서비스 치킨이 다음 턴의 "치킨"이 됨
    서비스 치킨도 쿠폰을 주기 때문에: `chicken = serviceChicken`
  
  반복 종료 시점
  - 더 이상 쿠폰으로 치킨을 받을 수 없는 순간,
    즉 `chicken + coupon < 10` 이 되면 반복을 멈추고 지금까지 누적
  */
  let serviceChicken = 0;
  let coupon = 0;
  let result = 0;
  while (chicken + coupon >= 10) {
    coupon = coupon + chicken;

    serviceChicken = Math.floor(coupon / 10);
    coupon = coupon % 10;
    console.log(`서비스치킨: ${serviceChicken}, 쿠폰: ${coupon}`);

    result = result + serviceChicken;
    chicken = serviceChicken;
  }
  console.log(`최종결과: ${result}`);
  return result;
};

console.log(countServiceChicken(100)); // 11
console.log(countServiceChicken(1081)); // 120
