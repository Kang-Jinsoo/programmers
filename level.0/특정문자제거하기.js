//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
    answer = []                                 //결과값을 담기 위한 빈배열
    string = my_string.split('')                
    for(let i = 0; i < string.length; i++){     
        if(string[i] !== letter){               
            answer.push(string[i])
        }
    }
    return answer.join('')
}

console.log(solution('manchester', 'e'))

//splice 매서드를 사용해 letter에 담긴 문자를 삭제하고 싶었지만 splice는 최초 한 문자만 치환해주기 때문에 다른 방법을 생각해봄
//my_string을 배열로 만들어 for문으로 한 문자 한 문자 모두 돌며 letter에 해당하는 문자가 아니면 push로 빈배열에 넣어주고 join을 사용해 다시 문자열로 바꿈