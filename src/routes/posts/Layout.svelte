<script>
    export let title;
    export let date;
    export let tags;
</script>

<div class="title-bar">
    <h2>{title}</h2>
    <p>{new Date(date).toDateString()}</p>
    {#each tags as tag}
    <a class="tag" href={`/tags/${tag}`}>#{tag} </a>
    {/each}
</div>

<slot />

<style>
    .title-bar {
        padding-bottom: 1rem;;
    }
</style>