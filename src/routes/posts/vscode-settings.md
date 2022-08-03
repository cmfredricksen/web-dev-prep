---
title: Basic VSCode Settings
date: 2022-07-31
tags:
- vscode
- keybindings
- themes
- extensions
---

Setting up your editor for work is an art and a science, a constant evolution as your skills change and grow. These settings are based on using the editor for front-end web development as a beginner.

### General Settings

To open your settings: <code>ctrl + ,</code> or click on the gear icon in the lower left corner of the editor and select settings. I will just go over a few basic settings that I like. There are lots to choose from, so take your time and adjust things as you get more experience with coding.

The settings menu opens with Commonly Used settings listed on the left hand side. You can just find the listings you are looking for using the search bar.

- **Files Autosave**: I have mine sent to _On Focus Change_, which means that every time I leave a file, it auto saves.
- **Word Wrap**: _on_ The lines of code wrap to the next line rather than continue off the page.
- **Bracket Pair Colorization**: _on_ Makes code easier to read.
- **Terminal**: _integrated_ Allows you to use the terminal without leaving the editor, very handy!

### General Extensions

- **Live-Server**: The easiest way to open a development server so you can see your pages in the browser
- **themes/icons**: Purely subjective, choose whatever looks best to you. I change my themes regularly, and there are several I keep coming back to: _+Dark+ Theme_ | _Dracula Official_ | _Gruvbox Theme_ | _Github Theme_ I also use the default _Dark+_ quite a bit. The default icons are pretty good, but I like to change them up sometimes too.
- **Prettier**: Formats and cleans up your code, making it Prettier. Once you have installed the extension, in the default formatter setting choose Prettier. There are several options to explore, but the default settings are good to start.
- **Auto Rename Tags**: This is really handy! Everytime you rename an opening tag the corresponding closing tag changes too.
- **Intellisense for CSS**: Name completion in CSS
- **Path Intellisense**: This is one of my favorites, it Auto-completes path filenames.

### Some Favorites

- **CodeSnap**: Takes screenshots of selected code blocks.
- **Markdown All in One**: Converts markdown files to HTML or PDF and much more!
- **Rest Client**: For testing your routes without leaving the editor. <small><em>More for backend</em></small>
- **Vim**: Brings Vim Keybindings to VSCode, this is one I must have. It took me a while to learn enough keybindings to use it efficiently, but once you have the hang of it you will never go back!

Well there are some basic settings and commands for VSCode. There are numerous settings and extensions for all types of development needs! <em class="em-text">Front-End | Back-End | Full-Stack</em> I am most familiar with web development using HTML, CSS, JS and other related tools, VSCode meets and exceeds my needs. It is enjoyable and quite lovely to use.

I remember when I first used VSCode thinking I would never use half of the features, but more and more, as my skills grew, I started using additional features. Take your time getting to know your way around, it is worth the investment.

<style>
    code {
        background: var(--clr-black-blue-50);
        color: var(--clr-grey-blue-xlt);
        padding: .25rem;
    }
    ul {
        background: var(--clr-black-blue-50);
        padding: 1rem 0;
        margin: 1rem 0;
    }
    li {
        list-style: none;
        color: var(--clr-grey-blue-xlt);
        border-bottom: 2px dotted;
        padding:  1rem;
        line-height: 2rem;
    }
    li:last-child {
        border-bottom: none;
    }
    strong {
        color: var(--clr-black-blue);
    }
    em {
        background: var(--clr-black-blue-25);
        padding: .25rem .5rem;
        color: var(--clr-grey-blue-xlt);
    }
    p {
        line-height: 1.5;
    }
    em.em-text {
        background-color: var(--clr-black-blue-50);
    }
</style>



