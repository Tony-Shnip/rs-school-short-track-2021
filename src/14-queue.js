// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.top = null;
    this.l = 0;
  }

  get size() {
    return this.l;
  }

  enqueue(elem) {
    this.l++;
    if (!this.top) {
      this.top = new ListNode(elem);
      this.top.value = elem;
    } else {
      let add = this.top;
      while (add.next) {
        add = add.next;
      }
      add.next = new ListNode(elem);
      add.next.value = elem;
    }
  }

  dequeue() {
    if (this.l === 0) return Error;
    const del = this.top;
    this.top = this.top.next;
    return del.value;
  }
}

module.exports = Queue;
