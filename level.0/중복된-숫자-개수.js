function solution(array, n) {
    const answer = [];                          //  for문을 돌려 조건에 맞는 값을 넣을 빈 배열은 만들어줌
    for(let i = 0; i < array.length; i++){      //  array 배열 안의 값들을 모두 체크하기 위해 for문 돌림
        if(array[i] === n){                     //  조건 설정
            answer.push(i)                      //  조건에 맞는 index값을 만들어둔 빈배열에 하나씩 넣어줌
        }
    }
    return answer.length                        // 조건에 맞는 index값을 넣은 배열의 길이만큼을 리턴
}