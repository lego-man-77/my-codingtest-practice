const arrayDouble = (array: number[]): number[] => {
  const answer: number[] = [];
  for (let i = 0; i < array.length; i = i + 1) {
    // i번째 원소에 연산을 적용하고 변수에 담음
    const doubledElement = array[i] * 2;

    // 💡push: 각 원소를 새로운 배열에 담음
    answer.push(doubledElement);
  }
  return answer;
};

console.log(arrayDouble([1, 2, 3, 4, 5]));
