#include <stdio.h>

// char 최대 입력 크기 (문자열 길이 + '\0')
#define LEN_INPUT 1000001

int printString(void) {
  char s1[LEN_INPUT];

  // 문자열 입력 (공백 전까지만 읽음)
  scanf("%s", s1);

  // 문자열 출력
  printf("%s\n", s1);

  // 프로그램 정상 종료
  return 0;
}

int main(void) {
  printString();
}
