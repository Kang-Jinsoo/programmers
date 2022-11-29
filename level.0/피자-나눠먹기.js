//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다.
//피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function solution(n) {
    const answer = Math.ceil(n/7)   // n 나누기 7 의 값을 올림  ex) 6명이 먹으면 6 나누기 7의 값 0.xxx를 올림을 하면 1판, 15명이 먹으면 15 나누기 7의 값인 2.xxx를 또 올림을 해 3판
    return answer
    }