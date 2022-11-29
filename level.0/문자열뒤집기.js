
function solution(my_string) {
    return my_string.split('').reverse().join('');  // split 매소드로 문자열을 하나 하나 나눠 배열로 만들고, reverse로 배열 뒤집기, join으로 다시 배열을 문자열로 합치기
}

console.log(solution('맨체스터유나이티드'))