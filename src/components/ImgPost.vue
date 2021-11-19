<template>
<div class="post">
    <div class="post_header">
    <img :src="require(`@/assets/img/${avatar}`)" class="avatar" alt="User avatar">
    <p> {{ date }}</p>
    </div>
    <div class="post_photo">
    <img :src="require(`@/assets/img/${image}`)" class="photo" alt="Kassari sääretirp">
    </div>
    <p>{{ text }}</p>
    <div class="post_footer">
    <img src="@/assets/img/thumb_up.png" class="thumb_up" alt="Thumb up">
    </div>
</div>
</template>

<script>
export default {
  name: 'ImgPostComp',
  props: {
    avatar: {
      type: String,
      default: "default_avatar.png"
    },
    date: String,
    image: String,
    text: String
  }
}
</script>
