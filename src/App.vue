<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'productos'}">Productos</router-link>
  </nav>
  <router-view/>


  <MyFooter />

</template>


<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components: {
    MyFooter: defineAsyncComponent( () => import('@/components/MyFooter.vue'))
  }
}


</script>





<style lang="scss" scoped>

nav{
  text-align: center;
  padding: 20px 30px;
}

.router-link-exact-active{
  color: green;
}

a{
  text-decoration: none;
  font-size: 25px;
  padding: 10px 0;
  font-weight: bold;
}

</style>
