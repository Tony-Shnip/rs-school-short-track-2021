/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const c = 0;
  let temp = l;
  while (c) {
    if (temp.value === k) {
      while (temp.next) {
        temp.value = temp.next.value;
        temp = temp.next;
      }
      temp = l;
    }
    temp = temp.next;
  }
  return temp;
}

module.exports = removeKFromList;
