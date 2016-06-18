<template lang="jade">
.modal-controller
  modal(:show.sync="show", msg="This is message body!")
  button.show-modal(v-on:click="show=true" type="button") click to show modal
</template>

<script>
import Modal from './Modal.vue'

export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="stylus">
.show-modal
  cursor pointer
</style>