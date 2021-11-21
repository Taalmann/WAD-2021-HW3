<template>
<div class="post">
<!-- Post header: avatar + timestamp -->
  <div v-if="avatar" class="post_header">
  <img :src="require(`@/assets/img/${avatar}`)" class="avatar" alt="User avatar">
  <p> {{ date }}</p>
  </div>
  <div v-else class="post_header">
  <img src="@/assets/img/default_avatar.png" class="avatar" alt="User avatar">
  <p> {{ date }}</p>
  </div>
<!-- Post image (if any)-->
  <div v-if="image" class="post_photo">
  <img :src="require(`@/assets/img/${image}`)" class="photo" alt="Post's image">
  </div>
<!-- Post content -->
  <p>{{ text }}</p>
<!-- Post footer, likes and their counts (TODO) -->
  <div class="post_footer">
  <button v-on:click="IncreaseLikes(postID)"><img src="@/assets/img/thumb_up.png" class="thumb_up" alt="Thumb up"></button>
  {{ likes }}
  </div>
</div>
</template>

<script>
export default {
  name: 'PostComp',
  props: {
    avatar: {
      type: String,
      default: null
    },
    date: String,
    image: {
      type: String,
      default: null
    },
    text: String,
    likes: Number,
    postID: Number
  },
  methods: {
      IncreaseLikes: function(postID) {
        this.$store.dispatch("IncreaseLikesAct", postID)
      }
    }
}
</script>
