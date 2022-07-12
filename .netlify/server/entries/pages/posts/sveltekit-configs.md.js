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
  default: () => Sveltekit_configs,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_51f42298 = require("../../../immutable/chunks/index-51f42298.js");
var import_Layout_svelte = __toESM(require("./Layout.svelte.js"));
const metadata = {
  "title": "Configuring SvelteKit",
  "date": "2022-07-11T00:00:00.000Z",
  "tags": ["config", "svelte-kit", "coding"]
};
const Sveltekit_configs = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_51f42298.v)(import_Layout_svelte.default, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>At this time, the summer of 2022, SvelteKit is still in beta. I am still using it for all of my projects, and I am trying to get a real in depth understanding of how it works.</p>
<p>I like to use a lib file for my header, footer and any components I need. The items inside of the lib folder are accessible using $lib rather than the path to said item. Below is an example:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">"$lib/header.svelte"</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In order for this feature to work, at this time, you have to specify the directory you want to use inside of the config file. In the config file there is a config object, and inside is the kit object.
To signify the library add the files element as shown below.</p>
<p><strong>svelte.config.js</strong></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">	<span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
			<span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token string">"src/lib"</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`}<!-- HTML_TAG_END --></pre>
<p>For an example of the config file and all of the options go to the <a href="${"https://kit.svelte.dev/docs/configuration"}" rel="${"nofollow"}">SvelteKit Docs</a></p>
<p>Once you add the files value to the config, then any component within that folder is accessible using $lib.</p>`;
    }
  })}`;
});
