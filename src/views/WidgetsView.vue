<template lang="jade">
.widgets
  .tag-it
    tag-it(:tags.sync="['tag', 'tag2']")
  .rating-views
    star-rating(:value.sync="value", :max="5")
    | value: {{ value }}
  .select2-menu
    select-menu
</template>

<script>
import StarRating from '../components/StarRating'
import TagIt from '../components/TagIt'
import SelectMenu from '../components/Select'

export default {
  components: { StarRating, TagIt, SelectMenu },
  data () {
    return {
      value: 1
    }
  }
}
</script>
