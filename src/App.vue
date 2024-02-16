<script>
  import Loading from "../src/components/Loader.vue";
  import Header from "../src/components/Header.vue";
  import Footer from "../src/components/Footer.vue";
  import Gradient from "./components/Gradient.vue";
  
  export default {
    name:'MainApp',
    components: {
        Loading,
        Header,
        Footer,
        Gradient
    },
  };

</script>

<template>
  <Loading></Loading>
  <Gradient></Gradient>
  <Header ref="header"></Header>
  <noscript>
    <strong>We're sorry but Pace Music doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <main :id="$route.meta.notFound ? 'error' : null">
    <RouterView />
  </main>
  <Footer ref="footer"></Footer>
</template>

<style scoped>
  #error{
    display: flex;
    flex-direction: column;
  }
</style>