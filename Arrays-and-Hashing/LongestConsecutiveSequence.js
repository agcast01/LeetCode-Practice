var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    function compareNumbers(a, b) {
  return a - b;
}
    let sorted = nums.map(str => Number(str)).sort(compareNumbers)
    let max = 1;
    let curr = 1;
    for(let i = 1; i < sorted.length; i++) {
        if(sorted[i] === sorted[i - 1]) continue
        if(sorted[i] === sorted[i - 1] + 1) curr++;
        else curr = 1
        if(curr > max) max = curr;
    }
    return max
};