<template>
  <table>
    <slot />
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

table::v-deep td,
table::v-deep th
{
  padding: .5em;
}
table::v-deep th {
  color: #b9b9b9;
  font-size: .9em;
}

table::v-deep td {
  font-size: 1.1em;
}

table::v-deep tr.empty {
  height: 1em;
}
</style>