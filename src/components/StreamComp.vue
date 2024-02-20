<script>
    import Swiper from 'swiper';
    import BannerCompVue from '@/components/BannerComp.vue'

    export default {
        name: "MainStreamComp",
        data() {
            return {
                arrows: [],
            };
        },
        components: {
            BannerCompVue
        },
        mounted() {
            const images = document.querySelectorAll('.swiper-container img');
            let loadedImages = 0;
            images.forEach(image => {
                image.onload = () => {
                    loadedImages++;
                    if (loadedImages === images.length) {
                        this.initSwiper();
                    }
                };
            });

            this.arrows = document.querySelectorAll('.arrow');
            this.changeColor();
        },
        methods: {
            changeColor() {
                let delay = 1000;
                for (let i = this.arrows.length - 1; i >= 0; i--) {
                    ((index, delay) => {
                        setTimeout(() => {
                            this.arrows[index].classList.add('active');
                        }, delay);
                        setTimeout(() => {
                            this.arrows[index].classList.remove('active'); // добавлен 'active'
                        }, delay + 2000); // задержка удаления цвета
                    })(i, delay);
                    delay += 100; // увеличиваем delay для каждой стрелки
                }
                setTimeout(() => {
                    this.changeColor()
                }, delay); // учитываем задержку удаления цвета и повторяем вызов changeColor
            },
            initSwiper() {
            // Инициализируем Swiper после загрузки всех изображений
                new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    rtl: true,
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    centeredSlides: true,
                    loop: true,
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: false,
                    },
                });
            },
        }

    }
</script>



<template>
    <section class="section" id="stream">
        <div class="section-description">
            <p class="section-descript">Станции для Вас</p>
            <h2 class="section-title"><a href="/">В потоке<i class="arrow"></i></a></h2>
        </div>

        <div class="section__container">
            <div class="cards">
                <div class="cards-container swiper-container">
                    <div class="swiper-wrapper">
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
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
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
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
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
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
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
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
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
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
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
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
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
                                <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                                <div class="card-name">
                                    <h3>BlackPink</h3>
                                    <p>и другие</p>
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
                
                <div class="scroll-bar">
                    <i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i>
                </div>
            </div>
            <BannerCompVue link="/uploads/banner.png"></BannerCompVue>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #stream{
        .section__container{
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .swiper-container {
                width: 100%;
                overflow: hidden;
        
                .swiper-wrapper {
                    display: flex;
                    padding: 0 10px;
                }
        
                .swiper-slide {
                    width: 190px;
                    height: 100px;
                    flex-shrink: 0;
                    transform: scale(0.8);
                    z-index: 4;
                    transition: 0.5s linear all;
                    margin: 0 -60px;
                    
                    &.swiper-slide-active {
                        transform: scale(1); /* Возвращаем активному слайду полный размер */
                        z-index: 6;
                    }

                    .card{
                        width: inherit;
                        height: inherit;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        
                        img{
                            width: inherit;
                            border-radius: 0.75rem;
                            height: inherit;
                        }

                        &-name{
                            position: absolute;
                            user-select: none;
                        }
                    }
                }

                .swiper-slide.swiper-slide-next, .swiper-slide.swiper-slide-prev{
                    transform: scale(0.9);
                    z-index: 5;
                }
            }

            & .cards{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;

                &-container{
                    width: 100%;
                }
            }
        }     
    }
</style>
