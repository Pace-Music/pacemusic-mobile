<template>
    <div class="banner">
        <div class="card" :style="{ backgroundColor: imageBackgroundColor }">
            <header class="card__header">
                <div class="icon">
                    <pace class="icon-img" color="#FFFFFF" opacity='1'></pace>
                    <h3 class="icon-name">Pace Music</h3>
                </div>
            </header>
            <img class="banner_img" :src="imageUrl" alt="banner" @load="getImageBackgroundColor">
        </div>
    </div>
</template>

<script>
    import pace from '@/assets/icons/pace.vue'

    export default {
        name:"BannerComp",
        components: {
            pace
        },
        props: {
            link: {
                type: String,
            }
        },
        data() {
            return {
                imageUrl: this.link,
                imageBackgroundColor: null
            };
        },
        methods: {
            getImageBackgroundColor(event) {
                // Создаем виртуальный холст
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                // Получаем ширину и высоту изображения
                const width = event.target.width;
                const height = event.target.height;

                // Загружаем картинку на холст
                context.drawImage(event.target, 0, 0, 1, 1);

                // Получаем пиксель в координатах (width - 1, height - 1) (правый нижний угол)
                const pixelData = context.getImageData(width - 1, height - 1, 1, 1).data;

                // Преобразуем цвет в формат RGB
                const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

                // Устанавливаем цвет как задний фон
                this.imageBackgroundColor = color;
            },
        }
    }
</script>

<style lang="scss" scoped>
.banner{
    width: 100%;
    height: auto;

    & .card{
        width: inherit;
        display: flex;
        flex-direction: column;
        border-radius: 0.75rem;
        padding: 0.5rem;
        gap: 1rem;

        & .card__header{
            width: inherit;
            padding: 0.75rem 0.5rem;

            & .icon{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.5rem;

                &-img{
                    height: 20px;
                }

                &-name{
                    font-size: 13px;
                    font-weight: 300;
                }
            }
        }

        & .banner_img{
            width: inherit;
            height: auto;
        }
    }
}
</style>