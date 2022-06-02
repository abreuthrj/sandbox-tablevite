import { defineStore } from "pinia";

export const useTableStore = defineStore("table", {
  state: () => ({
    tables: [],
  }),
  getters: {},
  actions: {
    add(name = "") {
      this.tables.push({
        name,
        date: Date.now(),
        selected: false,
      });
    },

    rm(ids = []) {
      ids.forEach((id) => {
        this.tables[id] = -1;
      });
      this.tables = this.tables.filter((row) => row !== -1);
    },
  },
});
