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
  default: () => Deploy_netlify,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_51f42298 = require("../../../immutable/chunks/index-51f42298.js");
var import_Layout_svelte = __toESM(require("./Layout.svelte.js"));
const metadata = {
  "title": "Deploying Your SvelteKit App to Netlify",
  "date": "2022-07-12T00:00:00.000Z",
  "tags": ["deployment", "configuration"]
};
const Deploy_netlify = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_51f42298.v)(import_Layout_svelte.default, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>This is how to deploy your SvelteKit app using Netlify. You will need to have your app\u2019s code in a repository on GitHub. If you need help getting started with Git and/or GitHub please visit my site <a href="${"https://technotesbycmfred.netlify.app/"}" rel="${"nofollow"}">Beginner\u2019s Guide to Git &amp; GitHub</a>.</p>
<h3>Prepare the Code</h3>
<p>First you will have to prepare the code to be ready for Netlify.</p>
<ol><li>Install the <a href="${"https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify"}" rel="${"nofollow"}">netlify adapter</a><pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">npm i <span class="token operator">-</span><span class="token constant">D</span> @sveltejs<span class="token operator">/</span>adapter<span class="token operator">-</span>netlify</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Configure SvelteKit to use the Netlify Adapter
In <strong>svelte.config.js:</strong></li></ol>
<p>Before you add the Netlify adapter you will have the auto adapter that is installed when you initialize your SvelteKit project. Once you install the Netlify adapter your svelte.config.js will automatically update. At the Netlify adapter GitHub page they have an example including options you can use, but it will work as is.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> adapter <span class="token keyword">from</span> <span class="token string">'@sveltejs/adapter-netlify'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"3"}"><li>Make your <strong>netlify.toml</strong> file on the root of your project. </li></ol>
<pre class="${"language-toml"}"><!-- HTML_TAG_START -->${`<code class="language-toml"><span class="token punctuation">[</span><span class="token table class-name">build</span><span class="token punctuation">]</span>
  <span class="token key property">command</span> <span class="token punctuation">=</span> <span class="token string">"npm run build"</span>
  <span class="token key property">publish</span> <span class="token punctuation">=</span> <span class="token string">"build"</span></code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"4"}"><li>Build the app</li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">npm run build</code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })}`;
});
