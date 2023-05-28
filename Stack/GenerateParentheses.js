var generateParenthesis = function(n) {
    function count(str) {
        let open = 0, close = 0;
        for(let i= 0; i < str.length; i++) {
            if(str[i] === '(') {
                open++
            } else close++
        }
        return [open, close]
    }
    let stack = ['(']
    let res = []
    while (stack.length) {
        let curr = stack.pop()
        let [open, close] = count(curr)
        if(curr.length === n * 2) res.push(curr)
        if(open < n) {
            stack.push(curr + '(')
        }
        if(close < open) {
            stack.push(curr + ')')
        }
    }
    return res
};