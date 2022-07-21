<script>
    import OutgoingLink from "$lib/components/outgoing-link.svelte";
</script>

<svelte:head>
    <title>
        Web Dev Prep | Home
    </title>
</svelte:head>


<h2>
    Welcome to Web Dev Prep School
</h2>

<section>
    <p>There is a lot more to learning web development than choosing a language and/or framework. You need to also learn how to use your computer, OS, version control and more. These other skills will make you a better developer, and make development more enjoyable.</p>
    
    <p>These topics are things to practice when you need a break from the language you are learning. Many of them you can also begin to implement even in your earlier work. You don't have to be a developer to get a lot of use out of these skills. Enjoy!</p>
</section>

<h3>Some topics that will be covered at Web Dev Prep</h3>

<ul>
    <li>Terminal, Command Prompt, Powershell, Bash</li>
    <li>VSCode, Extensions, Key Bindings</li>
    <li>Windows, MAC, Linux</li>
    <li>Node, NPM, Config Files</li>
    <li>Version Control, Git, GitHub</li>
    <li>Deployment, Continuous Integration</li>
</ul>

<h3>Other Sources:</h3>

<div class="outgoing-links-box">

    <OutgoingLink path="https://technotesbycmfred.netlify.app" title="Git & GitHub for Beginners" description="A beginner's guide to version control using Git & Github, deployed by me using Netlify." />
    
    <OutgoingLink path="https://freecodecamp.org" title="Free Code Camp" description="Follow the curriculum to learn web development and much more!" />
    
</div>

<style>
    @media only screen and (max-width: 720px) {
        h2 {
            text-align: center;
        }
    }
</style>
