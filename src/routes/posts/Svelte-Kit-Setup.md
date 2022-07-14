---
title: How to Setup a Skeleton Project in SvelteKit
tags:
- coding
- svelte-kit
date: 2022-06-11
---

### What you need to know

- JavaScript
- HTML
- CSS
- NPM

This is a simple tutorial that you can follow along with to start a bare bones project in [SvelteKit](https://kit.svelte.dev). You can follow along, and then try repeating it on your own. Just learning how to set up a project will help you get proficient at building web sites using SvelteKit. 

(_You can also follow the instructions to get started at [SvelteKit](https://kit.svelte.dev)_)

You will need to have Node.js installed on your computer. 

We are going to start work in the terminal. I am using Windows Terminal with PowerShell 7, but you can use any terminal you want for this.

### Let's get started...
First you need to navigate to the folder you want to put your project in. I start my projects on the desktop. In Windows you can find the desktop at:

`c:/users/your-name/desktop`

Once you are in the right directory, we are going to make a project folder. I am calling mine my-app. 

```bash
mkdir my-app
```

Then you can move into the folder:

`cd my-app`

Once you are in the directory you want, you are going to initialize your project:

```bash
npm create svelte@latest
```

You will be prompted to make some choices, for this tutorial we are going with basics but you can choose what you want.

First you will be asked if you want to install in the folder you are in, _YES_

Then you will be asked if you want to a demo project or a skeleton project, _SKELETON_

Then you will be asked if you want to use: 
TypeScript: **no**
ESLint: **no**
Prettier: **yes*** (I chose to use Prettier because it keeps code formatted as you save)

Then your project folder will be set up.

### Install Dependencies

Next you have to install the dependencies:

```bash
npm install
```

### Optional Step!
You can initiate a Git Repository if you want:

```bash
git init && git add -A && git commit -m "initial commit"
```

### Open Code Editor && Open Server
Next we open our code editor and then open the server. I do it in this order because I like to run the server in my Windows Terminal and use the built-in terminal for everything else. Open in VSCode:

```bash
code .
```

Now run the server:

```bash
npm run dev -- --open
```

And that's it! Your project is open and running. 


