// 栈
class Stack<T> {
    private items: T[] = [];

    //入栈
    push(item: T): void {
        this.items.push(item);
    }

    //出栈
    pop(): T | undefined {
        return this.items.pop();
    }

    //查看栈顶元素
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    //获取栈的长度
    size(): number {
        return this.items.length;
    }

    // 打印栈的所有元素
    printStack(): void {
        console.log(...this.items);
    }
}

export default Stack;