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
        display: flex;
        flex-direction: column;
    }
    .title-link  {
        margin: .75rem 0 .5rem;
        color: var(clr-black-blue);
    }
    .title-link:hover {
        color: var(--clr-accent);
    }
    .tag {
        text-decoration: none;
        color: var(--clr-black-blue-lt);
        font-weight: bold;
    }
    .tag:hover {
        color: var(--clr-accent);
    }
</style>