class MinStack {
    stack: { value: number, min: number }[];
    min: number | null;

    constructor() {
        this.stack = [];
    }

    push(value: number): void {
        const min = this.stack.length > 0 ? (this.stack[0].min > value ? value : this.stack[0].min) : value;
        this.stack.unshift({ value, min });
    }

    pop(): void {
        this.stack.shift();
    }

    top(): number {
        return this.stack[0].value;
    }

    getMin(): number {
        return this.stack[0].min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */