var evalRPN = function(tokens) {
    const operators = '+-*/'
    let stack = [];
    for(let i = 0; i < tokens.length; i++) {
        if (operators.includes(tokens[i])) {
            let second = stack.pop()
            let first = stack.pop()
            let res
            switch (tokens[i]){
                case '+':
                    res = first + second
                    break
                case '-':
                    res = first - second
                    break
                case '*':
                    res = first * second
                    break
                case '/':
                    res = first / second > 0 ? Math.floor(first / second) : Math.ceil(first / second)
                    break
                default:
                    break
            }
            stack.push(res)
            
        } else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack[0]
};