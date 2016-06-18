<template lang="jade">
.github-file-explorer
  .repo-input
    input(placeholder="Repo name or full URL", v-model="repoInput")
  .repo-container
    .repo-path
      label Current path:&nbsp;
      a.path(@click="currentPath='/'") &nbsp;/&nbsp;
      a.path(v-for="name in pathSlices", @click="slicePath($index)") {{ name }}
    .repo-explorer
      .file-container(v-for="obj in files")
        span.file(v-if="obj.type=='file'") {{ obj.name }}
        a.folder(v-if="obj.type!='file'", @click="currentPath=currentPath+obj.path") {{ obj.name }}
</template>

<script>
export default {
  computed: {
    repoName () {
      if (this.repoInput.startsWith('http')) {
        let l = this.repoInput.split('/')
        return `${l[l.lengh - 2]}/${l[l.lengh - 1]}`
      }
      return this.repoInput
    },
    pathSlices () {
      var l = this.currentPath.split('/')
      return l.slice(1)
    }
  },
  data () {
    return {
      files: [],
      currentPath: '/',
      repoInput: 'kxxoling/vue-demos'
    }
  },
  methods: {
    getFiles () {
      this.$http.get(`https://api.github.com/repos/${this.repoName}/contents${this.currentPath}`)
      .then((rsp) => {
        this.files = rsp.data
      })
    },
    slicePath (index) {
      const pathSlices = this.pathSlices.slice(0, index + 1)
      this.currentPath = `/${pathSlices.join('/')}`
    }
  },
  watch: {
    currentPath () {
      this.getFiles()
    }
  },
  created () {
    this.getFiles()
  },
  components: {}
}
</script>

<style lang="stylus">
.github-file-explorer
  .repo-input
    height 40px
    maring-bottom 20px
    & input
      padding 4px
      width 400px
      font-size 16px
      line-height 24px
  .repo-container
    .path
      cursor pointer
    .repo-explorer
      padding 20px
    .folder
      cursor pointer
</style>