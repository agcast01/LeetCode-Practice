class BrowserHistory:

    def __init__(self, homepage: str):
        self.target = Node(homepage)

    def visit(self, url: str) -> None:
        newSite = Node(url, self.target)
        self.target.next = newSite
        self.target = newSite

    def back(self, steps: int) -> str:
        while self.target.prev and steps > 0:
            self.target = self.target.prev
            steps -= 1
        return self.target.val

    def forward(self, steps: int) -> str:
        while self.target.next and steps > 0:
            self.target = self.target.next
            steps -= 1
        return self.target.val
class Node:
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next