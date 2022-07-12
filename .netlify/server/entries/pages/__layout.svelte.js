var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_51f42298 = require("../../immutable/chunks/index-51f42298.js");
var global = "";
const getStores = () => {
  const stores = (0, import_index_51f42298.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-1hiytmy{margin:0 2rem}a.svelte-1hiytmy{margin:0 1rem;color:var(--clr-grey-blue-lt);text-decoration:none}a.svelte-1hiytmy:hover{color:var(--clr-grey-blue-xlt)}.active.svelte-1hiytmy{color:var(--clr-grey-blue-xlt);text-decoration:underline}",
  map: null
};
const Nav = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_51f42298.a)(page, (value) => $page = value);
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/posts", title: "Posts" }
  ];
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<nav class="${"svelte-1hiytmy"}">${(0, import_index_51f42298.e)(links, ({ path, title }) => {
    return `<a${(0, import_index_51f42298.b)("href", path, 0)} class="${["svelte-1hiytmy", $page.url.pathname === path ? "active" : ""].join(" ").trim()}">${(0, import_index_51f42298.d)(title)}</a>`;
  })}
</nav>`;
});
var header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-ln4mnk{display:flex;justify-content:center;align-items:baseline;padding:2rem 0;border-bottom:2px solid var(--clr-black-blue);background-color:var(--clr-black-blue);color:var(--clr-grey-blue-lt)}",
  map: null
};
const Header = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-ln4mnk"}"><h1>Web Dev Prep</h1>
    ${(0, import_index_51f42298.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
</header>`;
});
var footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1sl48hw{padding:2rem 0;text-align:center;background-color:var(--clr-black-blue);color:var(--clr-grey-blue-lt)\r\n    }p.svelte-1sl48hw{font-size:1.5rem}",
  map: null
};
const Footer = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1sl48hw"}"><p class="${"svelte-1sl48hw"}">\xA9 Web Dev Prep \xB7 All Rights Reserved \u2663</p>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-a4cxla{width:80%;margin:0 auto;padding:1rem 2rem;border-left:2px dotted var(--clr-black-blue)}",
  map: null
};
const _layout = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Web Dev Prep</title>`, ""}`, ""}

${(0, import_index_51f42298.v)(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"wrapper svelte-a4cxla"}">${slots.default ? slots.default({}) : ``}</div>

${(0, import_index_51f42298.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
