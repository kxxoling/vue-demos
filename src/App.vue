<template lang="jade">
#app
  header#header.header
    .logo
      img(src="./assets/logo.png")

    .title
      a(href='/vue-demos') Vue.js Demos
    ul.nav
      li(v-for="item in menu",
          v-bind:class="{ 'active': item.urlName==$route.name }")
        a(v-link="{ name: item.urlName, params: { page: 1 }, activeClass: 'active' }") {{item.name}}
      li
        a(href='https://github.com/kxxoling/vue-demos') GitHub

  .demo
    router-view(transition='fade', transition-mode='out-in', keep-alive)
</template>

<script>
export default {
  data () {
    return {
      menu: [{
        urlName: 'editor',
        name: 'Markdown Editor'
      }, {
        urlName: 'github',
        name: 'GitHub'
      }, {
        urlName: 'modal',
        name: 'Modal'
      }, {
        urlName: 'elastic-header',
        name: 'ElasticHeader'
      }, {
        urlName: 'widgets',
        name: 'Widgets'
      }, {
        urlName: 'todos',
        name: 'Todos'
      }, {
        urlName: 'table',
        name: 'Table'
      }]
    }
  }
}
</script>

<style lang="styl">
span, input
  outline none

.fade-transition
  transition: opacity .3s ease

.fate-enter, .fade-leave
  opacity: 0

html, body
  margin 0
  padding 0
  height 100%

body
  font-family 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif
  font-size 16px
  -webkit-font-smoothing antialiased
  color #34495e

a
  color #42b983
  text-decoration none
  &:hover
    opacity 0.8

code
  color #e96900
  padding 3px 5px
  border-radius 2px
  white-space nowrap

code, pre
  font-family 'Roboto Mono', Monaco, courier, monospace
  font-size 0.8em
  background-color #f8f8f8

pre
  code
    white-space pre-wrap
    padding 0

#header
  padding 1.4em 4.8em
  box-shadow 0 0 4px rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.1)
  margin-bottom 10px
  &:after
    display table
    content ''
    clear both
  .nav
    float right
  .title
    float left
    font 300 normal 24px/40px sans-serif
    color rgba(66, 185, 131, 0.8)
    line-height 40px

  .logo
    float left
    margin-right 10px
    img
      width 40px
      height 40px
.nav
  list-style-type none
  padding 0
  margin 0
  line-height 40px
  font-size 15px
  li
    display inline-block
    margin 0 0.6em
  a
    text-decoration none
    color #34495e
    padding-bottom 3px
    border-bottom 3px solid transparent
    &:hover
      border-color #42b983

#main
  position relative
  padding 2em 0
  .content
    max-width 600px
    margin 0 auto

.content
  line-height 1.6
  h1
    margin 0 0 1em
    padding-bottom 0
  h2
    font-size 1.4em
    margin 3em 0 1em
    padding-bottom 0.4em
    border-bottom 1px solid #ddd
  h3
    margin 1.8em 0 1em
    font-size 1.2em


@media (max-width: 1200px)
  #main
    .content
      margin-left 280px

@media (max-width: 860px)
  #main
    padding-left 10px
    padding-right 10px
    .content
      margin-left auto
</style>
