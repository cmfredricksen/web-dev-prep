<script>
    import "../global.css"
    import Header from "$lib/header.svelte"
    import Footer from "$lib/footer.svelte";
</script>


<Header />
<div class="wrapper">
    <slot />
</div>

<Footer />

<style>
    .wrapper {
        width: 80%;
        margin: 0 auto;
        padding: 1rem 2rem;
        border-left: 2px dotted var(--clr-black-blue);
    }

    @media only screen and (max-width: 720px) {
        .wrapper {
            padding: .5rem 0;
            border-left: none;
        }
    }
</style>
