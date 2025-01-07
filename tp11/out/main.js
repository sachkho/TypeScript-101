class Queue {
    constructor() {
        this.elements = [];
    }
    enqueue(element) {
        this.elements.push(element);
    }
    dequeue() {
        return this.elements.shift();
    }
    size() {
        return this.elements.length;
    }
}
// Testez votre code ici
let numberQueue = new Queue();
console.log(numberQueue.size(), numberQueue.enqueue(3), numberQueue.dequeue());
let stringQueue = new Queue();
console.log(stringQueue.size(), stringQueue.enqueue('Hello'), stringQueue.dequeue());
//# sourceMappingURL=main.js.map