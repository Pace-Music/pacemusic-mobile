<script>
    import Header from '@/components/Header.vue';
    import ListenComp from '@/components/ListenComp.vue'
    import StreamComp from '@/components/StreamComp.vue'
    import Gradient from '@/components/Gradient.vue';

    export default{
        name: "MainView",
        components: {
            Header,
            ListenComp,
            Gradient,
            StreamComp
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
            <ListenComp name="Слушать снова" link="/"></ListenComp>
            <StreamComp></StreamComp>
            <ListenComp name="Ваши плейлисты" link="/"></ListenComp>
        </main>
    </div>
</template>

<style lang="scss" scoped>

</style>