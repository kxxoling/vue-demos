<template>
  <div id="github-demo">
    <h1>Latest Vue.js Commits</h1>
    <div v-for="branch in branches">
      <input type="radio" name="branch" :id="branch" :value="branch" v-model="currentBranch">
      <label :for="branch">{{branch}}</label>
    </div>

    <div>vuejs/vue/@{{currentBranch}}</div>
    <ul>
      <li v-for="record in commits">
        <a :href="record.html_url" class="commit">{{record.sha.slice(0, 7)}}</a>
        -
        <span class="message">{{record.commit.message | truncate}}</span><br>
        by <span class="author">{{record.commit.author.name}}</span>
        at <span class="date">{{record.commit.author.date | formatDate}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=5&sha='

export default {
  data () {
    return {
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    currentBranch: 'fetchData'
  },
  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  methods: {
    fetchData () {
      var xhr = new XMLHttpRequest()

      var self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = () => {
        self.commits = JSON.parse(xhr.responseText)
      }
      xhr.send()
    }
  }
}
</script>

<style lang="styl">
#github-demo
  font-family 'Helvetica', Arial, sans-serif
  a
    text-decoration none
    color #f66

  li
    line-height 1.5em
    margin-bottom 20px

  .author, .date
    font-weight bold
</style>