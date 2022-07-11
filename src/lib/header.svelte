<script>
    import Nav from "./nav.svelte"
</script>

<header>
    <h1>Web Dev Prep</h1>
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
</style>