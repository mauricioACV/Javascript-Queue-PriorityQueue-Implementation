function Queue() {
    let items = [];

    this.enqueue = element => {
        items.push(element);
    };

    this.dequeue = element => {
        return items.shift(); //método shift remueve la primera posición de un array
    };

    //método para retornar el primer elemento en la cola
    this.front = () => {
        return items[0];
    };

    this.hasElements = () => {
        return items.length > 0;
    };

    this.size = () => {
        return items.length;
    };

    this.print = () => {
        return items.toString();
    };

    this.clear = () => {
        items = [];
    };
};

module.exports = { Queue }