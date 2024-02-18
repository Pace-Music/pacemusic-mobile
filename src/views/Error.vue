<script>
    import Header from '@/components/Header.vue';
    import Navigation from '@/components/Navigation.vue';

    export default{
        name: "ErrorView",
        components: {
            Header,
            Navigation,
        } 
    }
</script>

<template>
    <Header></Header>
    <main>
        <RouterLink to="/">Упс</RouterLink>
    </main>
    <Navigation></Navigation>
</template>

<style lang="scss" scoped>

</style>