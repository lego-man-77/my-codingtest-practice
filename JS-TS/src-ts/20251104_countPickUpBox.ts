/**
문제 설명
1 ~ n의 번호가 있는 택배 상자가 창고에 있습니다. 당신은 택배 상자들을 다음과 같이 정리했습니다.

왼쪽에서 오른쪽으로 가면서 1번 상자부터 번호 순서대로 택배 상자를 한 개씩 놓습니다. 
가로로 택배 상자를 w개 놓았다면 이번에는 오른쪽에서 왼쪽으로 가면서 그 위층에 택배 상자를 한 개씩 놓습니다. 
그 층에 상자를 w개 놓아 가장 왼쪽으로 돌아왔다면 또다시 왼쪽에서 오른쪽으로 가면서 그 위층에 상자를 놓습니다. 
이러한 방식으로 n개의 택배 상자를 모두 놓을 때까지 한 층에 w개씩 상자를 쌓습니다.

예시:
w = 6일 때 택배 상자 22개를 쌓으면 아래와 같이 배치됩니다.

22 21 20 19
13 14 15 16 17 18
12 11 10  9  8  7
 1  2  3  4  5  6

다음 날 손님이 자신의 택배 상자 번호를 말하면 해당 택배 상자를 꺼내야 합니다.
택배 상자 A를 꺼내려면 먼저 A 위에 있는 다른 모든 상자를 꺼내야 합니다. 
예를 들어, 위 그림에서 8번 상자를 꺼내려면 먼저 20번, 17번 상자를 꺼내야 합니다.

따라서 꺼내려는 상자 번호가 주어졌을 때,
꺼내려는 상자를 포함해 총 몇 개의 택배 상자를 꺼내야 하는지를 구해야 합니다.

매개변수:
- n : 창고에 있는 택배 상자의 개수 (2 ≤ n ≤ 100)
- w : 가로로 놓는 상자의 개수 (1 ≤ w ≤ 10)
- num : 꺼내려는 택배 상자의 번호 (1 ≤ num ≤ n)

리턴값:
- 꺼내야 하는 상자의 총 개수를 return 합니다.

제한사항
2 ≤ n ≤ 100
1 ≤ w ≤ 10
1 ≤ num ≤ n

테스트 케이스 구성 안내
그룹	총점	추가 제한 사항
#1	10%	w = 1
#2	20%	n은 w의 배수입니다.
#3	70%	추가 제한 사항 없음

입출력 예
n	  w	  num	 result
22	6	  8	   3
13	3	  6	   4

입출력 예 설명
입출력 예 #1
- 8번 상자를 꺼내려면 20번, 17번 상자를 먼저 꺼내야 합니다.
- 따라서 꺼내야 하는 상자의 총개수는 3개입니다.

입출력 예 #2
- 6번 상자를 꺼내려면 먼저 13, 12, 7번 상자를 꺼내야 합니다.
- 따라서 4를 return 합니다.
*/
const countPickUpBox = (n: number, w: number, num: number): number => {
  // 아이디어💡
  // 주어진 상자가 위치한 줄과 해당 줄의 몇번째에 위치하는지 구함
  // 주어진 상자가 위치한 줄: "Math.floor(num / w) + 1"
  // 해당 줄의 몇 번째에 위치하는지: "num % w"
  // 그 위 상자번호가 존재하는지 판단
  // 있다면 "꺼내야 할 상자갯수 + 1"
  // 위 과정을 반복
  // 없다면 그대로 "꺼내야 할 상자갯수 반환"
  let allBoxes = [];
  let result = 1;

  for (let i = 1; i <= n; i++) {
    allBoxes.push(i);
  }

  for (let i = 1; i <= Math.floor(n / w) + 1; i++) {
    let boxNum = num % w;

    if (boxNum === 0) {
      boxNum = w;
    }

    if (allBoxes.includes(num + (w * 2 - (boxNum * 2 - 1)))) {
      console.log(`현재박스번호: ${num}`);
      result = result + 1;
      num = num + (w * 2 - (boxNum - 1) - boxNum);
      console.log(`그 위 박스번호: ${num}`);
      console.log(`총 빼야할 박스갯수: ${result}개`);
      console.log(`========================`);
      continue;
    }

    if (!allBoxes.includes(num + (w * 2 - (boxNum * 2 - 1)))) {
      console.log(`존재하지않는 박스번호: ${num + (w * 2 - (boxNum * 2 - 1))}`);
      console.log(`총 빼야할 박스갯수: ${result}개`);
      return result;
    }
  }
  return result;
};

console.log(countPickUpBox(22, 6, 8)); // 4
console.log(countPickUpBox(13, 3, 6)); // 4
console.log(countPickUpBox(5, 1, 2)); // 4
console.log(countPickUpBox(16, 4, 7)); // 3
console.log(countPickUpBox(16, 4, 1)); // 4
console.log(countPickUpBox(14, 4, 5)); // 3
