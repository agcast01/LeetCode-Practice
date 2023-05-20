class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) < 2:
            return False 
       
        stack = []

        for p in s:
            if (p == ')' or p == ']' or p == '}') and len(stack) == 0:
                return False

            if p == '(' or p == '[' or p =='{':
                stack.append(p)
            elif p == ')' and stack[-1] != '(':
                return False
            elif p == ']' and stack[-1] != '[':
                return False
            elif p == '}' and stack[-1] != '{':
                return False
            else:
                stack.pop()
        return len(stack) == 0
