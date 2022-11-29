function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2+1)      // slice 매서드는 배열의 첫번째 인자 전까지 두번째 인자부터의 값을 날려버린다
}

console.log(solution([1,2,3,4,5],1,3))