import { c as create_ssr_component, e as escape, i as is_promise, n as noop, d as add_attribute, f as each, h as null_to_empty, v as validate_component } from "../../../chunks/index.js";
import { l as loadImage } from "../../../chunks/loadImage.js";
import "firebase/firestore";
const MainContentItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".projectItem.svelte-1k9ro6t.svelte-1k9ro6t{animation:svelte-1k9ro6t-fadeIn 1s;display:grid;grid-template-columns:1fr 1fr;margin-bottom:5%;margin-top:5%}.projectItem.svelte-1k9ro6t div.svelte-1k9ro6t{color:white;background-color:#131314}.projectItem.svelte-1k9ro6t div h1.svelte-1k9ro6t,.projectItem.svelte-1k9ro6t div p.svelte-1k9ro6t{padding:3%;padding-top:1%;padding-bottom:0%;margin:0}.projectItem.svelte-1k9ro6t div h1.svelte-1k9ro6t{font-size:300%;margin-top:1%;margin-bottom:3%;margin:0}.projectItem.svelte-1k9ro6t div p.svelte-1k9ro6t{font-size:120%;padding-bottom:3%}.projectItem.svelte-1k9ro6t img.svelte-1k9ro6t,.projectItem.svelte-1k9ro6t iframe.svelte-1k9ro6t{min-height:20vw;width:100%;height:100%;object-fit:cover;background-color:#131314}.imgtxt.svelte-1k9ro6t div.svelte-1k9ro6t{border-radius:0px 30px 30px 0px}.imgtxt.svelte-1k9ro6t img.svelte-1k9ro6t,.imgtxt.svelte-1k9ro6t iframe.svelte-1k9ro6t{border-radius:30px 0px 0px 30px}.txtimg.svelte-1k9ro6t div.svelte-1k9ro6t{border-radius:30px 0px 0px 30px}.txtimg.svelte-1k9ro6t img.svelte-1k9ro6t,.txtimg.svelte-1k9ro6t iframe.svelte-1k9ro6t{border-radius:0px 30px 30px 0px}@media only screen and (max-width: 600px){#textImage.svelte-1k9ro6t.svelte-1k9ro6t{grid-template-rows:1fr 1fr;grid-template-columns:1fr}.txtimg.svelte-1k9ro6t div.svelte-1k9ro6t{border-radius:30px 30px 0px 0px}.txtimg.svelte-1k9ro6t img.svelte-1k9ro6t,.txtimg.svelte-1k9ro6t iframe.svelte-1k9ro6t{border-radius:0px 0px 30px 30px}.imgtxt.svelte-1k9ro6t div.svelte-1k9ro6t{border-radius:0px 0px 30px 30px}.imgtxt.svelte-1k9ro6t img.svelte-1k9ro6t,.imgtxt.svelte-1k9ro6t iframe.svelte-1k9ro6t{border-radius:30px 30px 0px 0px}}@keyframes svelte-1k9ro6t-fadeIn{from{opacity:0}to{opacity:1}}",
  map: null
};
const MainContentItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textElement } = $$props;
  if ($$props.textElement === void 0 && $$bindings.textElement && textElement !== void 0)
    $$bindings.textElement(textElement);
  $$result.css.add(css$1);
  return `<div id="${"textImage"}" class="${"projectItem " + escape(
    ["videoText", "textImage"].includes(textElement.type) ? "imgtxt" : "txtimg",
    true
  ) + " svelte-1k9ro6t"}">${textElement.type === "textImage" ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(image) {
      return `
            <img${add_attribute("src", image, 0)} alt="${""}" class="${"svelte-1k9ro6t"}">
        `;
    }(__value);
  }(loadImage(textElement.image ?? ""))}` : `${textElement.type === "videoText" ? `<iframe${add_attribute("src", textElement.video, 0)} title="${"Player"}" frameborder="${"0"}" allow="${"clipboard-write; encrypted-media; picture-in-picture; web-share"}" allowfullscreen class="${"svelte-1k9ro6t"}"></iframe>` : ``}`}
    <div class="${"svelte-1k9ro6t"}"><h1 class="${"svelte-1k9ro6t"}"><!-- HTML_TAG_START -->${textElement.title}<!-- HTML_TAG_END --></h1>
        <p class="${"svelte-1k9ro6t"}"><!-- HTML_TAG_START -->${textElement.text}<!-- HTML_TAG_END --></p></div>
    ${textElement.type === "imageText" ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(image) {
      return `
            <img${add_attribute("src", image, 0)} alt="${""}" class="${"svelte-1k9ro6t"}">
        `;
    }(__value);
  }(loadImage(textElement.image ?? ""))}` : ``}
</div>`;
});
const FullProject_svelte_svelte_type_style_lang = "";
const css = {
  code: "#project.svelte-bquza6.svelte-bquza6{width:100%}#project.svelte-bquza6 #links.svelte-bquza6{display:flex;justify-content:center;margin:0 auto;margin-top:5vh;height:100%}#project.svelte-bquza6 #links a.svelte-bquza6{background-color:#131314;padding:1.5%;border-radius:30px}#project.svelte-bquza6 #links a img.svelte-bquza6{height:5vh;transition:0.5s}#project.svelte-bquza6 #links a img.svelte-bquza6:hover{scale:1.1}#project.svelte-bquza6 #links .first.svelte-bquza6{padding-left:2.5%;border-radius:30px 0px 0px 30px}#project.svelte-bquza6 #links .last.svelte-bquza6{padding-right:2.5%;border-radius:0px 30px 30px 0px}#project.svelte-bquza6 #content.svelte-bquza6{width:80%;margin:0 auto;margin-bottom:2.5vh}#project.svelte-bquza6 #header.svelte-bquza6{animation:svelte-bquza6-fadeIn 1s;position:relative;overflow:hidden;width:100vw;height:100%;max-height:50vw;margin-bottom:-2.5%}#project.svelte-bquza6 #header #headerImage.svelte-bquza6{height:100%;width:100%;object-fit:cover}#project.svelte-bquza6 #header #main.svelte-bquza6{width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#project.svelte-bquza6 #header #main h1.svelte-bquza6{margin:0;line-height:100%;font-size:300%;font-weight:400;text-align:center;color:white;text-shadow:1px 2px 3px #212121}#project.svelte-bquza6 #header #main p.svelte-bquza6{margin:0;font-size:125%;text-align:center;font-weight:400;color:white;text-shadow:1px 2px 3px #212121}@keyframes svelte-bquza6-fadeIn{0%{opacity:0}100%{opacity:1}}",
  map: null
};
const FullProject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css);
  return `<div id="${"project"}" class="${"svelte-bquza6"}"><div id="${"header"}" class="${"svelte-bquza6"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(image) {
      return `
            <img id="${"headerImage"}"${add_attribute("src", image, 0)} alt="${""}" class="${"svelte-bquza6"}">
        `;
    }(__value);
  }(loadImage(project.projectInfo?.headerImage ?? ""))}
        <div id="${"main"}" class="${"svelte-bquza6"}">${!project.projectInfo.hideTitle ? `<h1 class="${"svelte-bquza6"}"><!-- HTML_TAG_START -->${project.title}<!-- HTML_TAG_END --></h1>` : ``}
            ${project.projectInfo.tagline ? `<p class="${"svelte-bquza6"}">${escape(project.projectInfo.tagline)}</p>` : ``}</div></div>

    <div id="${"content"}" class="${"svelte-bquza6"}">${project.links ? `<div id="${"links"}" class="${"svelte-bquza6"}">${each(project.links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} class="${escape(
      null_to_empty(project.links.indexOf(link) == 0 ? "first" + (project.links.indexOf(link) == project.links.length - 1 ? "last" : "") : project.links.indexOf(link) == project.links.length - 1 ? "last" : ""),
      true
    ) + " svelte-bquza6"}">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(image) {
        return `
                            <img${add_attribute("src", image, 0)}${add_attribute("alt", link.name, 0)} class="${"svelte-bquza6"}">
                        `;
      }(__value);
    }(loadImage(link.icon ?? ""))}
                    </a>`;
  })}</div>` : ``}
        ${each(project.projectInfo.texts, (textElement) => {
    return `${["imageText", "textImage", "videoText"].includes(textElement.type) ? `${validate_component(MainContentItem, "MainContentItem").$$render($$result, { textElement }, {}, {})}` : ``}`;
  })}
        ${project.projectInfo.bottomVideo ? `<iframe width="${"100%"}" style="${"height: 50vw;"}"${add_attribute("src", project.projectInfo.bottomVideo, 0)} title="${"Player"}" frameborder="${"0"}" allow="${"clipboard-write; encrypted-media; picture-in-picture; web-share"}" allowfullscreen></iframe>` : ``}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let project = {};
  return `${project.title ? `${validate_component(FullProject, "FullProject").$$render($$result, { project }, {}, {})}` : ``}`;
});
export {
  Page as default
};
