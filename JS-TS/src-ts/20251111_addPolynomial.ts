/*
다항식 더하기
제출 내역

문제 설명
한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

제한사항
0 < polynomial에 있는 수 < 100
polynomial에 변수는 `x`만 존재합니다.
polynomial은 양의 정수, 공백, ‘x’, ‘+`로 이루어져 있습니다.
항과 연산기호 사이에는 항상 공백이 존재합니다.
공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.
" + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.
0으로 시작하는 수는 없습니다.
문자와 숫자 사이의 곱하기는 생략합니다.
polynomial에는 일차 항과 상수항만 존재합니다.
계수 1은 생략합니다.
결괏값에 상수항은 마지막에 둡니다.
0 < polynomial의 길이 < 50

입출력 예
polynomial	result
"3x + 7 + x"	"4x + 7"
"x + x + x"	"3x"

입출력 예 설명
입출력 예 #1
"3x + 7 + x"에서 동류항끼리 더하면 "4x + 7"입니다.
입출력 예 #2
"x + x + x"에서 동류항끼리 더하면 "3x"입니다.
*/
const addPolynomial = (polynomial: string): string => {
  // 아이디어💡
  // ` + `를 기준으로 주어진 배열 split
  // x앞 숫자, 일반 숫자를 담을 변수 정의
  const polynomialArray = polynomial.split(` + `)
  let numberWithX = 0;
  let constant = 0;

  // split한 배열을 순차적으로 돌며,
  // x가 없는 원소는 "일반 숫자" 변수에 더함
  // x가 있는 원소는 "x앞 숫자" 변수에 더함
  // (여기서 편의성을 위해 x가 있는 원소를 `x`로 다시 split함
  // -> [숫자, 공백] 형태의 배열로 반환되기 때문에 [0]번째 원소가 x앞 숫자가 됨)
  for(let i = 0; i < polynomialArray.length; i++) {
    const item = polynomialArray[i];
    if(item[item.length - 1] !== `x`) {
      constant = constant + Number(polynomialArray[i]);
    } else {
      const splitWithX = polynomialArray[i].split(`x`)[0];
      if(splitWithX === ``) {
        numberWithX = numberWithX + 1;
      } else {
        numberWithX = numberWithX + Number(splitWithX);
      }
    }
  }

  // 다항식에 x가 없는 경우라면 "일반 숫자" 만 반환
  // 다항식에 일바 숫자가 없는 경우라면 "x앞 숫자" 만 반환
  let answer = ``;

  // 다항식에 "x"가 1개만 있는 경우 (예 ➡️ "x")
  if(numberWithX === 1 && constant === 0) {
    answer = `x`;
  
  // 다항식에 "일반 숫자" 가 없고, "x" 만 있는 경우 (예 ➡️ "x + x + x")
  } else if(numberWithX !== 0 && constant === 0) {
    answer = String(numberWithX) + `x`;

  // 다항식에 "일반 숫자" 는 있지만, "x" 가 1개 있는 경우 (예 ➡️ "1 + x")
  } else if(numberWithX === 1) {
    answer = `x` + ` + ` + String(constant);
  
  // 다항식에 "일반 숫자" 만 있는 경우
  } else if (numberWithX === 0 && constant !== 0) {
    answer = String(constant);

  // ["0", ""," "] 과 같은 0이나 공백이 들어올 경우
  } else if(numberWithX === 0 && constant === 0) {
    answer = `0이나 공백값이 입력되었습니다.`;
  }
  
  // 일반적인 다항식인 경우
  else {
    answer = String(numberWithX) + `x` + ` + ` + String(constant);
  }

  return answer;
}

console.log(addPolynomial("3x + 7 + x")); // "4x + 7"
console.log(addPolynomial("x + x + x"));  // "3x"
console.log(addPolynomial("x"));  // "x"
console.log(addPolynomial("10x"));  // "10x"
console.log(addPolynomial("1 + x"));  // "1 + x"
console.log(addPolynomial("5"));  // "5"
console.log(addPolynomial("0"));  // "0"
console.log(addPolynomial(""));  // ""
console.log(addPolynomial(" "));  // " "
