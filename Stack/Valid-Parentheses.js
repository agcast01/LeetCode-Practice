const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}
     
var isValid = function(s) {
    if(s.length % 2 === 1) return false
    if(s[0] === ')' || s[0] === ']' || s[0] === '}') return false
    if(pairs[s[s.length - 1]]) return false
    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(pairs[s[i]]) {
            stack.push(s[i])
            continue
        }
        if(s[i] === pairs[stack[stack.length - 1]]) {
            stack.pop()
        }
        else return false

    }
    if(stack.length) return false
    return true
}