var isAnagram = function(s, t) {
    let count = {}
    for(let i = 0; i < s.length; i++) {
        if(count[s[i]]) count[s[i]]++
        else count[s[i]] = 1
    }
    for(let i = 0; i < t.length; i++) {
        if(count[t[i]]) count[t[i]]--
        else return false
    }
    return !Boolean(Object.values(count).filter(num => num !== 0).length)

};