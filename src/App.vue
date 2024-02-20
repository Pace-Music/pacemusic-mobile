<script>
  import Loading from "../src/components/Loader.vue";
  import Navigation from "./components/Navigation.vue";
  
  export default {
    name:'MainApp',
    components: {
        Loading,
        Navigation
    },
  };
</script>

<template>
  <Loading></Loading>
  <noscript>
    <strong>We're sorry but Pace Music doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <RouterView/>
  <Navigation></Navigation>
</template>