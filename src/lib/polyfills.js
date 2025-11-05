if (typeof window === "undefined") {
  const store = new Map();

  const storage = {
    get length() {
      return store.size;
    },
    key(index) {
      return Array.from(store.keys())[index] ?? null;
    },
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(String(key), String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
  };

  if (
    typeof globalThis.localStorage !== "object" ||
    typeof globalThis.localStorage.getItem !== "function"
  ) {
    globalThis.localStorage = storage;
  }
}
