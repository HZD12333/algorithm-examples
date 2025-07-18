// 链表

// 定义节点
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

// 定义链表类
class LinkedList<T> {
    head: ListNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 链表尾部添加元素
    add(data: T): void {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // 从链表种删除指定的元素（单个）
    remove(data: T): void {
        if(!this.head) return;
        if(this.head.value === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while(current.next) {
            if(current.next.value === data) {
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    // 查找链表中是否存在指定的元素
    has(data: T): boolean {
        let current = this.head;
        while(current) {
            if(current.value === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    print(): T[] {
        const arr: T[] = [];
        let current = this.head;
        while(current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

}
export default LinkedList;