var removeDuplicates = function(nums) {
    l = 1

    for(let r = 1; r < nums.length; r++) {
        if (nums[r] != nums[r - 1]) {
            nums[l] = nums[r]
            l = l + 1
        }
    }
    return l
};