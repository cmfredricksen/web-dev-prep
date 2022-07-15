<script>
    import Nav from "./nav.svelte"
    import { toggle } from "../stores/toggle"
    import DropdownMenu from "$lib/components/dropdown-menu.svelte";
    $toggle = false;
</script>

<header>
    <a href="/">
        <h1>Web Dev Prep</h1>
    </a>
    <Nav />
    <button on:click={() => toggle.set(!$toggle)} class="menu-button">&equiv; Menu</button>
    {#if $toggle}
        <DropdownMenu />
    {/if}
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

    .menu-button {
    width: 100%;
    background-color: var(--clr-black-blue);
    padding: .5rem 1rem;
    margin: .5rem auto;
    display: none;
    font-size: 1.5rem;
    color: var(--clr-grey-blue-xlt);
    border: none;
    }


    @media only screen and (max-width: 720px) {
        header {
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: .5rem 0;
        }

        h1 {
            margin: 1rem 0;
        }

        .menu-button {
            display: block;
        }
    }
</style>