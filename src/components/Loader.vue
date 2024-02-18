<script>
    import pace from '@/assets/icons/pace.vue'

    export default{
        name: "LoaderComponent", 
        components: {
            pace
        },
        mounted() {
            document.addEventListener("DOMContentLoaded", async () => {
                console.log("Loading is ending...");
                setTimeout(() => {
                    if (document.querySelector('.container_loading')) {
                        document.querySelector('.container_loading').classList.add('loading__end');
                        setTimeout(() => {
                            if (document.querySelector('.container_loading')) {
                                document.querySelector('.container_loading').remove();
                                document.body.classList.remove('loaded-false');
                            }
                        }, 1500);
                    }
                }, 1500);
            })
        },
    }
</script>

<template>
    <div class="container_loading" ref="preloader">
        <pace class="container_loading-icon" color='#D9D9D9' :opacity="1"></pace>
    </div>
</template>

<style lang="scss" scoped>
    .container_loading{
        background: #0A0A0A;
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;

        &-icon{
            width: 15%;
            height: 15%;
        }
    }

    .loading__end{
        transition: opacity .5s linear;
        opacity: 0;
      }
</style>

