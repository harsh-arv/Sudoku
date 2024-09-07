class UniqueArray {
    constructor() {
        this.array = [];
        this.set = new Set();
    }

    add(value) {
        if (!this.set.has(value)) {
            this.array.push(value);  // Add to array
            this.set.add(value);     // Track in the Set
        }
    }

    get(index) {
        return this.array[index];
    }

    remove(value) {
        if (this.set.has(value)) {
            this.set.delete(value);
            this.array = this.array.filter(item => item !== value);  // Remove from array
        }
    }

    length() {
        return this.array.length;
    }

    print() {
        console.log(this.array);
    }
}