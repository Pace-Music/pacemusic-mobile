<script>
  import Loading from "../src/components/Loader.vue";
  // import Gradient from "./components/Gradient.vue";
  
  export default {
    name:'MainApp',
    components: {
        Loading,
        // Gradient
    },
  };
</script>

<template>
  <Loading></Loading>
  <noscript>
    <strong>We're sorry but Pace Music doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <!-- <Gradient></Gradient> -->
  <Transition name="fade">
    <RouterView ref="fade"/>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>