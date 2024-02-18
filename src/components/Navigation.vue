<script>
    import pace from '@/assets/icons/pace.vue'
    import review from '@/assets/icons/review.vue'
    import favorite from '@/assets/icons/favorite.vue'

    export default{
        name: "NavigationComponent",
        components: {
            pace,
            review, 
            favorite
        },
        computed: {
            isCurrentRoute() {
                return this.$route.path;
            }
        }
    }
</script>

<template>
    <footer class="footer" ref="navigation">
        <nav class="footer__nav">
            <ul class="footer__nav__list">
                <li class="footer__nav__list-item">
                    <RouterLink class="footer__nav__list-item-href" to="/" :style="isCurrentRoute === '/' ? 'color: rgba(217, 217, 217, 1); transform: scale(1.1)' : 'color: rgba(217, 217, 217, 0.6)'">
                        <pace class="nav-icon" color='#D9D9D9' :opacity="isCurrentRoute === '/' ? 0.9 : 0.6"></pace>
                        Слушать
                    </RouterLink>
                </li>
                <li class="footer__nav__list-item">
                    <RouterLink class="footer__nav__list-item-href" to="/review" :style="isCurrentRoute === '/review' ? 'color: rgba(217, 217, 217, 1); transform: scale(1.1)' : 'color: rgba(217, 217, 217, 0.6)'">
                        <review class="nav-icon" color='#D9D9D9' :opacity="isCurrentRoute === '/review' ? 0.9 : 0.6"></review>
                        Обзор
                    </RouterLink>
                </li>
                <li class="footer__nav__list-item">
                    <RouterLink class="footer__nav__list-item-href" to="/favorite" :style="isCurrentRoute === '/favorite' ? 'color: rgba(217, 217, 217, 1); transform: scale(1.1)' : 'color: rgba(217, 217, 217, 0.6)'">
                        <favorite class="nav-icon" color='#D9D9D9' :opacity="isCurrentRoute === '/favorite' ? 0.9 : 0.6"></favorite>
                        Любимое
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
    .footer{
        padding: 1rem;
        padding-bottom: 1.75rem;
        bottom: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.16);
        background-blend-mode: soft-light;
        mix-blend-mode: normal;
        backdrop-filter: blur(50px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 20px 20px 0 0;

        &__nav{
            width: 100%;
            height: 100%;

            &__list{
                width: 100%;
                display: inline-flex;
                align-items: flex-end;
                justify-content: space-evenly;

                &-item-href{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;                    
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;

                    & .nav-icon{
                        height: 24px;
                    }
                }
            }
        }
    }
</style>