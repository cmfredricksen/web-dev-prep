<script>
    import OutgoingLink from "$lib/components/outgoing-link.svelte";
</script>

<svelte:head>
    <title>Web Dev Prep | About</title>
</svelte:head>

<h2>About Web Dev Prep</h2>

<p>This website is based on my notes as I am learning web development. I have a lot of experience building websites using platforms like WordPress, Shopify, Wix and others. A few years ago I decided to learn how to code a website from scratch, starting with HTML on <a href="https://www.w3schools.com/html/">W3 Schools</a>. Once I got a little way into that I downloaded <a href="https://code.visualstudio.com/">VSCode</a> and set it up.</p>

<p>Since that time I have been learning non-stop and I am surprised at the skills I have picked up and how much easier it is to work with good basic skills. VSCode is a powerful piece of software that is a joy to use, but it took me quite a while to learn how to really use it to full benefit.</p>

<p>I am building this site as a place to share my notes for other beginners, and also as a quick reference for myself. One aspect of coding is looking things up. Well I often go look at my own code base on GitHub to find answers because it is quicker and reinforces what I am learning.</p>

<p>I also want to share the joy of these basic building blocks of coding. Terminal, VSCode, Vim, GitHub and etc. etc.</p>

<h3>TIP: When you are struggling with a coding concept and ready to take a break, use that time to get better at basic skills by learning or practicing them. Some time here and there will eventually add up!</h3>

<div class="outgoing-links-box">
    <OutgoingLink title="My Webfolio" path="https://webfolio-cmfredricksen.netlify.app/" description="My web development portfolio containing sites built using SvelteKit and deployed using Netlify."></OutgoingLink>
    
    <OutgoingLink title="My GitHub Page" path="https://github.com/cmfredricksen" description="My GitHub account which contains 50 repos as of today!" />
</div>

<style>
    p {
        margin: 1rem;
    }

    @media only screen and (max-width: 720px) {
        h2 {
            text-align: center;
        }
    }
</style>