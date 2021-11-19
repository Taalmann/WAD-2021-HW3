<template>
  <section id="post-body">
  <PostComp  date="Nov 19, 2021 05:02" text="A post should have the same structure as previous homework, but it has to be a component
that relies on Vuex global store to acquire/fetch its content information (3 points).
"/>
  <PostComp  date="Aug 19, 2021 15:00" image="Kassari_sääretirp.png" text="Hiiumaa: Kassari sääretirp"/>
  </section>
</template>

<script>
// @ is an alias to /src
import PostComp from '@/components/Post.vue'

export default {
  name: 'Home',
  components: {
    PostComp
  }
}
</script>
 

<style>
p {

  margin-top: 0px;
  margin-bottom: 5px;

}

section img.avatar{

  height: 100%; /* for auto scaling */

}

section img.thumb_up{

  height: 80%;

}


section img.photo{

  width:  100%;
  height: 100%;
  object-fit: contain;

}

section div.post {

  display: flex;
  flex-direction: column;

  width: 80%;
  height: 100%;
  margin: auto;
  margin-top: 46px;

  background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 18px 0 rgba(0, 0, 0, 0.19);

}

section div.post_header{

  display: flex;
  justify-content: space-between;

  height:35px;
  padding:5px;

}

section div.post_footer{

  display: flex;
  justify-content: left;

  height: 35px;
  padding: 5px 5px 0 5px;

}

section div.post_photo{

  display: flex;
  padding: 10px 0 5px;

}

section div + p{

  padding: 5px;

}

section img ~ p{

  font-size: smaller;
  color: #999;

}
</style>