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
  default: () => Posts,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_51f42298 = require("../../../immutable/chunks/index-51f42298.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-1hnfwau{margin:.5rem 0;display:flex;flex-direction:column}.title-link.svelte-1hnfwau{margin:.75rem 0 .5rem;color:var(clr-black-blue)}.title-link.svelte-1hnfwau:hover{color:var(--clr-grey-blue-med)}.tag.svelte-1hnfwau{text-decoration:none;color:var(--clr-black-blue-lt);font-weight:bold}.tag.svelte-1hnfwau:hover{color:var(--clr-grey-blue-med)}",
  map: null
};
const allPosts = { "./deploy-netlify.md": () => Promise.resolve().then(() => __toESM(require("./deploy-netlify.md.js"))), "./sveltekit-configs.md": () => Promise.resolve().then(() => __toESM(require("./sveltekit-configs.md.js"))), "./vim-key-bindings.md": () => Promise.resolve().then(() => __toESM(require("./vim-key-bindings.md.js"))) };
let body = [];
for (let path in allPosts) {
  body.push(allPosts[path]().then(({ metadata }) => {
    return { path, metadata };
  }));
}
const load = async () => {
  const posts = await Promise.all(body);
  return { props: { posts } };
};
const Posts = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  const dateSorted = posts.sort((post2, post1) => {
    return new Date(post1.metadata.date) - new Date(post2.metadata.date);
  });
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<ul>${(0, import_index_51f42298.e)(dateSorted, ({ path, metadata: { title, tags, date } }) => {
    return `<li class="${"svelte-1hnfwau"}"><a class="${"title-link svelte-1hnfwau"}"${(0, import_index_51f42298.b)("href", `/posts/${path.replace(".md", "")}`, 0)}>${(0, import_index_51f42298.d)(title)}</a>
            <small class="${"date"}">${(0, import_index_51f42298.d)(new Date(date).toDateString())}</small>
            <small><p>tags: 
                ${(0, import_index_51f42298.e)(tags, (tag) => {
      return `<a class="${"tag svelte-1hnfwau"}"${(0, import_index_51f42298.b)("href", `/tags/${tag}`, 0)}>#${(0, import_index_51f42298.d)(tag)} </a>`;
    })}
                </p></small>
        </li>`;
  })}
</ul>`;
});
