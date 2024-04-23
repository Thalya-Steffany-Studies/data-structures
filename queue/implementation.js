class Queue {
 queue = [];

 constructor(limit = 5) {
  this.limit = limit;
 }

 isEmpty() {
  return this.queue.length === 0;
 }

 isFull() {
  return this.queue.length === this.limit;
 }

 enqueue(data) {
  const isFull = this.isFull();

  if (!isFull) {
   return this.queue.push(data);
  }

  console.log({ isFull });
 }

 dequeue() {
  const isEmpty = this.isEmpty();

  if (!isEmpty) {
   return this.queue.shift();
  }

  console.log({ isEmpty });
 }
}

const firstQueue = new Queue(2);

firstQueue.enqueue(10);
firstQueue.enqueue(50);
firstQueue.enqueue(2350);
firstQueue.dequeue();
firstQueue.dequeue();
firstQueue.dequeue();

console.log(firstQueue);
