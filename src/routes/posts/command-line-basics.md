---
title: Command Line Basics
date: 2022-07-15
tags: 
- command-line
- powershell
- bash
- terminal
---

### Learning how to use the command line and getting comfortable with it is a high priority if you want to develop websites. This one skill makes the work quicker, more efficient and much more enjoyable!

In my experience, the more I used my command line the more I understood how my computer works. It is easy to see where things are and to get organized. I just love it! I am currently using PowerShell 7, which is different from Windows Powershell. In most cases Powershell 7 can use the same commands as Bash.

| | | |
|---|---|---|
| COMMAND | POWERSHELL 7 | BASH |
| current directory | pwd | pwd |
| change directory | cd | cd|
| make directory | mkdir | mkdir |
| new file | ni | touch |
| copy | cp | cp |
| delete | del | rm |
| remove directory | rmdir | rmdir |
| move | mv | mv |
| list items | ls | ls |
| rename | rename-item | mv |

One thing I did was spent time moving around inside of my file system, and organizing things in a way that works for me. I cleaned up my system by deleting, moving and copying files. This is an ongoing project, but I am pretty pleased with how clean and organized everything is. There are no lost and hidden files that I have forgotten about clogging up my storage.

### Some Examples:

Most of the commands above need more, like a file or directory to act on. All of the commands above have different options and modifiers to make them more useful. Below I will show some simple examples of every day uses of the command line. Once you get the hang of these things then you can expand your knowledge as needed.

**cd** on it's own, takes you to your home directory.

<div class="example-container">
<small>Moves up one directory:</small>

```bash
cd ..
```

<small>moves up two directories and etc.</small>

```bash
cd ../..
```

<small><strong>cd path</strong> moves you to the specified directory. You can just name the folder you want if it is contained in the current directory, otherwise you have to show the path to the directory you want. Both are shown below. The third example is always valid, showing the complete path from <strong>c:</strong></small>

<div class="code-box">
    <p>cd folder-name</p>

    <p>cd desktop/folder-name</p>

    <p>cd c:/users/user-name/desktop/foldername</p>
</div>

<small>Making new files and directories is a constant in web development</small>

```bash
mkdir new-folder

#in POWERSHELL
ni file.txt 

# in BASH
touch file.txt
```
<small>Finally some examples of moving, copying and renaming files. You use the command followed by the file name, then the destination folder and it's path.</small>

<div class="code-box">

    <p>mv file.txt c:/users/user-name/destination-folder</p>

    <p>cp file.txt c:/users/user-name/destination-folder</p>

    <p><small>#rename in Powershell</small></p>

    <p>rename-item file.txt new-name.txt</p>

    <p><small>#rename in Bash</small></p>

    <p>mv file.txt new-name.txt</p>
</div>

#### BONUS 

In Powershell you can clear the recycle bin from the command line!

```bash
clear-recyclebin
```
You will be prompted if you want to clear all the folders in the recycle bin, just hit enter for yes and the recycle bin will be cleared!
</div>

<style>
    .example-container {
        padding: 2rem;
    }

    .code-box p {
        margin: .75rem 0;
    }

    small {
        font-family: var(--font-text);
    }

    @media only screen and (max-width: 720px) {
        .example-container {
            padding: 0;
        }
        .code-box p {
            margin: .75rem 0;
        }
    }
</style>