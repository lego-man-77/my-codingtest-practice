// 나중에 풀기
// https://www.youtube.com/watch?v=jhCACg49ZvI&list=LL&index=5

// 이것도 나중에 풀어보기
// https://school.programmers.co.kr/learn/courses/30/lessons/389478

// /**
//  * 문제 설명
//  * 선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.
//  * 예를 들어 선행 스킬 순서가 “스파크 → 라이튼닝 볼트 → 썬더”일 때,
//  * 썬더를 배우려면 먼저 라이튼닝 볼트를 배워야 하고,
//  * 라이튼닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.
//  *
//  * 위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다.
//  * 따라서 “스파크 → 힐링 → 라이튼닝 볼트 → 썬더”와 같은 스킬트리는 가능하지만,
//  * “썬더 → 스파크”나 “라이튼닝 볼트 → 스파크 → 힐링 → 썬더”와 같은 스킬트리는 불가능합니다.
//  *
//  * 선행 스킬 순서 skill과 유저들이 만든 스킬트리를 담은 배열 skill_trees가 매개변수로 주어질 때,
//  * 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.
//  *
//  * 제한 조건
//  * - 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
//  * - 스킬 순서와 스킬트리는 문자열로 표기합니다.
//  *   예를 들어, C → B → D 라면 "CBD"로 표기합니다.
//  * - 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
//  * - skill_trees는 길이 1 이상 20 이하인 배열입니다.
//  * - skill_trees의 원소는 스킬을 나타내는 문자열입니다.
//  *   skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
//  *
//  * 입출력 예
//  * skill:       "CBD"
//  * skill_trees: ["BACDE", "CBADF", "AECBF", "BDA"]
//  * return:      2
//  */
// const skillTree = (skill: string, skillTrees: string[]): number => {
//   let answer: number = -1;
//
//   // 주어진 skillTrees의 원소 1개에 skill이 있는지 찾고,
//   // 첫번째 스킬이 있다면 해당 인덱스 이후부터 skill의 다음 원소를 찾고,
//   // 두번째 스킬도 있다면 해당 인덱스 이후부터 또 skill을 찾아서,
//   // 모두 만족하면 answer + 1 하면 되지 않나?
//
//   for (let i: number = 0; i < skillTrees.length; i = i + 1 ) {
//     let lastIndex: number = -1;
//     const skillTreeLength: number = skillTrees[i].length;
//     for (let j: number = 0; j < skill.length; j = j + 1) {
//       for (let k: number = lastIndex; k < skillTreeLength; k = k + 1) {
//         if(skill[j] === skill[i][k]) {
//           lastIndex = k;
//           break;
//         }
//       }
//     }
//   }
//   return answer;
// };
//
// console.log(skillTree("CBD", ["BACDE", "CBADF", "AECBF", "BDA"]));
//
//
//
//
//
//
//
//
//
//
//
//
