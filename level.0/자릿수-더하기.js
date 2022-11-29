//정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요



function solution(n) {
    let hint = String(n);
    let hint2 = hint.split('');
    let answer = 0;
    for(let i = 0; i <= hint2.length; i++){
        answer += i
    }
    return answer
}

console.log(solution(960824))