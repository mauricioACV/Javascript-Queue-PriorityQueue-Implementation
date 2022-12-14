const { PriorityQueue } = require('../src/priorityQueue');

const priorityQueue = new PriorityQueue();

describe('@PriorityQueue', () => {
  describe('#enqueue', () => {
    it('should be a function', () => {
      expect(typeof priorityQueue.enqueue).toBe("function");
    });

    it('should add new element(s) with priority', () => {
      // Adding new people
      priorityQueue.enqueue('Carlos', 3);   // [2]
      priorityQueue.enqueue('Cristina', 1); // [0]
      priorityQueue.enqueue('Jona', 5);     // [4]
      priorityQueue.enqueue('Javier', 2);   // [1]
      priorityQueue.enqueue('Sam', 4);      // [3]

      /*
      [
        QueueElement { element: 'Cristina', priority: 1 }, [0]
        QueueElement { element: 'Javier', priority: 2 },   [1]
        QueueElement { element: 'Carlos', priority: 3 },   [2]
        QueueElement { element: 'Sam', priority: 4 },      [3]
        QueueElement { element: 'Jona', priority: 5 }      [4]
      ]
      */

      // The queue should have 5 elements (length)
      const actualFirstItem = priorityQueue.front();
      const actualSizeResult = priorityQueue.size();

      const expectedSizeResult = 5;
      
      const expectedFirstItemResult = {
        element: 'Cristina',
        priority: 1
      };

      const actualFirstItemElement = actualFirstItem.element;
      const actualFirstItemPriority = actualFirstItem.priority;

      const expectedFirstItemElement = expectedFirstItemResult.element;
      const expectedFirstItemPriority = expectedFirstItemResult.priority;

      expect(actualSizeResult).toEqual(expectedSizeResult);
      expect(actualFirstItemElement).toEqual(expectedFirstItemElement);
      expect(actualFirstItemPriority).toEqual(expectedFirstItemPriority);

    });
  });

  describe('#dequeue', () => {
    it('should be a function', () => {
      expect(typeof priorityQueue.dequeue).toBe("function");
    });

    it('should remove and return the first element', () => {
      // Removing the first element
      const actualResult = priorityQueue.dequeue();
      const actualSizeResult = priorityQueue.size();
      const expectedSizeResult = 4;

      const expectedResult = {
        element: 'Cristina',
        priority: 1
      };

      // The size now should be 4
      expect(actualSizeResult).toEqual(expectedSizeResult);
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#front', () => {
    it('should be a function', () => {
      expect(typeof priorityQueue.front).toBe("function");
    });

    it('should return the first element', () => {
      // Getting the first element
      const actualResult = priorityQueue.front();
      const expectedResult = {
        element: 'Javier',
        priority: 2
      };

      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#hasElements', () => {
    it('should be a function', () => {
      expect(typeof priorityQueue.hasElements).toBe("function");
    });

    it('should return true if the queue has elements', () => {
      // The queue has elements?
      const actualResult = priorityQueue.hasElements();
      const expectedResult = true;

      // The queue has elements!
      expect(actualResult).toEqual(expectedResult);

    });
  });

  describe('#size', () => {
    it('should be a function', () => {
      expect(typeof priorityQueue.size).toBe("function");
    });

    it('should return the current size of the queue', () => {
      // Getting the size of the actual queue
      const actualResult = priorityQueue.size();
      const expectedResult = 4;

      // The queue has 4 elements!
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#clear', () => {
    it('should be a function', () => {
      expect(typeof priorityQueue.clear).toBe("function");
    });

    it('should clear the queue', () => {
      // Clear queue
      priorityQueue.clear();

      const actualResult = priorityQueue.size();
      const expectedResult = 0;

      // The queue has 0 elements!
      expect(actualResult).toEqual(expectedResult);

    });
  });

  describe('#print', () => {
    it('should be a function', () => {
      expect(typeof priorityQueue.print).toBe("function");
    });

    it('should print the current queue', () => {
      // Adding new elements
      priorityQueue.enqueue(20);
      priorityQueue.enqueue(30);
      priorityQueue.enqueue(10, 2);

      const actualResult = priorityQueue.print();
      const expectedResult = '20-1|30-1|10-2';

      // The new queue is [10, 20, 30]
      expect(actualResult).toEqual(expectedResult);
    });
  });
});