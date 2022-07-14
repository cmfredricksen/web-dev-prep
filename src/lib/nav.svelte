<script>
    import { page } from "$app/stores"
    const links = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/about",
            title: "About"
        },
        {
            path: "/posts",
            title: "Posts"
        }
    ]
    
</script>


<nav>
    {#each links as {path, title}}
    <a class:active={$page.url.pathname === path} href={path}>{title}</a>
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
    .active {
        color: var(--clr-grey-blue-xlt);
        text-decoration: underline;
    }

    @media only screen and (max-width: 720px) {
        nav {
            display: flex;
            flex-direction: column;
            margin: 1rem 2rem;
        }
        a {
            margin: 1rem auto;
        }
    }
</style>