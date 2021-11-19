<template>
<footer>
  <div id="nav-footer">
    <router-link to="/contact">Contact us</router-link>
  </div>
</footer>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style lang="scss">
footer {

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  text-align: center;
  background-color: #fff;
}
</style>