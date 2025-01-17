import { defineStore } from 'pinia'

interface CounterState {
  count: number
  lastUpdated: Date | null
}

export const useCounterStore = defineStore('counter', {
  state: (): CounterState => ({
    count: 0,
    lastUpdated: null
  }),

  getters: {
    doubleCount: (state) => state.count * 2
  },

  actions: {
    increment() {
      this.count++
      this.lastUpdated = new Date()
    }
  }
})