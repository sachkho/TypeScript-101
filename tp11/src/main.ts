class Queue<T> {
    private elements: T[] = [];
  
    enqueue(element: T): void {
      this.elements.push(element);
    }
  
    dequeue(): T | undefined {
        return this.elements.shift();
    }
  
    size(): number {
        return this.elements.length;
    }
  }
  
  // Testez votre code ici
  let numberQueue = new Queue<number>();
  console.log(numberQueue.size(),numberQueue.enqueue(3), numberQueue.dequeue()); 
  
  
  let stringQueue = new Queue<string>();
  console.log(stringQueue.size(),stringQueue.enqueue('Hello'), stringQueue.dequeue());
  