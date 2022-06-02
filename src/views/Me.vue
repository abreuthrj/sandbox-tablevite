<script>
import { useTableStore } from "../stores/tables";

export default {
  setup() {
    const tablesState = useTableStore();

    return {
      tablesState,
    };
  },

  data() {
    return {
      nameField: "",
      selecteds: [],
      checkAll: false,
      nameIsWrong: false
    };
  },

  methods: {
    addRow() {
      if(this.nameField == '')
        return this.nameIsWrong = true

      this.tablesState.add(this.nameField);
      this.nameField = "";
    },

    rmRows() {
      this.tablesState.rm(this.selecteds);
      this.selecteds = [];
      this.checkAll = false;
    },

    select(i) {
      var exist = this.selecteds.findIndex((id) => id == i);

      if (exist == -1) this.selecteds.push(i);
      else this.selecteds.splice(exist, 1);

      console.log(this.selecteds);
    },

    selectAll() {
      if(this.checkAll) 
        this.selecteds = this.tablesState.tables.map((_,i) => i)
      else
        this.selecteds = []
    },

    clearInputName() {
      this.nameIsWrong = false
    },

    seed() {
      [
        "Clientes",
        "Pedidos",
        "Tarefas",
        "Alimentação",
        "Estudos",
        "Carros",
        "Vendas",
        "Produtos",
      ].forEach((name) => {
        this.tablesState.add(name);
      });
    },
  },

  computed: {
    anySelected() {
      return this.selecteds.length > 0
    }
  }
};
</script>

<template>
  <div class="form">
    <input placeholder="Table Name" v-model="nameField" :class="{err: nameIsWrong}" @focus="clearInputName" />
    <button @click="addRow">Add Table</button>
  </div>

  <div class="table">
    <div class="table-actions">
      <button @click="seed">Seed Table</button>
      <button v-show="anySelected" @click="rmRows">Remove Tables</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="checkAll" @change="selectAll">
          </th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr class="empty"></tr>
        <tr v-for="(t, i) in tablesState.tables">
          <td>
            <input
              type="checkbox"
              :checked="selecteds.findIndex((id) => id == i) !== -1"
              @change="select(i)"
            />
          </td>
          <td>
            {{ t.name }}
          </td>
          <td>
            {{ t.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.form {
  padding: 4em;
  margin: 2em;
  background-color: #36475d;
  /* border-radius: 1em; */
}

.form input {
  width: 100%;
  padding: 1em;
  display: block;
  font-size: 1em;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  transition: .15s;
  border: 2px solid transparent;
}

.form input.err {
  border: 2px solid rgb(255, 165, 165);
}

.form button {
  padding: .7em;
  font-size: 1em;
  font-weight: bold;
  outline: 0;
  border: 0;
  margin-right: 1em;
  color: white;
  background-color: hsl(214, 27%, 39%);
  width: 10em;
  margin-top: 1em;
  cursor: pointer;
}

.table {
  margin: 2em;
  padding:2em;

  box-sizing: border-box;
  background-color: hsl(214, 27%, 98%);
}

.table-actions {
  margin-bottom: 3em;
}

.table-actions button {
  border: 0;
  outline: 0;
  padding: 1em;
  background-color: transparent;
  font-size: .9em;
  font-weight: bold;
  cursor: pointer;
  color: hsl(214, 07%, 50%);
}

.table-actions button:hover {
  background-color: #00000006;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table td:first-child,
table th:first-child
{
  width: 5%;
  text-align: left;
}
table td:nth-child(2),
table th:nth-child(2)
{
  width: auto;
  text-align: left;
}
table td:last-child,
table th:last-child
{
  width: 20%;
  text-align: right;
}
tr.empty {
  height: 1em;
}
td,
th
{
  padding: .5em;
}

th {
  color: #b9b9b9;
  font-size: .9em;
}

td {
  font-size: 1.1em;
}
</style>