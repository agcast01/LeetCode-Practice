var containsDuplicate = function (nums) {
    let exists = new Set()
    for (let num of nums) {
        if (exists.has(num)) return true
        exists.add(num)
    }
    return false
};