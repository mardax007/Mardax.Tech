<script lang="ts">
	import { onMount } from "svelte";
    let data;

    onMount(async () => {
        const response = await fetch("https://api.github.com/users/mardax007");
        data = await response.json();
        const repos = await fetch(data.repos_url);
        data.repos = await repos.json();
    });
</script>

{#if data}
    <div id="github">
        <h1>Mijn Github</h1>
        <div class="user">
            <a href={data.html_url} class="user-image">
                <img src={data.avatar_url} alt={data.login} class="user-avatar">
            </a>
            <div class="user-info">
                <h2><a href={data.html_url}>{data.name}</a></h2>
                <p><a href={data.html_url + "?tab=followers"}>{data.followers} followers</a> · <a href={data.html_url + "?tab=following"}>{data.following} following</a></p>
                <div id="repos">
                    <h3><a href={data.html_url + "?tab=repositories"}>Repositories</a></h3>
                    {#if data.repos}
                        <div id="repoList">
                            {#each data.repos.filter((a) => !a.archived && !a.disabled && a.visibility == "public").sort((a,b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()).slice(0, 5) as repo}
                                <span><a href={repo.html_url}>{repo.name}</a> </span>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @import '$lib/variables.scss';
    #github {
        color: $fontColor;
        background-color: $primaryColor;
        border-radius: 30px;
        width: 70%;
        padding: 1% 2.5%;
        backdrop-filter: blur(2px);
        box-shadow: 2px 3px 10px 5px rgba(0,0,0,0.75);
        max-width: 60vh;
        margin-bottom: 2.5%;
        margin-top: 5%;

        h1 {
            text-align: center;
            margin: 0 0 1vh 0;
            font-size: 3.75vh;
        }

        a {
            transition: 0.5s;
            color: $fontColor;
            text-decoration: none;
        }

        a:hover {
            scale: 1.1;
        }

        .user {
            display: flex;

            .user-avatar {
                border-radius: 50%;
                height: 10vh;
                width: 10vh;
                object-fit: cover;
            }

            .user-info {
                width: 100%;
                margin-left: 2.5%;

                h2 {
                    font-size: 2.5vh;
                    margin: 0;

                    a:hover {
                        text-decoration: underline;
                    }
                }

                p {
                    margin: 0;
                    transition: 0.5s;

                    a:hover {
                        text-decoration: underline;
                    }
                }

                #repos {
                    margin: .5vh 0 ;

                    h3 {
                        margin: 0;
                        margin-bottom: 1%;

                        a:hover {
                            text-decoration: underline;
                        }
                    }

                    #repoList {
                        span {
                            display: inline-flex;
                            text-align: center;
                            font-weight: 500;
                            padding: 1% 2%;
                            background-color: $secondaryColor;
                            border-radius: 30px;
                            margin: 0 .5vh .5vh 0;
                            font-size: 100%;
                            line-height: 100%;

                            a:hover {
                                scale: 1.1;
                            }
                        }
                    }
                }
            }
        }
    }
</style>