//문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.


function solution(my_string) {
    let answer = [];
    let arr = my_string.split('')           
    for(let i = 0; i < arr.length; i++){    
        if(isNaN(arr[i]) == false){         
            answer.push(Number(arr[i]))    // arr의 i번째 값을 숫자형으로 바꿔 빈배열에 push
        }
    }
    return answer.sort((a,b) => a-b)
}

console.log(solution('맨체스터1 유나이티드2'))