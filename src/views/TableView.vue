<script>
import { useTableStore } from '../stores/tables'

export default {
  setup() {
    const tableStore = useTableStore()

    return { tableStore }
  },

  mounted() {

  },

  computed: {
    qTable() {
      return this.tableStore.tables[this.$route.params.id]
    }
  }
}
</script>

<template>
  <h1>{{ qTable.name }}</h1>
</template>

<style>
</style>