<script>
    import Header from '@/components/Header.vue';
    import Gradient from '@/components/Gradient.vue';
import FavoriteComp from '@/components/FavoriteComp.vue';
import ListenComp from '@/components/ListenComp.vue';
import AuthorsComp from '@/components/AuthorsComp.vue';

    export default{
        name: "FavoriteView",
        components: {
    Header,
    Gradient,
    FavoriteComp,
    ListenComp,
    AuthorsComp
},
        data() {
            return {
                paddingBottomApp: '',
                paddingTopApp: '',
            };
        },
        mounted() {
            this.paddingBottomApp = document.querySelector('.footer').clientHeight + 'px';
            this.paddingTopApp = document.querySelector('.header').clientHeight * 1.5 + 'px';
        }
    }
</script>

<template>
    <div id="main-app" :style="{ paddingBottom: paddingBottomApp, paddingTop: paddingTopApp }">
        <Header></Header>
        <main>
            <Gradient></Gradient>
            <FavoriteComp></FavoriteComp>
            <ListenComp name="Плейлисты" link="/"></ListenComp>
            <AuthorsComp name="Артисты" link="/"></AuthorsComp>
        </main>
    </div>
</template>

<style lang="scss" scoped>

</style>