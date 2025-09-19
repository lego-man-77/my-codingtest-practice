/**
두 수의 합 구하기
문제 설명
정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
-50,000 ≤ num1 ≤ 50,000
-50,000 ≤ num2 ≤ 50,000

입출력 예
num1    num2    result
2       3       5
100     2       102

입출력 예 설명
입출력 예 #1
num1이 2이고 num2가 3이므로 2 + 3 = 5를 return합니다.

입출력 예 #2
num1이 100이고 num2가 2이므로 100 + 2 = 102를 return합니다.
*/
#include <stdio.h>    // 표준 입출력 함수 사용을 위한 헤더파일

int additionNumber(int num1, int num2) {
  printf("%d + %d = %d\n", num1, num2, num1 + num2);
  return num1 + num2;
}

int main(void) {
  additionNumber(10, 20);
}
