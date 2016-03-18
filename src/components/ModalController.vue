<template>
  <div class="modal-controller">
    <modal :show.sync="show" msg="This is message body!"></modal>
    <button v-on:click="show=true">show modal</button>
  </div>
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
