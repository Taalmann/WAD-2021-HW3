<template>
<header>
    <div>
        <a id='index-return'>
            <router-link to="/">
                <img src="../assets/img/logo.png" alt="logo">
            </router-link>
        </a>
    </div>

    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Log in</router-link> |
    <router-link to="/contact">Contact us</router-link>
    </div>
    
    <div>
    <img src="../assets/img/default_avatar.png" alt="User avatar">
    </div>
</header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
header {

  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  background-color: #fff;
  
}


header > div {

  flex-grow: 2;
  height: 35px;
  padding: 5px;
  /* overall use 46px height */

}


header div img {

  height: 100%;

}

header #nav {

  height: 100%;
  padding: 14px;
  bottom: 0px;

}

#index-return img:hover {

  border-radius: 17.5px; /* half height to make it circle */
  box-shadow: 0px -2px 5px #008

}

</style>