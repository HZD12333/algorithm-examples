// 队列
class Queue<T> {
    private item: T[] = [];

    //入队
    enqueue(item: T): void {
        this.item.push(item);
    }

    //出队
    dequeue(): T | undefined {
        return this.item.shift();
    }

    //获取队首元素
    front(): T | undefined {
        return this.item[0];
    }

    //判断队列是否为空
    isEmpty(): boolean {
        return this.item.length === 0;
    }

    //获取队列长度
    size(): number {
        return this.item.length;
    }

    //清空队列
    clear(): void {
        this.item = [];
    }

    //打印队列
    printQueue(): void {
        console.log(...this.item);
    }
}

export default Queue; 