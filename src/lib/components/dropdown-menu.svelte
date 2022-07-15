<script>
    import { toggle }  from "../../stores/toggle"

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Posts",
            path: "/posts"
        }
    ]
</script>

<div class="overlay" on:click={() => toggle.set(false)}>
    <nav>
        {#each links as {title, path}}
            <a href={path}>{title}</a>
        {/each}
    </nav>

</div>

<style>
    .overlay {
        /* width: 90vw; */
        background-color: var(--clr-black-blue);
        color: var(--clr-blue-grey-xlt);
        /* margin: -0 auto; */
        /* display: grid; */
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 90%;
    }

    a {
        margin: .25rem;
        padding: .5rem;
        font-size: 2rem;
        color: var(--clr-grey-blue-xlt)
    }

</style>