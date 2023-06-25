class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        l = 0
        r = sum(nums[1:])
        for i in range(len(nums) - 1):
            print('l:', l ,'r:', r)
            if l == r:
                return i
            l += nums[i]
            r -= nums[i + 1]
        if(l == r):
            return len(nums) - 1
        return -1