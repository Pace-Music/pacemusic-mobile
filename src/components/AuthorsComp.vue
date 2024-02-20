<script>
    export default {
        name: "MainListenComp",
        props: {
            name: {
                type: String
            },
            link: {
                type: String
            }
        }
    }
</script>

<template>
    <section class="section section-listen">
        <h2 class="section-title"><a :href="link">{{ name }}<i class="arrow"></i></a></h2>

        <div class="section__container">
            <div class="cards">
                <a class="card">
                    <div class="card__img">
                        <img class="card__img-item" src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="Author">
                    </div>
                    <h3>Author</h3>
                </a>
                <a class="card">
                    <div class="card__img">
                        <img class="card__img-item" src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="Author">
                    </div>
                    <h3>Author</h3>
                </a>
                <a class="card">
                    <div class="card__img">
                        <img class="card__img-item" src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="Author">
                    </div>
                    <h3>Author</h3>
                </a>
                <a class="card">
                    <div class="card__img">
                        <img class="card__img-item" src="https://i.scdn.co/image/ab67706c0000da84c906393cd082eb6c0a31a5ab" alt="Author">
                    </div>
                    <h3>Author</h3>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .section-listen{
        padding-right: 0;
        padding-left: 0;

        .section-title{
            margin-left: 1.5rem;
        }

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
                gap: .75rem;
                overflow-x: scroll;
                padding-left: 0.25rem;
                padding-right: 1rem;
                padding-top: 2px;
                
                &::-webkit-scrollbar{
                    display: none;
                }

                & .card{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 4px;

                    &:first-child{
                        margin-left: 1.6rem;
                    }

                    &__img{
                        width: 150px;
                        height: 150px;
                        border-radius: 1rem;
                        position: relative;
                        box-shadow: inset 3px 3px 3px rgba(255, 255, 255, 0.2), -3px -3px 3px rgba(0, 0, 0, 0.2), -1px -1px 3px rgba(132, 181, 255, 0.25);
                        border-radius: 50%;
                        overflow: hidden;

                        &-item{
                            width: inherit;
                            height: inherit;
                        }
                    }

                    & h3{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 4px;
                        font-size: 14px;
                        font-weight: 300;
                        padding: 8px;
                    }
                }
            }
        }
    }
</style>
