import { defineStore } from 'pinia';

const useClassStore = defineStore('class', {
  state: () => {
    return {
      className: '',
    };
  },
  getters: {
    getClassName(): string {
      return this.className;
    },
  },
  actions: {
    setClassName(className: string) {
      this.className = className;
    },
  },
  persist: true,
});
