<script>
    export let title;
    export let date;
    export let tags;
</script>

<h2>{title}</h2>
<p>{new Date(date).toDateString()}</p>
<small>#{tags.join(", ")}</small>

<slot />

<style>
</style>