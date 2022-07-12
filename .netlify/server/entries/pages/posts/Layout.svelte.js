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
  default: () => Layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_51f42298 = require("../../../immutable/chunks/index-51f42298.js");
var Layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title-bar.svelte-1xnrhhx{padding-bottom:1rem;;}",
  map: null
};
const Layout = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { date } = $$props;
  let { tags } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css);
  return `<div class="${"title-bar svelte-1xnrhhx"}"><h2>${(0, import_index_51f42298.d)(title)}</h2>
    <p>${(0, import_index_51f42298.d)(new Date(date).toDateString())}</p>
    ${(0, import_index_51f42298.e)(tags, (tag) => {
    return `<a class="${"tag"}"${(0, import_index_51f42298.b)("href", `/tags/${tag}`, 0)}>#${(0, import_index_51f42298.d)(tag)} </a>`;
  })}</div>

${slots.default ? slots.default({}) : ``}`;
});
