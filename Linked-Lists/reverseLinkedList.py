class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        prev = head
        current = head.next
        prev.next = None
        while current != None:
            next = current.next
            current.next = prev
            prev = current
            current = next
    
        return prev