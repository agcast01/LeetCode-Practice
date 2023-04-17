var topKFrequent = function(nums, k) {
    let count = {}
    for(let num of nums){
        if(!count[num]) count[num] = 1
        else count[num]++
    }
    return Object.keys(count).sort(function sorter(a, b){
    return count[a] - count[b]
}).slice(-k)
};