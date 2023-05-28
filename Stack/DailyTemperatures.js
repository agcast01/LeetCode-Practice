var dailyTemperatures = function(temperatures) {
    let answer = new Array(temperatures.length)
    answer.fill(0)
    let stack = []
    for(let i = 0; i < temperatures.length; i++) {
        let t = temperatures[i]
        while (stack.length && t > stack[stack.length-1][0]) {
            let [stackT, stackInd] = stack.pop()
            answer[stackInd] = i - stackInd      
        }
        stack.push([t, i])
    }
    return answer
};