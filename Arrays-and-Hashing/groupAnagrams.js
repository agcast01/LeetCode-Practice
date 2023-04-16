var groupAnagrams = function(strs) {
    let words = {}
    for(let str of strs) {
        let base = str.split('').sort().join('')
        if(words[base]) words[base].push(str)
        else words[base] = [str] 
    }
    return Object.values(words)
};