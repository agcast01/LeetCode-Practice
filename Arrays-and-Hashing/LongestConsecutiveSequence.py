class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        asc = sorted(nums)
        longest = 1
        curr = 1
        for i in range(1, len(asc)):
            if asc[i] == asc[i - 1]:
                continue
            if asc[i] == asc[i - 1] + 1:
                curr += 1
            else:
                curr = 1
            longest = max(longest, curr)
        return longest