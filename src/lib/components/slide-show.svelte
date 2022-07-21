<script>
    const images = [
        {
            id: 1,
            src: "../../../static/images/age-appliance.jpg",
            alt: "meme age appliance"
        },
        {
            id: 2,
            src: "../../../static/images/movie-marathon.jpg",
            alt: "meme LOTR movie"
        },
        {
            id: 3,
            src: "../../../static/images/spock-jim.jpg",
            alt: "meme Spock Jim"
        }
    ]
</script>


<div class="slide-show-container">
    {#each images as {id, src, alt}}
        <img src={src} alt={alt}>
    {/each}
</div>