class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        letters = [0]*5
        for i in text:
            if i == 'b':
                letters[0] += 1
            elif i == 'a':
                letters[1] += 1
            elif i == 'l':
                letters[2] += .5
            elif i == 'o':
                letters[3] += .5
            elif i == 'n':
                letters[4] += 1
        return  floor(min(letters))