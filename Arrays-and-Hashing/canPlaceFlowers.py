class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        possible = 0
        if len(flowerbed) == 1:
            if flowerbed[0] == 0:
                possible = 1
            return possible >= n
        for i in range(len(flowerbed)):
            if i == 0 and flowerbed[i + 1] == 0 and flowerbed[i] == 0:
                flowerbed[i] = 1
                possible += 1
            elif i == len(flowerbed) - 1 and flowerbed[i] == 0 and flowerbed[i - 1] == 0:
                flowerbed[i] = 1
                possible += 1
            elif i != 0 and i != len(flowerbed) - 1:
                if flowerbed[i + 1] == 0 and flowerbed[i - 1] == 0 and flowerbed[i] == 0:
                    flowerbed[i] = 1
                    possible += 1

        return possible >= n