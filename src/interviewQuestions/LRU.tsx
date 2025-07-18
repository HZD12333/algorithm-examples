class LRUCache {
    private cache: Map<string, string>;
    private capacity: number;
    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;

    }

    get(key: string) {
        return this.cache.get(key);

    }

    put(key: string, value: string) {
        const size = this.cache.size;
        if (size >= this.capacity) {
            this.cache.delete(this.cache.keys().next().value as string);
        }
        this.cache.set(key, value);

    }
}

export default LRUCache;