function solution(numbers) {
    answer = [];                            //numbers 배열의 값들을 2배로 만든 값을 넣을 빈 배열
    for(let i = 0; i<numbers.length; i++){  //numbers 배열의 값들을 하나 하나 돌림
        answer.push(numbers[i] * 2)         //2배로 만든 값들을 answer 배열에 push로 하나씩 담아줌
    }
    return answer
}

console.log(solution([1,2,3,4,5]))