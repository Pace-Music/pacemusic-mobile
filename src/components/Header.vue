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
    <header class="header" ref="header">
        <nav class="header__navigation">
            <ul class="header__navigation__list">
                <li class="header__navigation__list-item">
                    <RouterLink class="header__navigation__list-item-href" to="/search"><find class="header_icon"></find></RouterLink>
                </li>
                <li class="header__navigation__list-item">
                    <RouterLink class="header__navigation__list-item-href" to="/settings"><additionally class="header_icon"></additionally></RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: auto;
        padding: 1.5rem;
        padding-bottom: 0.5rem;
        position: sticky;
        top: 0;
        background: linear-gradient(180deg, #0A0A0A 75%, rgba(255, 255, 255, 0) 100%);
        /*background: #0A0A0A;
        box-shadow: 0px 6px 20px #0A0A0A;
        */

        &__navigation{
            width: 100%;

            &__list{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-end;
                gap: 1rem;
            }
        }

        &_icon{
            height: 32px;
        }
    }
</style>