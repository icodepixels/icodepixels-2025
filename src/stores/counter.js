import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        lastUpdated: null
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++;
            this.lastUpdated = new Date();
        }
    }
});
//# sourceMappingURL=counter.js.map