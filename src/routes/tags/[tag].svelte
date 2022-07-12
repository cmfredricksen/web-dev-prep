<script context="module">
    const allPosts = import.meta.glob("../posts/*.md")
    
    let body = []
    for(let path in allPosts) {
        body.push(
            allPosts[path]().then(({ metadata }) => {
                return {path, metadata}
            })
        );
    }
    export const load = async ({params}) => {
        const posts = await Promise.all(body);
        const tag = params.tag
        const filteredPosts = posts.filter((post) => {
            return post.metadata.tags.includes(tag);
        })

        return {
            props: {
                filteredPosts,
                tag
            }
        }
        
    }
</script>
<script>
    export let filteredPosts;
    export let tag;
    console.log(filteredPosts)
</script>

<h1 class="title">#{tag}</h1>

<ul>
   {#each filteredPosts as { path, metadata: { title } }}
       <li>
           <a href={path
                .replace("./tags", "/")
                .replace(".md", "")
                }>{title}</a>
       </li>
   {/each} 

</ul>
