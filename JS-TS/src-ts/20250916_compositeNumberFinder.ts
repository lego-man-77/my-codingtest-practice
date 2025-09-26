/**
 * 문제 설명
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 * 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 1 ≤ n ≤ 100
 *
 * 입출력 예
 * n    result
 * 10   5
 * 15   8
 *
 * 입출력 예 설명
 * 입출력 예 #1
 * 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
 *
 * 입출력 예 #2
 * 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.
 */
const compositeNumberFinder = (n: number): number => {
  let result = 0;
  for (let i = 4; i <= n; i = i + 1) {
    for (let j = 2; j < i; j = j + 1) {
      if (i % j === 0) {
        result = result + 1;
        break;
      }
    }
  }
  return result;
};

console.log(compositeNumberFinder(10));
console.log(compositeNumberFinder(15));
console.log(`========================`);

/**
 * GPT 코드
 * 합성수 개수 구하기 3가지 버전 성능 비교
 * - originalCount: 모든 약수를 끝까지 센다 (비효율)
 * - earlyBreakCount: 약수 발견 시 즉시 중단
 * - sqrtCount: j를 sqrt(i)까지만 검사 + 약수 발견 시 즉시 중단
 *
 * 실행 방법(예: ts-node):
 * ts-node benchmark.ts
 */
import { performance } from "perf_hooks";

// ---------- 구현 3종 ----------
export function originalCount(n: number): number {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let divisorCount = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisorCount++;
    }
    if (divisorCount >= 3) count++;
  }
  return count;
}

export function earlyBreakCount(n: number): number {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        result++;
        break;
      }
    }
  }
  return result;
}

export function sqrtCount(n: number): number {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    const limit = Math.floor(Math.sqrt(i));
    for (let j = 2; j <= limit; j++) {
      if (i % j === 0) {
        result++;
        break;
      }
    }
  }
  return result;
}

// ---------- 정확도 검증 ----------
function assertSameCounts() {
  const testNs = [10, 15, 37, 50, 100];
  for (const n of testNs) {
    const a = originalCount(n);
    const b = earlyBreakCount(n);
    const c = sqrtCount(n);
    if (a !== b || b !== c) {
      throw new Error(
        `불일치 발견: n=${n}, original=${a}, earlyBreak=${b}, sqrt=${c}`,
      );
    }
  }
}

// ---------- 벤치마크 유틸 ----------
type Candidate = { name: string; fn: (n: number) => number };

function bench(
  { name, fn }: Candidate,
  n: number,
  repeats: number,
): { name: string; avgMs: number; lastResult: number } {
  // 워밍업
  fn(n);

  let totalMs = 0;
  let last = 0;
  for (let r = 0; r < repeats; r++) {
    const t0 = performance.now();
    last = fn(n);
    const t1 = performance.now();
    totalMs += t1 - t0;
  }
  return { name, avgMs: totalMs / repeats, lastResult: last };
}

function format(ms: number) {
  return `${ms.toFixed(3)} ms`;
}

// ---------- 엔트리 포인트 ----------
(function main() {
  // 벤치마크 파라미터 (필요시 조절)
  // - n을 키울수록 차이가 더 분명해지지만, original은 급격히 느려집니다.
  const N = 5000; // 권장: 3,000 ~ 10,000 사이
  const REPEATS = 5; // 평균을 위해 여러 번 실행

  // 정확도 체크
  assertSameCounts();

  const candidates: Candidate[] = [
    { name: "originalCount (모든 약수 카운트)", fn: originalCount },
    { name: "earlyBreakCount (약수 발견시 중단)", fn: earlyBreakCount },
    { name: "sqrtCount (√i까지만 검사 + 중단)", fn: sqrtCount },
  ];

  const results = candidates.map((c) => bench(c, N, REPEATS));
  // 결과 정렬(빠른 순)
  results.sort((a, b) => a.avgMs - b.avgMs);

  console.log(`\n=== 합성수 개수 성능 비교 (n=${N}, repeats=${REPEATS}) ===`);
  for (const r of results) {
    console.log(
      `${r.name.padEnd(32)} -> 평균 ${format(r.avgMs)}  (result=${r.lastResult})`,
    );
  }

  console.log("\n예상 순위: sqrtCount ≲ earlyBreakCount ≪ originalCount");
})();
