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
  default: () => U5Btagu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_51f42298 = require("../../../immutable/chunks/index-51f42298.js");
const allPosts = { "../posts/deploy-netlify.md": () => Promise.resolve().then(() => __toESM(require("../posts/deploy-netlify.md.js"))), "../posts/sveltekit-configs.md": () => Promise.resolve().then(() => __toESM(require("../posts/sveltekit-configs.md.js"))), "../posts/vim-key-bindings.md": () => Promise.resolve().then(() => __toESM(require("../posts/vim-key-bindings.md.js"))) };
let body = [];
for (let path in allPosts) {
  body.push(allPosts[path]().then(({ metadata }) => {
    return { path, metadata };
  }));
}
const load = async ({ params }) => {
  const posts = await Promise.all(body);
  const tag = params.tag;
  const filteredPosts = posts.filter((post) => {
    return post.metadata.tags.includes(tag);
  });
  return { props: { filteredPosts, tag } };
};
const U5Btagu5D = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  let { filteredPosts } = $$props;
  let { tag } = $$props;
  if ($$props.filteredPosts === void 0 && $$bindings.filteredPosts && filteredPosts !== void 0)
    $$bindings.filteredPosts(filteredPosts);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `<h1 class="${"title"}">#${(0, import_index_51f42298.d)(tag)}</h1>

<ul>${(0, import_index_51f42298.e)(filteredPosts, ({ path, metadata: { title } }) => {
    return `<li><a${(0, import_index_51f42298.b)("href", path.replace("./tags", "/").replace(".md", ""), 0)}>${(0, import_index_51f42298.d)(title)}</a>
       </li>`;
  })}</ul>`;
});
