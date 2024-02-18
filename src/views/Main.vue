<script>
    import Header from '@/components/Header.vue';
    import Navigation from '@/components/Navigation.vue';
    import ListenComp from '@/components/ListenComp.vue'
    import StreamComp from '@/components/StreamComp.vue'
    import Gradient from '@/components/Gradient.vue';

    export default{
        name: "MainView",
        components: {
            Header,
            Navigation,
            ListenComp,
            Gradient,
            StreamComp
        },
        data() {
            return {
                paddingBottomApp: ''
            };
        },
        mounted() {
            this.paddingBottomApp = document.querySelector('.footer').clientHeight + 'px';
        }
    }
</script>

<template>
    <div id="main-app" :style="{ paddingBottom: paddingBottomApp }">
        <Header></Header>
        <main>
            <Gradient></Gradient>
            <ListenComp></ListenComp>
            <StreamComp></StreamComp>
        </main>
    </div>
    <Navigation ref="navigation"></Navigation>
</template>

<style lang="scss" scoped>

</style>