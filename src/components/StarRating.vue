<template lang="jade">
.rating
  i.icon.circle(v-for="i in [1,2,3,4,5]",
      v-bind:class="{ 'selected': $index+base <= hover, 'active': $index+base <= value }",
      v-on:click="value=$index+base",
      v-on:mouseover="hover=$index+base",
      v-on:mouseout="hover=undefined")
  | {{ hover }}
</template>

<script>
export default {
  props: ['max', 'value', 'default', 'base'],
  created () {
    if (this.value === undefined) {
      this.value = this.default
    }
    if (this.base === undefined) {
      this.base = 1
    }
  },
  data () {
    return {
      hover: 3
    }
  }
}
</script>

<style lang="scss">
.rating {
  .icon {
    display: inline-block;
    width: 20px;
    color: rgba(0,0,0,.15);
    margin: 5px;
    cursor: pointer;
  }
  .icon.active {
    color: #ff6d75;
  }
  .icon.selected {
    color: #cd0707;
  }
  .star:before {
    content: '⭐️';
  }
  .heart:before {
    content: '❤️';
  }
  .circle:before {
    content: '〇';
  }
}
</style>