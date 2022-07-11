<script>
    const links = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/about-wdp",
            title: "About Web Dev Prep"
        },
        {
            path: "/posts",
            title: "Posts"
        }
    ]
    
</script>


<nav>
    {#each links as {path, title}}
    <a href={path}>{title}</a>
    {/each}
</nav>

<style>
    nav {
        margin: 0 2rem;
    }
    a {
        margin: 0 1rem;
        color: var(--clr-grey-blue-lt);
        text-decoration: none;
    }
    a:hover {
        color: var(--clr-grey-blue-xlt);
    }
</style>