function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null: next)
}

const reverseKGroup = (head, k) => {
  if (!head) return null;

  let tail = head;
  for (let i = 1; i < k; i++) {
    tail = tail.next
    if (!tail) return head;
  }

  let next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
}

const reverse = (curr) => {
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

