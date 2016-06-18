<template lang="jade">
.description
  h2
    | Vue.js is&nbsp;
    span.feature {{ feature }}
    | !
  blockquote {{ content }}
</template>

<script>
const features = [
  {
    label: 'Simple',
    content: 'Write some HTML, grab some JSON, create a Vue instance, that\'s it.'
  }, {
    label: 'Reactive',
    content: 'Expressions & computed properties with transparent dependency tracking.'
  }, {
    label: 'Component oriented',
    content: 'Compose your application with decoupled, reusable components.'
  }, {
    label: 'Compact',
    content: '~24kb min+gzip, no dependency.'
  }, {
    label: 'Fast',
    content: 'Precise and efficient async batch DOM updates.'
  }, {
    label: 'Package Ready',
    content: 'You can get it via NPM or Bower - leverage your favorite eco system!'
  }
]

export default {
  computed: {
    feature () { return features[this.index].label },
    content () { return features[this.index].content }
  },
  data () {
    return {
      index: 1
    }
  },
  ready () {
    var len = features.length
    setInterval(() => {
      if (this.index < len - 1) {
        this.index++
      } else {
        this.index = 0
      }
    }, 3500)
  }
}
</script>

<style lang="stylus">
$green = #579979
$grey = #999
$white = white

.description
  width 700px
  height 140px
  margin-left auto
  margin-right auto
  padding 60px
  background $white

  h2
    font-size 40px
    line-height 40px
    margin 0
    padding 0
    color $green
  blockquote
    font-size 28px
    line-height 40px
    margin-left 40px
    margin-right 0
    color $grey

    border-left: 6px solid #ccc;
    padding-left: 20px;
</style>