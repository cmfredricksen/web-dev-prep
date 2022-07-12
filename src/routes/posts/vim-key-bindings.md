---
title: Why I Use Vim Key Bindings in VSCode & Obsidian
date: 2022-05-13
tags:
    - obsidian
    - vs-code
    - coding
    - writing
---


It took me a while to learn how to use Vim key bindings, but now that I have gotten the hang of it I am never going back! In this article I will explain how I learned them, how they have helped me to be more efficient, and some tips to start incorporating Vim key bindings into your work flow.

## Vim Key Bindings

I want to specify, I am using the key bindings, not Vim. I have used Vim, but I use VSCode for coding, and luckily there is a Vim plugin to give you the best of both worlds. With the Vim plugin I can get the efficiency and quickness of using the keyboard with the amazing software that is VSCode. I don't need to use the mouse very much at all, which makes things quicker.

I also started using Obsidian a few months ago, it is a markdown editor. I was delighted to see that you can turn on Vim key bindings in Obsidian also! 

## Vim Basics

The way that Vim works is different than today's typical text editor, in that there are different _modes_ you use the editor in. In each mode the keyboard is used differently. The main modes are _NORMAL_ and _INSERT_. I am still learning new key bindings, there are so many! Plus you can make your own custom key bindings too. My advice is to start with the basics, and build on that.

**Normal Mode**: You enter Normal mode by pushing the escape key. In Normal mode you cannot enter any text, the keys are used for navigation and commands.

**Insert Mode**: You enter Insert mode by pushing i or a. Using i _inserts_ before the cursor, using a _appends_ after the cursor. There are more ways to insert, which I will touch on later.

**Visual Mode**: You enter Visual mode by pushing v. Using v allows you to select text one character at a time. If you use SHIFT + V, you will select the line and by using keys or arrows you can select all of the lines you need to.

> When you are just getting started you can work in Insert mode, it is the same as not using Vim key bindings. 

### Some Basic Key Bindings

| key | command | movement |
|---|---|---|
| y | yank | copies selected text to Vim clipboard |
| yy | yank line | copies line }
| p | put | pastes contents of Vim clipboard one line below |
| shift + p | put above | pastes contents of Vim clipboard one line above |
| d | delete | deletes selected text, copies to Vim clipboard |
| dd | delete line | deletes line |
| i | insert | inserts before the cursor |
| a | append | appends after the cursor |
| c | change | changes selected text |
| r | replace | replaces character under cursor |

| key | command | movement |
|---|---|---|
| w | word | moves cursor forward 1 word, lands on first letter |
| b | back | moves back 1 word, lands on first letter |
| e | end | moves forward 1 word, lands on last letter |
| gg | top |moves to top of page |
| shift + G | bottom | moves to bottom of page |
| 0 | beginning | moves to beginning of line |
| $ | end of line | moves cursor to end of line |
---


> Puncuation and symbols are included as words when navigating

### Combining Adds Power

You can also combine these letters allowing you to get a lot done with a few key presses. Push them one at a time! For example:

d b 3 = delete three words back

## My Favorite Key Bindings

I want to share my most oft used key bindings, they make life easier!

1. o / shift + o : Both of these commands insert a line, o inserts one below the cursor, shift + o inserts one above the cursor. _I use these ALL THE TIME!
2. shift + v : selects the line your cursor is on. Once I select a line I can yank it, delete it, expand my selection up or down and change it also.







