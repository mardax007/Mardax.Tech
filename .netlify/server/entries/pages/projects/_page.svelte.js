import { c as create_ssr_component, d as add_attribute, f as each, i as is_promise, n as noop, e as escape, v as validate_component } from "../../../chunks/index.js";
import { l as loadImage } from "../../../chunks/loadImage.js";
import { a as getProjects } from "../../../chunks/Projects.svelte_svelte_type_style_lang.js";
const css$1 = {
  code: ".project.svelte-nfm3tb.svelte-nfm3tb{width:80%;color:white;margin:0 auto;backdrop-filter:blur(2px);box-shadow:2px 3px 10px 5px rgba(0, 0, 0, 0.75);background-color:#131314;padding:2%;border-radius:15px;margin-bottom:5vh;padding-bottom:calc(1vh + 1vw)}.project.svelte-nfm3tb #top.svelte-nfm3tb{display:grid;grid-template-columns:40% 60%}.project.svelte-nfm3tb #top #left h1.svelte-nfm3tb{font-size:250%;margin:0;width:90%;word-wrap:break-word}.project.svelte-nfm3tb #top #left p.svelte-nfm3tb{font-size:150%;margin:0 auto}.project.svelte-nfm3tb #top #left #links.svelte-nfm3tb{margin-top:calc(0.25vh + 0.25vw);display:flex;gap:10%;align-items:center}.project.svelte-nfm3tb #top #left #links img.svelte-nfm3tb:hover{scale:1.1}.project.svelte-nfm3tb #top #left #links img.svelte-nfm3tb{transition:0.5s;height:calc(0.5vw + 5vh)}.project.svelte-nfm3tb #top #right p.svelte-nfm3tb{font-size:150%;line-height:120%;margin:0;margin-bottom:5%}.project.svelte-nfm3tb #media.svelte-nfm3tb{display:flex;justify-content:center;align-items:center}.project.svelte-nfm3tb #media a.svelte-nfm3tb{max-width:60%;cursor:default}.project.svelte-nfm3tb #media a img.svelte-nfm3tb:hover{scale:1.05}.project.svelte-nfm3tb #media a img.svelte-nfm3tb{height:100%;width:100%;object-fit:contain;border-radius:30px;cursor:pointer;transition:0.5s}.project.svelte-nfm3tb #media a iframe.svelte-nfm3tb{height:25vh;width:70vw;border-radius:30px}@media(max-width: 1000px){.project.svelte-nfm3tb #top.svelte-nfm3tb{display:block}.project.svelte-nfm3tb #top #right.svelte-nfm3tb{margin-top:1vh}.project.svelte-nfm3tb #top #right p.svelte-nfm3tb{font-size:150%;line-height:120%;margin:0 auto}}",
  map: null
};
const ProjectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { index } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  return `${project ? `<div class="${"project svelte-nfm3tb"}"${add_attribute("id", index.toString(), 0)}><div id="${"top"}" class="${"svelte-nfm3tb"}"><div id="${"left"}"><p class="${"svelte-nfm3tb"}"><!-- HTML_TAG_START -->${project.textDate}<!-- HTML_TAG_END --></p>
                <h1 class="${"svelte-nfm3tb"}"><!-- HTML_TAG_START -->${project.title}<!-- HTML_TAG_END --></h1>
                <div id="${"links"}" class="${"svelte-nfm3tb"}">${project.links ? `${each(project.links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} class="${"svelte-nfm3tb"}">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(image) {
        return `
                                    <img${add_attribute("src", image, 0)}${add_attribute("alt", link.name, 0)} class="${"svelte-nfm3tb"}">
                                `;
      }(__value);
    }(loadImage(link.icon ?? ""))}
                            </a>`;
  })}` : ``}</div></div>
            <div id="${"right"}" class="${"svelte-nfm3tb"}"><p class="${"svelte-nfm3tb"}">${escape(project.description)}</p></div></div>
        <div id="${"media"}" class="${"svelte-nfm3tb"}"><a href="${"/project?" + escape(project.id ?? project.title, true)}" class="${"svelte-nfm3tb"}">${project.mediaType == "yt" ? `<iframe width="${"560"}" height="${"315"}"${add_attribute("src", project.media, 0)} title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-nfm3tb"}"></iframe>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(image) {
      return `
                        <img${add_attribute("src", image, 0)} alt="${""}" class="${"svelte-nfm3tb"}">
                    `;
    }(__value);
  }(loadImage(project.media ?? ""))}`}</a></div></div>` : ``}`;
});
const css = {
  code: "#projects.svelte-cpubl5.svelte-cpubl5{display:flex;flex-direction:column;align-items:center;margin:0 auto;max-width:1200px;min-width:375px}#projects.svelte-cpubl5 h1.svelte-cpubl5{font-size:calc((5vh + 3vw) * 0.7);margin:0;margin-bottom:2.5%;color:white}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { max } = $$props;
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  $$result.css.add(css);
  return `<div id="${"projects"}" class="${"svelte-cpubl5"}"><h1 class="${"svelte-cpubl5"}">School projecten</h1>
    ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(projects) {
      return `
        ${each(projects, (project) => {
        return `${validate_component(ProjectItem, "ProjectItem").$$render(
          $$result,
          {
            project,
            index: projects.indexOf(project)
          },
          {},
          {}
        )}`;
      })}
    `;
    }(__value);
  }(getProjects(max))}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Projects, "Projects").$$render($$result, { max: void 0 }, {}, {})}`;
});
export {
  Page as default
};
