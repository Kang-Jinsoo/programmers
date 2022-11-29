//두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.


function solution(s1, s2) {
    let same = 0;
    for(let i = 0; i < s1.length; i++){             //s1 배열과 s2배열을 하나하나 비교하기 위해 이중for문
        for(let j = 0; j < s2.length; j++){         
            if(s1[i] == s2[j]){                     //s1 i번째와 s2 j번째를 비교해 같으면 same에 1씩 카운트
                same++
            }
        }
    }
    return same
}