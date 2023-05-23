class MyLinkedList:

    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def get(self, index: int) -> int:
        print(self.length)
        if index > self.length - 1:
            return -1
        target = self.head
        ind = 0

        while ind < index:
            target = target.next
            ind += 1
        
        return target.val

    def addAtHead(self, val: int) -> None:
        if self.head == None:
            newNode = Node(val, None, None)
            self.head = newNode
            self.tail = newNode
        else:
            newNode = Node(val, None, self.head)
            self.head.prev = newNode
            self.head = newNode
        self.length += 1
        print(self.length)

    def addAtTail(self, val: int) -> None:
        if self.head == None:
            newNode = Node(val, None, None)
            self.head = newNode
            self.tail = newNode
        else:
            newNode = Node(val, self.tail, None)
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index == self.length:
            self.addAtTail(val)
            return
        elif index == 0:
            self.addAtHead(val)
            return
        elif index > self.length - 1:
            return -1
        target = self.head
        ind = 0

        while ind < index:
            target = target.next
            ind += 1

        newNode = Node(val, target.prev, target)
        target.prev = newNode
        newNode.prev.next = newNode
        self.length += 1

    def deleteAtIndex(self, index: int) -> None:
        if index == 0:
            if self.head.next:
                self.head = self.head.next
                self.head.prev = None
            else:
                self.head = None
                self.tail = None
            self.length -= 1
            return
        elif index == self.length - 1:
            if self.tail.prev:
                self.tail = self.tail.prev
                self.tail.next = None
            self.length -= 1
            return
        elif index > self.length - 1:
            return -1
        target = self.head
        ind = 0
        
        while ind < index:
            target = target.next
            ind += 1
        
        if target.prev:
            target.prev.next = target.next

        if target.next:
            target.next.prev = target.prev
        self.length -= 1
        
        
        
class Node:

    def __init__(self, val, prev, next):
        self.val = val
        self.prev = prev
        self.next = next
