<template>
  <div id="app">
    <AppFerrari />
    <Footer />
  </div>
  
</template>

<script>
import AppFerrari from './view/pages/AppFerrari.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    AppFerrari,
    Footer,
  },
};
</script>
