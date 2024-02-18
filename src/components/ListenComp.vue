<script>
    export default {
        name: "MainListenComp"
    }
</script>

<template>
    <section class="section" id="listen">
        <h2 class="section-title"><a href="/">Слушать снова<i class="arrow"></i></a></h2>

        <div class="section__container">
            <div class="cards">
                <a class="card">
                    <div class="card__img">
                        <img class="card__img-item" src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="ВОЖ">
                        <img class="card__img-src" src="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png" alt="Spotify">
                    </div>
                    <h3><i class="subtract"></i><p>Название песни</p></h3>
                </a>
                <a class="card">
                    <div class="card__img">
                        <img class="card__img-item" src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="ВОЖ">
                        <img class="card__img-src" src="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png" alt="Spotify">
                    </div>
                    <h3><i class="subtract"></i><p>Название песни</p></h3>
                </a>
                <a class="card">
                    <div class="card__img">
                        <img class="card__img-item" src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="ВОЖ">
                        <img class="card__img-src" src="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png" alt="Spotify">
                    </div>
                    <h3><i class="subtract"></i><p>Название песни</p></h3>
                </a>
                <a class="card">
                    <div class="card__img">
                        <img class="card__img-item" src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="ВОЖ">
                        <img class="card__img-src" src="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png" alt="Spotify">
                    </div>
                    <h3><i class="subtract"></i><p>Название песни</p></h3>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #listen{
        padding-right: 0;

        & .section__container{
            width: 100%;
            height: auto;

            & .cards{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 6px;
                overflow-x: scroll;
                padding-left: 4px;
                padding-top: 2px;
                
                &::-webkit-scrollbar{
                    display: none;
                }

                & .card{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 4px;

                    &__img{
                        width: 150px;
                        height: 150px;
                        border-radius: 1rem;
                        position: relative;
                        box-shadow: inset 3px 3px 3px rgba(255, 255, 255, 0.2), -3px -3px 3px rgba(0, 0, 0, 0.2), -1px -1px 3px rgba(132, 181, 255, 0.25);
                        
                        &-item{
                            width: inherit;
                            height: inherit;
                        }

                        &-src{
                            width: 15%;
                            height: 15%;
                            position: absolute;
                            right: 1rem;
                            top: 1rem;
                        }
                    }

                    & h3{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 4px;
                        font-size: 14px;
                        padding: 8px;
                    }
                }
            }
        }
    }
</style>
