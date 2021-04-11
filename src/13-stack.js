/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
    this.l = 0;
  }

  push(elem) {
    this.stack.push(elem);
    this.l++;
  }

  pop() {
    if (this.l === 0) return Error;
    this.l--;
    return this.stack.pop();
  }

  peek() {
    if (this.l === 0) return Error;
    return this.stack[this.l - 1];
  }
}

module.exports = Stack;
