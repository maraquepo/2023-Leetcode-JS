function ListNode(val) {
  this.val = val;
  this.next = null;
}

let hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}