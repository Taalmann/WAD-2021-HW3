<template>
  <div id="app">
    <HeaderComp/>
    <FooterComp/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/Header.vue'
import FooterComp from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss">
html, body {
  background-color: #608;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

section {

  display: flex;
  flex-direction: column;
  justify-content: center; /* on X Axis */
  align-items: center;       /* on Y Axis */

  width: 60%;
  height: 100%;
  margin: auto;
  margin-top: 46px;
  margin-bottom: 20px;

  background-color: #f5f5f5;

}

</style>
