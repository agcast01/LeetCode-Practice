var isPalindrome = function(s) {
    let validLetters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    function checkAlpha(character) {
        if (validLetters.includes(character)) {
            return character
        }
    }

    let arr = s.toLowerCase().split('').filter(char => checkAlpha(char))
    
    return arr.join() == arr.reverse().join()
};