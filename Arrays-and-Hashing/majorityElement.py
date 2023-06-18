class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = {}
        for i in nums:
            if i in count:
                count[i] += 1
            else:
                count[i] = 1
        v = list(count.values())
        k = list(count.keys())
        return k[v.index(max(v))]