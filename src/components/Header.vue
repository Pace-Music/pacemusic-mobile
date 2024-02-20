<script>
    import { RouterLink } from 'vue-router';

    import find from '@/assets/icons/find.vue';
    import pace from '@/assets/icons/pace.vue';
    import additionally from '@/assets/icons/additionally.vue';

    export default{
        name: "HeaderComponent",
        components: {
            RouterLink,
            find,
            additionally,
            pace
        },
    }
</script>

<template>
    <header class="header" ref="header">
        <RouterLink class="icon" to="/">
            <pace class="icon-img" color="#FFF" opacity='1'></pace>
            <h3 class="icon-name">Pace Music</h3>
        </RouterLink>

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
        padding: 0.75rem 1.5rem;
        position: fixed;
        flex: none;
        top: 0;
        display: flex;
        background: linear-gradient(180deg, #0A0A0A 50%, rgba(255, 255, 255, 0) 100%);

        & .icon{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            flex: none;

            &-img{
                height: 20px;
            }

            &-name{
                font-size: 13px;
                font-weight: 300;
            }
        }

        &__navigation{
            width: 100%;
            flex: 1;

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