<script context="module">
    const allPosts = import.meta.glob("./*.md");

     let body = []
    for(let path in allPosts) {
        body.push(
            allPosts[path]().then(({ metadata }) => {
                return {path, metadata}
            })
        );
    }
    export const load = async () => {
        const posts = await Promise.all(body);
        
        return {
            props: {
                posts
            }
        }
        
    }
</script>
<script>
    export let posts;
        const dateSorted = posts.sort((post2, post1) => {
        return new Date(post1.metadata.date) - new Date(post2.metadata.date)
    })
</script>

<svelte:head>
    <title>Web Dev Prep | Posts</title>
</svelte:head>

<ul>
    {#each dateSorted as { path, metadata: {title, tags, date}}}
    <li>
    <a class="title-link" href={`/posts/${path.replace(".md", "")}`}>{title}</a>
            <small class="date">{ new Date(date).toDateString() }</small>
            <small>
                <p>
                    tags: 
                    {#each tags as tag}
                    <a class="tag" href={`/tags/${tag}`}> #{tag} </a>
                    {/each}
                </p>
            </small>
    </li>
    {/each}
</ul>


<style>
    li {
        margin: .5rem 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }

    p, small {
        text-decoration: none;
    }
    
    li:nth-child(odd) {
        background-color: var(--clr-black-blue-25);
    }
    .title-link  {
        margin: .75rem 0 .5rem;
        color: var(clr-black-blue);
        text-decoration: underline;
    }
    .title-link:hover {
        color: var(--clr-accent);
    }
    /* .date {
        color: var(--clr-accent);
    }
    .tag {
        text-decoration: none;
        font-weight: normal;
        color: var(--clr-grey-blue-xlt);
        background-color: var(--clr-black-blue-50);
        padding: 0 .25rem;
    }
    .tag:hover {
        color: var(--clr-accent);
    } */
</style>