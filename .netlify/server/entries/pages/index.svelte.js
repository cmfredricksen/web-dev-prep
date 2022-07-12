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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_51f42298 = require("../../immutable/chunks/index-51f42298.js");
const Routes = (0, import_index_51f42298.c)(($$result, $$props, $$bindings, slots) => {
  return `<h2>Welcome to Web Dev Prep
</h2>

<section><p>There is a lot more to learning web development than choosing a language and/or framework. You need to also learn how to use your computer, OS, version control and more. These other skills will make you a better developer, and make development more enjoyable.</p>
    
    <p>These topics are things to practice when you need a break from the language you are learning. Many of them you can also begin to implement even in your earlier work. You don&#39;t have to be a developer to get a lot of use out of these skills. Enjoy!</p></section>

<h3>Some topics that will be covered at Web Dev Prep</h3>

<ul><li>Terminal, Command Prompt, Powershell, Bash</li>
    <li>VSCode, Extensions, Key Bindings</li>
    <li>Windows, MAC, Linux</li>
    <li>Node, NPM, Config Files</li>
    <li>Version Control, Git, GitHub</li>
    <li>Deployment, Continuous Integration</li></ul>`;
});
