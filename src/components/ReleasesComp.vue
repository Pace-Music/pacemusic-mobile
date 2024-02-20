<template>
    <section class="section section-releases">
        <h2 class="section-title"><a href="/">Новые релизы<i class="arrow"></i></a></h2>

        <div class="section__container">
            <div class="cards">
                <div class="cards-container swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="card">
                                <img src="https://avatars.yandex.net/get-music-content/117546/736917ab.a.6117897-1/200x200" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card">
                                <img src="https://avatars.yandex.net/get-music-content/10129881/1ef4c734.a.29595531-1/200x200" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card">
                                <img src="../../public/uploads/banner.png" alt="">
                                <div class="card-name">
                                    <h3>Name</h3>
                                    <p>Author</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card">
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card">
                                <img src="https://avatars.yandex.net/get-music-content/10129881/1ef4c734.a.29595531-1/200x200" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card">
                                <img src="../../public/uploads/banner.png" alt="">
                                <div class="card-name">
                                    <h3>Name</h3>
                                    <p>Author</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card">
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BannerComp link="uploads/banner1.png"></BannerComp>
        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper';
    import BannerComp from '@/components/BannerComp.vue'

    export default {
        name: "ReleasesComp",
        components: {
            BannerComp
        },
        mounted(){
            this.initSwiper();
        },
        methods: {
            initSwiper() {
                new Swiper('.swiper-container', {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    centeredSlides: true,
                    loop: true
                });

                const cards = document.querySelectorAll('.swiper-slide .card');
                cards.forEach(card => {
                    const image = card.querySelector('img');
                    image.crossOrigin = "Anonymous";
                    image.onload = () => {
                        const backgroundColor = this.getImageBackgroundColor(image);

                        card.querySelector('.card-name').style.backgroundColor = backgroundColor;
                        if (this.isLightColor(backgroundColor)) {
                            // Если цвет фона светлый, делаем текст темным
                            card.querySelector('.card-name').style.color = 'black';
                        } else {
                            // Иначе, оставляем текст белым
                            card.querySelector('.card-name').style.color = 'rgba(255, 255, 255, 0.9)';
                        }
                    };
                });
            },
            getImageBackgroundColor(image) {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                context.drawImage(image, 0, 0, 1, 1);
                const pixelData = context.getImageData(0, 0, 1, 1).data;
                return `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
            },
            isLightColor(color) {
                const rgb = color.match(/\d+/g);
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                return brightness > 125;
            }
        }
    }
</script>

<style scoped lang="scss">
.section__container{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .swiper-container {
        width: 100%;
        overflow: hidden;

        .swiper-wrapper {
            display: flex;
        }

        .swiper-slide {
            flex-shrink: 0;

            .card{
                border-radius: 0.75rem;
                overflow: hidden;
                display: flex;
                flex-direction: column;

                img{
                    width: 175px;
                    height: 175px;
                    box-shadow: inset -1px 1px 3px rgba(159, 192, 255, 0.2), inset -3px -3px 3px rgba(0, 0, 0, 0.2), inset 3px 3px 3px rgba(255, 255, 255, 0.2);
                }

                &-name{
                    width: inherit;
                    padding: 0.5rem;
                    padding-bottom: 0.75rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.2rem;
                    color: #FFF;
                    box-shadow: inset 1px -1px 3px rgba(159, 192, 255, 0.2), inset -3px -3px 3px rgba(0, 0, 0, 0.2), inset 3px -3px 3px rgba(255, 255, 255, 0.2);
                
                    & h3{
                        font-size: 12px;
                        font-weight: 500;
                    }

                    & p{
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>