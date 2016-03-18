<template lang="jade">
  input.select-menu(v-model="value")
</template>

<script>
require('jquery')
require('select2')

var $ = window.$

export default {
  data () {
    return {
      value: '',
      selected: 0,
      options: [
        { id: 1, text: 'hello' },
        { id: 2, text: 'what' }
      ]
    }
  },
  ready () {
    var self = this
    $(self.$el).select2({
      data: this.params.options
    }).on('change', function () {
      self.set(this.value)
    })
  },
  watch: {
    value: function (value) {
      $(this.el).val(value).trigger('change')
    }
  },
  destroy () {
    $(this.el).off().select2('destroy')
  }
}
</script>