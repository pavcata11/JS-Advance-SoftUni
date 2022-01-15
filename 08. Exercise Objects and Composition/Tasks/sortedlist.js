function createSortedList() {
    return {
        sorted: [],
        original: [],
        get(index) {
            if (index >= 0 && index < this.size) {
                return this.sorted[index];
            }
        },
        add(value) {

            this.sorted.push(value);
            this.sorted.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index < this.size) {

                this.sorted.splice(index, 1).sort((a, b) => a - b);
                this.size--;
            }
        },
        size: 0,
    }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));