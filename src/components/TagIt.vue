<template lang="jade">
.tag-editor-field
  .tag-editor-tag(v-for="tag in tags")
    .tag-editor-text {{ tag }}
    a.tag-editor-delete(v-on:click="removeItem($index)") x
  input.tag-editor-input(v-model="input",
      @keyDown.enter="addItem",
      @keyDown.space="addItem")
</template>

<script>
export default {
  props: {
    tags: ['tag1', 'tag2']
  },
  computed () {
    return []
  },
  methods: {
    removeItem: function (index) {
      this.tags.pop(index)
    },
    addItem: function () {
      this.tags.push(this.input)
      this.input = ''
    }
  },
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss">
.tag-editor-field {
  border: #000 1px solid;
  display: inline-block;
  *display: inline; /* IE7 */
  *zoom: 1; /* IE7 */
}
.tag-editor-tag {
  background: #cde69c;
  margin: 4px;
  padding: 2px 4px;
  display: inline-block;
  *display: inline; /* IE7 */
  *zoom: 1; /* IE7 */
}
.tag-editor-text {
  font-size: 14px;
  display: inline-block;
  *display: inline; /* IE7 */
  *zoom: 1; /* IE7 */
}
.tag-editor-delete {
  color: #82ad2b;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  margin-left: 6px;
  display: inline-block;
  *display: inline; /* IE7 */
  *zoom: 1; /* IE7 */
}
.tag-editor-input {
  font-size: 14px;
  padding: 2px 4px;
  border: none;
  outline: none;
}
.tag-editor-measure {
  position: absolute;
  left: -999px;
}
</style>
