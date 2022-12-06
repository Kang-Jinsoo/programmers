//문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.


function solution(my_string) {
    var answer = [];
    let str = my_string.split('')
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            answer.push(str[i].toLowerCase())
        }else if(str[i] !== str[i].toUpperCase()){
            answer.push(str[i].toUpperCase())
        }
    }
    return answer.join('')
}


console.log(solution('Manchester United'))