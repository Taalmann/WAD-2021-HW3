<template>
<div class="post">
    <div class="post_header">
    <img :src="require(`@/assets/img/${avatar}`)" class="avatar" alt="User avatar">
    <p> {{ date }}</p>
    </div>
    <p>{{ text }}</p>
    <div class="post_footer">
    <img src="@/assets/img/thumb_up.png" class="thumb_up" alt="Thumb up">
    </div>
</div>
</template>

<script>
export default {
  name: 'TextPostComp',
  props: {
    avatar: {
      type: String,
      default: "default_avatar.png"
    },
    date: String,
    text: String
  }
}
</script>
