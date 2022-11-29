//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
    var answer = [];                            //my_string을 배열로 만들어 n번만큼을 반복한 값을 담을 빈배열
    let example = my_string.split('')           //my_string을 배열로 만듦
    for(let i = 0; i < example.length; i++){    
        answer.push(example[i].repeat(n))       //배열 my_string에 담긴 배열값들을 각각 돌며 n번씩 반복한 값을 answer 배열에 하나씩 push
    }
    return answer.join('')                      //배열을 다시 문자열로 만들기 위함
}

console.log(solution('manchester',3))