<script>
    import { RouterLink } from 'vue-router';
    import find from '@/assets/icons/find.vue';
    import additionally from '@/assets/icons/additionally.vue';

    export default{
        name: "HeaderComponent",
        components: {
            RouterLink,
            find,
            additionally,
        } 
    }
</script>

<template>
    <header class="header">
        <nav class="header__navigation">
            <ul class="header__navigation__list">
                <li class="header__navigation__list-item">
                    <RouterLink class="header__navigation__list-item-href" to="/search"><find></find></RouterLink>
                </li>
                <li class="header__navigation__list-item">
                    <RouterLink class="header__navigation__list-item-href" to="/settings"><additionally></additionally></RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>