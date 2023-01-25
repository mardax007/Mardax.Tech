<script lang="ts">
    export let project: Project;

    interface Project {
        id?: string;
        title: string;
        textDate: string;
        date: Date;
        description: string;
        image: string;
        links: link[];
    }

    interface link {
        name: string;
        icon: string;
        url: string;
    }
</script>

{#if project}
    <div class="project">
        <div id="top">
            <div id="left">
                <p>{project.textDate}</p>
                <h1>{project.title}</h1>
            </div>
            <div id="right">
                <p>{project.description}</p>
                <div id="links">
                    {#each project.links as link}
                        <a href={link.url}>
                            <img src={link.icon} alt={link.name}>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
        <a href="/project?{project.id ?? project.title}">
            <img src="https://res.cloudinary.com/braydoncoyer/image/upload/v1670723660/photo-1550684848-86a5d8727436_j4pgmt.jpg" alt="">
        </a>
    </div>
{/if}

<style lang="scss">
    .project {
        width: 80%;
        color: white;
        margin: 0 auto;

        backdrop-filter: blur(2px);
        box-shadow: 2px 3px 10px 5px rgba(0,0,0,0.75);
        background-color: #131314;
        padding: 1vw 2vw;
        border-radius: 15px;

        margin-bottom: 5vh;

        #top {
            display: grid;
            grid-template-columns: 35% 65%;

            #left {
                h1 {
                    font-size: calc(2.5vw + 1.5vh);
                    margin: 0 auto;
                }

                p {
                    font-size: calc(1.5vw + 1vh);
                    margin: 0 auto;
                }
            }

            #right {
                p {
                    font-size: calc(1vw + 1vh);
                    line-height: calc(1vw + 1vh);
                    margin: 0;
                }

                #links {
                    margin-top: calc(.25vh + .25vw);
                    margin-bottom: calc(1vh + 1vw);

                    img {
                        height: calc(.5vw + 5vh);
                        width: calc(.5vw + 5vh);
                        fill: white;
                    }
                }
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
        }

        @media (max-width: 1000px) {
            #top {
                display: block;

                #right {
                    margin-top: 1vh;
                    p {
                        font-size: calc(1vw + 1.5vh);
                        line-height: calc(1vw + 1.5vh);
                        margin: 0 auto;
                    }
                }
            }

            img {
                margin-top: calc(1vh + 1vw);
            }
        }

        padding-bottom: calc(1vh + 1vw);
    }
</style>