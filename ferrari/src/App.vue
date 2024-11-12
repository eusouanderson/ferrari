<template>
  <div id="app">
    <Header />
    <div class="background-container">
      <router-view />  <!-- Isso vai renderizar o componente associado à rota -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  color: aliceblue;
  margin-top: 0px;
}
.background-container {
  transform: scale(1.1); 
  margin: 0 auto 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
