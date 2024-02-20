<script>
    import Header from '@/components/Header.vue';
    import Gradient from '@/components/Gradient.vue';
    import ReleasesComp from '@/components/ReleasesComp.vue';
    import ListenComp from '@/components/ListenComp.vue';

    export default{
        name: "ReviewView",
        components: {
            Header,
            Gradient,
            ReleasesComp,
            ListenComp
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
            <ReleasesComp></ReleasesComp>
            <ListenComp name="Твой вайб" link="/"></ListenComp>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    
</style>