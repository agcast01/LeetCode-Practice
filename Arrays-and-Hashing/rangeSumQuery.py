class NumArray:

    def __init__(self, nums: List[int]):
        self.array = [nums[0]]
        for i in range(1, len(nums)):
            self.array.append(nums[i] + self.array[i - 1])

    def sumRange(self, left: int, right: int) -> int:
        if left > 0:
            return self.array[right] - self.array[left - 1]
        return self.array[right]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)