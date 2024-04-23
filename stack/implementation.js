class Stack {
 stack = [];

 constructor(limit) {
  this.limit = limit;
 }

 push(value) {
  const isFull = this.isFull();

  if (!isFull) return this.stack.push(value);

  console.log({ isFull });
 }

 pop() {
  const isEmpty = isEmpty();

  if (!isEmpty) return this.stack.pop();

  console.log(this.isEmpty());
 }

 peek() {
  return this.stack.findLast((data) => data);
 }

 isEmpty() {
  return this.stack.length === 0;
 }

 isFull() {
  return this.stack.length === this.limit;
 }
}

const numbersStack = new Stack(5);
numbersStack.push(10);
numbersStack.push(20);
numbersStack.push(300);
numbersStack.push(500);
numbersStack.push(70);
numbersStack.push(170);

console.log(numbersStack.peek(), numbersStack);
