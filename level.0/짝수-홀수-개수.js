function solution(num_list) {
    let odd = 0; //홀
    let even = 0;  //짝
    for(let i = 0; i < num_list.length; i++){   //num_list배열의 값 전부 돌기
        if(num_list[i] % 2 === 0){              // num_list의 값들을 2로 나누어 나머지가 0인 것(짝수라는 뜻) 찾기
            even++                              // 위의 조건에 맞으면 even에 1씩 카운트
        } else{
            odd++                               // 맞지 않으면 홀수이므로 odd에 1씩 카운트
        }
    }
    
    return [even, odd]
}