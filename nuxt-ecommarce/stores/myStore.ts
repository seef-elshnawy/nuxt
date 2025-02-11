import { defineStore } from "pinia";

// export const counterStore = defineStore("counter", {
//   state: () => ({
//     count: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//     decrement() {
//       this.count--;
//     },
//   },
// });
export const counterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  return {
    count,
    increment,
    decrement,
  };
});
