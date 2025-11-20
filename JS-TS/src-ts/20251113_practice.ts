// 최빈값 구하기
const solution24 = (array: number[]): number => {
  const sortedArray = array.sort((a, b) => a - b);
    
    let currentNum = 1000;
    let choibinNum = 1000;
    let currentNumCount = 0;
    let choibinNumCount = 0;
    let isDupChoibinNum = false;
    
    for(let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i] === currentNum) {
            currentNumCount = currentNumCount + 1
        } else {
            currentNum = sortedArray[i];
            currentNumCount = 1;
        }
        
        if(currentNumCount === choibinNumCount && currentNum !== choibinNum) {
            isDupChoibinNum = true;
        }
        
        if(currentNumCount > choibinNumCount) {
            isDupChoibinNum = false;
            choibinNumCount = choibinNumCount + 1;
            choibinNum = sortedArray[i];
            continue;
        }   
    }
    if(isDupChoibinNum === true) {
        return -1;
    } else {
        return choibinNum;    
    }
}

console.log(solution24([1, 2, 3, 3, 3, 4])); // 3
console.log(solution24([1, 1, 2, 2])); // -1
console.log(solution24([1])); // 1
