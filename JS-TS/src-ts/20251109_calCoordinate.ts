/**
 * 문제 설명
 * 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며
 * 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다.
 * 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1],
 * left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다.
 * 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다.
 * 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에
 * 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
 *
 * [0, 0]은 board의 정 중앙에 위치합니다.
 * 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.
 *
 * 제한사항
 * - board은 [가로 크기, 세로 크기] 형태로 주어집니다.
 * - board의 가로 크기와 세로 크기는 홀수입니다.
 * - board의 크기를 벗어난 방향키 입력은 무시합니다.
 * - 0 ≤ keyinput의 길이 ≤ 50
 * - 1 ≤ board[0] ≤ 99
 * - 1 ≤ board[1] ≤ 99
 * - keyinput은 항상 up, down, left, right만 주어집니다.
 *
 * 입출력 예
 * keyinput                                  board     result
 * ["left", "right", "up", "right", "right"] [11, 11]  [2, 1]
 * ["down", "down", "down", "down", "down"]  [7, 9]    [0, -4]
 *
 * 입출력 예 설명
 * #1: [0, 0]에서 왼쪽으로 한 칸, 오른쪽으로 한 칸, 위로 한 칸, 오른쪽으로 두 칸 이동한 좌표는 [2, 1]입니다.
 * #2: [0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만 맵의 세로 크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.
 */
const calCoordinate = (keyInput: string[], board: number[]): number[] => {
  // 아이디어💡
  // result의 각 원소가 board를 벗어나면 안되기 때문에
  // Math.floor(board[i] - 1 / 2)를 사용해서
  // board의 최대 [가로, 세로] 길이를 구함 (절대값으로)

  // keyinput.length만큼 로직 반복
  // 주어진 방향으로 움직인 좌표값을 배열 구조 할당으로 다른 변수에 지정
  // (마지막에 board에서 벗어나는지 아닌지 체크하기 위함)

  // 따로 담아둔 연산 이후의 좌표값을 board의 가로, 세로길이와 비교해서
  // 넘어간 값이 없다면 result에 반영
  // 넘어간 값이 있다면 무시 -> 그 다음 조건 반복
  const maxGaro = Math.floor((board[0] - 1) / 2);
  const maxSero = Math.floor((board[1] - 1) / 2);

  const delta: Record<string, number[]> = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  let x = 0,
    y = 0;

  for (let i = 0; i < keyInput.length; i++) {
    const [dx, dy] = delta[keyInput[i]];
    if (Math.abs(x + dx) <= maxGaro && Math.abs(y + dy) <= maxSero) {
      x = x + dx;
      y = y + dy;
    }
  }
  return [x, y];
};

console.log(calCoordinate(["left", "right", "up", "right", "right"], [11, 11])); // [2, 1]
console.log(calCoordinate(["down", "down", "down", "down", "down"], [7, 9])); // [0, -4]
console.log(calCoordinate(["up", "down"], [0, 0])); // [0, 0]
console.log(calCoordinate(["up", "up", "right", "up"], [5, 5])); // [1, 2]
