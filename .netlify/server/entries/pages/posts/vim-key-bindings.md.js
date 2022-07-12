var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Vim_key_bindings,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_51f42298 = require("../../../immutable/chunks/index-51f42298.js");
var import_Layout_svelte = __toESM(require("./Layout.svelte.js"));
var vimKeyBindings_md_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-fus2kq{margin:.5rem 0}li.svelte-fus2kq{margin:1rem}",
  map: null
};
const metadata = {
  "title": "Why I Use Vim Key Bindings in VSCode & Obsidian",
  "date": "2022-05-13T00:00:00.000Z",
  "tags": ["obsidian", "vs-code", "coding", "writing"]
};
const Vim_key_bindings = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_51f42298.v)(import_Layout_svelte.default, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p class="${"svelte-fus2kq"}">It took me a while to learn how to use Vim key bindings, but now that I have gotten the hang of it I am never going back! In this article I will explain how I learned them, how they have helped me to be more efficient, and some tips to start incorporating Vim key bindings into your work flow.</p>
<h2>Vim Key Bindings</h2>
<p class="${"svelte-fus2kq"}">I want to specify, I am using the key bindings, not Vim. I have used Vim, but I use VSCode for coding, and luckily there is a Vim plugin to give you the best of both worlds. With the Vim plugin I can get the efficiency and quickness of using the keyboard with the amazing software that is VSCode. I don\u2019t need to use the mouse very much at all, which makes things quicker.</p>
<p class="${"svelte-fus2kq"}">I also started using Obsidian a few months ago, it is a markdown editor. I was delighted to see that you can turn on Vim key bindings in Obsidian also! </p>
<h2>Vim Basics</h2>
<p class="${"svelte-fus2kq"}">The way that Vim works is different than today\u2019s typical text editor, in that there are different <em>modes</em> you use the editor in. In each mode the keyboard is used differently. The main modes are <em>NORMAL</em> and <em>INSERT</em>. I am still learning new key bindings, there are so many! Plus you can make your own custom key bindings too. My advice is to start with the basics, and build on that.</p>
<p class="${"svelte-fus2kq"}"><strong>Normal Mode</strong>: You enter Normal mode by pushing the escape key. In Normal mode you cannot enter any text, the keys are used for navigation and commands.</p>
<p class="${"svelte-fus2kq"}"><strong>Insert Mode</strong>: You enter Insert mode by pushing i or a. Using i <em>inserts</em> before the cursor, using a <em>appends</em> after the cursor. There are more ways to insert, which I will touch on later.</p>
<p class="${"svelte-fus2kq"}"><strong>Visual Mode</strong>: You enter Visual mode by pushing v. Using v allows you to select text one character at a time. If you use SHIFT + V, you will select the line and by using keys or arrows you can select all of the lines you need to.</p>
<blockquote><p class="${"svelte-fus2kq"}">When you are just getting started you can work in Insert mode, it is the same as not using Vim key bindings. </p></blockquote>
<h3>Some Basic Key Bindings</h3>
<table><thead><tr><th></th>
<th></th>
<th></th></tr></thead>
<tbody><tr><td>KEY</td>
<td>COMMAND</td>
<td>MOVEMENT</td></tr>
<tr><td>i</td>
<td>insert</td>
<td>inserts before the cursor</td></tr>
<tr><td>esc</td>
<td>normal mode</td>
<td>switches to normal mode</td></tr>
<tr><td>a</td>
<td>append</td>
<td>appends after the cursor</td></tr>
<tr><td>c</td>
<td>change</td>
<td>changes selected text</td></tr>
<tr><td>r</td>
<td>replace</td>
<td>replaces character under cursor</td></tr>
<tr><td>d</td>
<td>delete</td>
<td>deletes selected text, copies to Vim clipboard</td></tr>
<tr><td>dd</td>
<td>delete line</td>
<td>deletes line</td></tr>
<tr><td>y</td>
<td>yank</td>
<td>copies selected text to Vim clipboard</td></tr>
<tr><td>yy</td>
<td>yank line</td>
<td>copies line</td></tr>
<tr><td>p</td>
<td>put</td>
<td>pastes contents of Vim clipboard one line below</td></tr>
<tr><td>shift + p</td>
<td>put above</td>
<td>pastes contents of Vim clipboard one line above</td></tr>
<tr><td>w</td>
<td>word</td>
<td>moves cursor forward 1 word, lands on first letter</td></tr>
<tr><td>b</td>
<td>back</td>
<td>moves back 1 word, lands on first letter</td></tr>
<tr><td>e</td>
<td>end</td>
<td>moves forward 1 word, lands on last letter</td></tr>
<tr><td>gg</td>
<td>top</td>
<td>moves to top of page</td></tr>
<tr><td>shift + G</td>
<td>bottom</td>
<td>moves to bottom of page</td></tr>
<tr><td>0</td>
<td>beginning</td>
<td>moves to beginning of line</td></tr>
<tr><td>$</td>
<td>end of line</td>
<td>moves cursor to end of line</td></tr></tbody></table>
<hr>
<blockquote><p class="${"svelte-fus2kq"}">Puncuation and symbols are included as words when navigating</p></blockquote>
<h3>Combining Adds Power</h3>
<p class="${"svelte-fus2kq"}">You can also combine these letters allowing you to get a lot done with a few key presses. Push them one at a time! For example:</p>
<ul><li class="${"svelte-fus2kq"}"><strong>d3b</strong> = delete three words back</li>
<li class="${"svelte-fus2kq"}"><strong>ci\u201D</strong> = change inside of quotes</li>
<li class="${"svelte-fus2kq"}"><strong>ci]</strong> = change inside of brackets</li></ul>
<h2>My Favorite Key Bindings</h2>
<p class="${"svelte-fus2kq"}">I want to share my most oft used key bindings, they make life easier! Use these when your editor is in <strong>Normal Mode</strong>.</p>
<ol><li class="${"svelte-fus2kq"}"><strong>o / shift + o :</strong> Both of these commands insert a line, o inserts one below the cursor, shift + o inserts one above the cursor. <em>I use these ALL THE TIME!</em></li>
<li class="${"svelte-fus2kq"}"><strong>shift + v :</strong> selects the line your cursor is on. Once I select a line I can yank it, delete it, expand my selection up or down and change it also.</li></ol>`;
    }
  })}`;
});
