<template lang="jade">
.table-demo
  form.search
    label.label Search:
    input(v-model="searchQuery", name="query")
  grid-table(:data="gridData",
      :columns="gridColumns",
      :filter-key="searchQuery")
</template>

<script>
import GridTable from '../components/GridTable'
const data = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]

export default {
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: data
    }
  },
  components: { GridTable }
}
</script>

<style lang="styl">
.table-demo
  .search
    margin-bottom 10px
  .label:after
    content: ' '
</style>