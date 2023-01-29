import { c as create_ssr_component, i as is_promise, n as noop, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { g as getIntroduction } from "../../chunks/Projects.svelte_svelte_type_style_lang.js";
import { l as loadImage } from "../../chunks/loadImage.js";
import "firebase/firestore";
/* empty css                */function get(num) {
  const mili = Math.floor(num);
  const seconds = Math.floor(num / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  return [
    mili % 1e3,
    seconds % 60,
    minutes % 60,
    hours % 24,
    days % 30,
    months % 12,
    years
  ];
}
function extend(num, digits) {
  let _num = num.toFixed(0).toString();
  return "0".repeat(Math.max(0, digits - _num.length)) + _num;
}
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let intro = { startDate: 1472319999999 };
  async function loadIntroduction() {
    intro = await getIntroduction();
    return intro;
  }
  let { time = get(Date.now() - intro.startDate) } = $$props;
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(intro2) {
      return `
    <div id="${"aboutMe"}"><div id="${"tag"}">${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(image) {
          return `
                <img${add_attribute("src", image, 0)} alt="${"laptop"}">
            `;
        }(__value2);
      }(loadImage(intro2.icon ?? ""))}
            <h1><!-- HTML_TAG_START -->${intro2.title}<!-- HTML_TAG_END --></h1></div>
        <p id="${"introText"}"><!-- HTML_TAG_START -->${intro2.text.replace("[INSERTTIME]", `${time[6]}y ${time[5]}m ${time[4]}d ${extend(time[3], 2)}:${extend(time[2], 2)}:${extend(time[1], 2)}`).replace("[INSERTNAME]", `<span>${intro2.name}</span>`)}<!-- HTML_TAG_END --></p></div>
`;
    }(__value);
  }(loadIntroduction())}`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '#header.svelte-13h88q0.svelte-13h88q0{position:relative;overflow:hidden;width:100vw;height:100vh;max-height:100vw;background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgb(14, 20, 27)), url("https://firebasestorage.googleapis.com/v0/b/mardaxtech-portfolio.appspot.com/o/header.jpg?alt=media");background-size:cover}#header.svelte-13h88q0 #main.svelte-13h88q0{width:100%;position:absolute;top:40%;left:50%;transform:translate(-50%, -50%)}#header.svelte-13h88q0 #main h1.svelte-13h88q0{margin:0;line-height:100%;font-size:300%;font-weight:400;text-align:center;color:white;text-shadow:1px 2px 3px #212121}#header.svelte-13h88q0 #main p.svelte-13h88q0{margin:0;line-height:150%;font-size:200%;text-align:center;font-weight:400;color:white;text-shadow:1px 2px 3px #212121}#header.svelte-13h88q0 #main #avatar.svelte-13h88q0{width:20%;display:block;margin:0 auto;border-radius:50%}#header.svelte-13h88q0 #main #separator.svelte-13h88q0{display:block;margin:0 auto;width:12.5%;height:calc(0.5vw - 0.35vh);background-color:#131314;opacity:0.75;margin-top:2vw;margin-bottom:2vw}@media only screen and (min-width: 600px){.scroll-down.svelte-13h88q0.svelte-13h88q0{position:absolute;left:49vw;bottom:5vh;display:block;text-align:center;font-size:1.25rem;z-index:100;text-decoration:none;text-shadow:0;width:1vh;height:1vh;border-bottom:2px solid #fff;border-right:2px solid #fff;transform:translate(-50%, 0%) rotate(45deg);animation:svelte-13h88q0-fade_move_down 3s ease-in-out infinite}}@keyframes svelte-13h88q0-fade_move_down{0%{opacity:0;transform:translate(-50%, -10%) rotate(45deg)}75%{opacity:1}100%{opacity:0;transform:translate(-50%, 10%) rotate(45deg)}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(intro) {
      return `
    <div id="${"header"}" class="${"svelte-13h88q0"}"><div id="${"main"}" class="${"svelte-13h88q0"}">${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(image) {
          return `
                <img${add_attribute("src", image, 0)} alt="${"avatar"}" id="${"avatar"}" class="${"svelte-13h88q0"}">
            `;
        }(__value2);
      }(loadImage(intro.avatar ?? ""))}
            <div id="${"separator"}" class="${"svelte-13h88q0"}"></div>
            <h1 class="${"svelte-13h88q0"}"><!-- HTML_TAG_START -->${intro.name}<!-- HTML_TAG_END --></h1>
            <p class="${"svelte-13h88q0"}"><!-- HTML_TAG_START -->${intro.tag}<!-- HTML_TAG_END --></p></div>
        
        <a href="${"#aboutMe"}" class="${"scroll-down svelte-13h88q0"}"></a></div>
`;
    }(__value);
  }(getIntroduction())}`;
});
const MoreProjects_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#wrapper.svelte-1n68y1c{display:flex;flex-direction:column;align-items:center;margin:0 auto;max-width:1300px;min-width:375px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"wrapper"}" class="${"svelte-1n68y1c"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}
	${``}
</div>`;
});
export {
  Page as default
};
