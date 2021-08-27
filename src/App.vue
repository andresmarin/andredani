<template>
  <div id="app">
    <Header />
    <Menu />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Menu,
    Footer
  }
}
</script>
<style>



</style>
