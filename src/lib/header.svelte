<script>
    import Nav from "./nav.svelte"
</script>

<header>
    <a href="/">
        <h1>Web Dev Prep</h1>
    </a>
    <Nav />
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: baseline;
        padding: 2rem 0;
        border-bottom: 2px solid var(--clr-black-blue);
        background-color: var(--clr-black-blue);
        color: var(--clr-grey-blue-lt);
    }
    h1 {
        color: var(--clr-grey-blue-lt);
    }
    h1:hover {
        color: var(--clr-grey-blue-xlt);
    }
</style>