const { Queue } = require('../src/queue');

const queue = new Queue();

describe('@Queue', () => {
  describe('#enqueue', () => {
    test('should be a function', () => {
      expect(typeof queue.enqueue).toBe("function");
    });

    test('should add new element(s)', () => {
      // Adding new people
      queue.enqueue('Conny');   // [0]
      queue.enqueue('Javiera'); // [1]
      queue.enqueue('Geraldine');   // [2]
      queue.enqueue('Mauro');     // [3]
      queue.enqueue('Juanito');      // [4]

      // The queue should have 5 elements (length)
      const actualResult = queue.size();
      const expectedResult = 5;
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#dequeue', () => {
    test('should be a function', () => {
      expect(typeof queue.dequeue).toBe("function");
    });

    test('should remove and return the first element', () => {
      // Removing the first element
      const actualResult = queue.dequeue();
      const expectedResult = 'Conny';
      // The size now should be 4
      expect(queue.size()).toEqual(4);
      // The first element removed is 'Conny'
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#front', () => {
    test('should be a function', () => {
      expect(typeof queue.front).toBe("function");
    });

    test('should return the first element', () => {
      // Getting the first element
      const actualResult = queue.front();
      const expectedResult = 'Javiera';
      // The first element is 'Javiera'
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#hasElements', () => {
    test('should be a function', () => {
      expect(typeof queue.hasElements).toBe("function");
    });

    test('should return true if the queue has elements', () => {
      // The queue has elements?
      const actualResult = queue.hasElements();
      const expectedResult = true;
      // The queue has elements!
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#size', () => {
    test('should be a function', () => {
      expect(typeof queue.size).toBe("function");
    });

    test('should return the current size of the queue', () => {
      // Getting the size of the actual queue
      const actualResult = queue.size();
      const expectedResult = 4;
      // The queue has 4 elements!
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#clear', () => {
    test('should be a function', () => {
      expect(typeof queue.clear).toBe("function");
    });

    test('should clear the queue', () => {
      // Clear queue
      queue.clear();

      const actualResult = queue.size();
      const expectedResult = 0;
      // The queue has 0 elements!
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('#print', () => {
    test('should be a function', () => {
      expect(typeof queue.print).toBe("function");
    });

    test('should print the current queue', () => {
      // Adding new elements
      queue.enqueue(10);
      queue.enqueue(20);
      queue.enqueue(30);

      const actualResult = queue.print();
      const expectedResult = '10,20,30';

      // The new queue is [10, 20, 30]
      expect(actualResult).toEqual(expectedResult);
    });
  });
});