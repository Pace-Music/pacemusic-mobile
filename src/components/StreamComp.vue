<script>
export default {
    name: "MainStreamComp",
    components: {
    },
    data() {
        return {
            arrows: []
        };
    },
    mounted() {
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
                }, delay + 1500); // задержка удаления цвета
            })(i, delay);
            delay += 100; // увеличиваем delay для каждой стрелки
        }
        setTimeout(() => {
            this.changeColor()
        }, delay - 1000); // учитываем задержку удаления цвета и повторяем вызов changeColor
    }
}

}
</script>



<template>
    <section class="section" id="stream">
        <div class="section-description">
            <p class="section-descript">Станции для Вас</p>
            <h2 class="section-title"><a href="/">В потоке<i class="arrow"></i></a></h2>
        </div>

        <!-- <div class="section__container">
            <div class="cards">
                <div class="cards-container swiper-wrapper">
                    <div class="card swiper-slide">
                        <img src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="">
                        <div class="card-name">
                            <h3>BlackPink</h3>
                            <p>и другие</p>
                        </div>
                    </div>
                </div>
                <div class="scroll-bar">
                    <i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i><i class="arrow"></i>
                </div>
            </div>
        </div> -->

        <SwiperComp></SwiperComp>
    </section>
</template>

<style lang="scss" scoped>
    #stream{
        .section__container{
            display: flex;
            flex-direction: column;

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
