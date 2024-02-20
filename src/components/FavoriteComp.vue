<script>
import Download from '@/assets/icons/download.vue';
import Like from '@/assets/icons/like.vue';
import Play from '@/assets/icons/play.vue';
import Tracks from '@/assets/icons/tracks.vue';
import Review from '@/assets/icons/review.vue';

    export default{
    name: "FavoriteComp",
    components: { Tracks, Review, Play, Download, Like }
}
</script>

<template>
    <section class="section" id="favorite">
        <h2 class="section-title"><a>Любимое</a></h2>

        <div class="section__container">
            <a href="" class="card">
                <div class="icon">
                    <Tracks></Tracks>
                </div>
                <h3>Треки</h3>
            </a>
            <a href="" class="card">
                <div class="icon">
                    <Review color='#D9D9D9' opacity="0.9"></Review>
                </div>
                <h3>Альбомы</h3>
            </a>
            <a href="" class="card">
                <div class="icon">
                    <Play></Play>
                </div>
                <h3>Клипы</h3>
            </a>
            <a href="" class="card">
                <div class="icon">
                    <Download></Download>
                </div>
                <h3>Скачанное</h3>
            </a>
            <a href="" class="card">
                <div class="icon">
                    <Like></Like>
                </div>
                <h3>Нравится</h3>
            </a>
        </div>
    </section>    
</template>

<style lang="scss" scoped>
    #favorite{
        margin-bottom: 1.5rem;
        .section-title{
            width: 100%;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid rgba(217, 217, 217, 0.25);
        }

        & .section__container{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            & .card{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1.5rem;
                
                & .icon{
                    width: 24px;
                    height: 24px;
                    flex: none;
                    margin-bottom: 1rem;

                    & > :only-child{
                        width: inherit;
                        height: inherit;
                    }
                }
                
                & h3{
                    font-size: 24px;
                    font-weight: 400;
                    flex: 1;
                    width: 100%;
                    border-bottom: 1px solid rgba(217, 217, 217, 0.25);
                    padding-bottom: 1rem;
                }
            }
        }
    }
</style>