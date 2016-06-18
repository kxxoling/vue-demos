<template>
  <ul id="demo">
    <item
      class="item"
      :model="treeData">
    </item>
  </ul>
</template>

<script>
import Item from './TreeNode.vue'

var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

export default {
  data () {
    return {
      treeData: data
    }
  },
  components: {
    Item
  }
}
</script>
