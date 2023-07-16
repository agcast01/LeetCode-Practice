class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) == 1:
            return nums
        midInd = math.ceil(len(nums) / 2)
        left = nums[:midInd]
        right = nums[midInd:]
        left = self.sortArray(left)
        right = self.sortArray(right)
        sorted = []
        while len(left) or len(right):
            if(not len(right) or (len(left) and left[0] <= right[0])):
                sorted.append(left.pop(0))
            elif((not len(left)) or (len(right) and left[0] > right[0])):
                sorted.append(right.pop(0))
        return sorted