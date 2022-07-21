<script>
    export let title;
    export let path;
    export let description;
</script>


<div class="outgoing-link">
    <button>
        <a href={path} target="_blank">{title}</a>
    </button>

    <small>{description}</small>
</div>

<style>
    .outgoing-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 45%;
        margin: .5rem 0;
        padding: 1rem;
        border: 3px solid var(--clr-grey-blue-xlt);
        border-left: 5px solid var(--clr-black-blue);
        border-radius: .5rem;
        background-color: var(--clr-black-blue-25);
    }

    @media only screen and (max-width: 720px) {
        .outgoing-link {
            width: 100%;
        }
    }
</style>