// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

function solution(n, t) {
    let answer = 0;
    for(let i = 1; i <= t; i++){
        answer = n *= 2
    }
    return answer
}


console.log(solution(7, 3))


// 세균은 1시간에 2배

// 처음 n마리 t시간 후 = 
// ex) n = 2  t = 3  = 16           
// ex) 2마리 1시간 후 = 4마리          
// ex) 2마리 2시간 후 = 8마리          
// ex) 2마리 3시간 후 = 16마리         

// ex) n = 7  t = 3  = 56      n * 2  
// ex) 7마리 1시간 후 = 14마리     7 * 2 = 14      
// ex) 7마리 2시간 후 = 28마리     14 * 2 = 28
// ex) 7마리 3시간 후 = 56마리     28 * 2 = 56