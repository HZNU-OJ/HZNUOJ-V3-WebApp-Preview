(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"/xQZ":function(e,t,n){e.exports={codeBox:"codeBox___uVKvQ",codeBoxSegment:"codeBoxSegment___jwfBB",codeBoxContent:"codeBoxContent___wAGWc",wrap:"wrap___1DR7N",codeBoxPre:"codeBoxPre___2P8-H",omittedLabel:"omittedLabel___3SHXN"}},"1SVi":function(e,t,n){"use strict";n.r(t),n.d(t,"mathJaxStyle",(function(){return P}));var a=n("WmNS"),r=n.n(a),o=n("9og8"),i=n("tJVT"),c=n("q1tI"),s=n.n(c),l=n("Xbr2"),u=n.n(l),d=n("1M3H"),p=n.n(d),h=n("7Cbv"),f=n("SB8l"),m=n.n(f),b=n("MICN"),g=n.n(b),v=n("dGqU"),x=n.n(v);function j(e,t){var n=[],a=[];function r(e){return"<span data-id=".concat(e,"></span>")}function o(e,t){return e.querySelector('[data-id="'.concat(t,'"]'))}function i(e,t){var a={id:Object(h["a"])(),code:e,language:t};return n.push(a),r(a.id)}function c(e,t){var n={id:Object(h["a"])(),code:e,display:t};return a.push(n),r(n.id)}var s=new p.a({html:!0,linkify:!0,typographer:!0,breaks:!1,highlight:i});return s.use(m.a,{inlineOpen:"$",inlineClose:"$",blockOpen:"$$",blockClose:"$$",inlineRenderer:e=>c(e,!1),blockRenderer:e=>c(e,!0)}),s.use(g.a,{parseURL:e=>"/user/profile/".concat(e)}),s.use(x.a,"spoiler",{validate:function(e){return e.trim().match(/^spoiler\s+(.*)$/)},render:function(e,t){var n=e[t].info.trim().match(/^spoiler\s+(.*)$/);return 1===e[t].nesting?"<details><summary>"+s.utils.escapeHtml(n[1])+"</summary>\n":"</details>\n"}}),t&&t(s),[s.render(e),n,a,o]}var k=n("79he"),w=n("krt8"),_=n("A/NR"),y=n("AVux"),O=n("Bzld"),L=n("SMrx");n("shKO"),n("cDA2"),n("g+Si"),n("GuTo"),n("p6N/"),n("zH84");k["mathjax"].handlers.register(Object(L["SafeHandler"])(new O["HTMLHandler"](Object(y["browserAdaptor"])())));var N=k["mathjax"].document(document,{InputJax:new w["TeX"]({packages:{"[+]":["ams","boldsymbol","colorv2","html","noundefined","physics"]}}),OutputJax:new _["SVG"]});function C(e,t){try{var n=N.convert(e,{display:t});return n.classList.replace("MathJax",P.MathJax),n.classList.add(t?P.block:P.inline),n}catch(o){console.log(o);var a=document.createElement("mjx-container");a.className=P.MathJax,a.setAttribute("jax","SVG"),t&&a.setAttribute("display","true"),a.classList.add(t?P.block:P.inline);var r=document.createElement("span");return r.innerText="Failed to render math, ".concat(String(o)),r.style.fontWeight="bold",r.style.display="inline-block",r.style.border="2px solid var(--theme-foreground)",r.style.padding="0 4px",a.appendChild(r),a}}N.updateDocument();var B=n("Xjjk"),S=n("vaBj").whiteList;function A(e,t){return e+'="'+Object(B["escapeAttrValue"])(t)+'"'}function E(e,t){var n=new B["FilterXSS"]({whiteList:S,stripIgnoreTag:!0,onTagAttr:(e,n,a,r)=>{if(t){var o=t(e,n,a,B["escapeAttrValue"]);if("string"===typeof o)return o;if(!0===o)return A(n,a)}if("img"===e.toLowerCase()&&"src"===n.toLowerCase()&&a.startsWith("data:image/"))return A(n,a)}}),a=n.process(e);return a||""}delete S.audio,delete S.video,S.input=["type","disabled","checked"],Object.keys(S).forEach((e=>{S[e].push("style","class")})),S["span"].push("data-id");var M=n("OUQG"),T=n("foAP"),H=n("nKUr"),P={MathJax:u.a.MathJax,inline:u.a.inline,block:u.a.block};function V(e){Array.from(e.getElementsByTagName("pre")).forEach((e=>{var t=document.createElement("div");t.className=[T["b"].segment,T["b"].pre].join(" "),e.parentNode.replaceChild(t,e),t.appendChild(e),e.classList.add(T["b"].content)})),Array.from(e.getElementsByTagName("table")).forEach((e=>{e.classList.contains(u.a["gfm-table"])||e.classList.add(u.a["gfm-table"])}))}function F(e){try{var t=new URL(e,document.location.href);if(t.origin===document.location.origin)return t}catch(n){}return null}var G=e=>{var t=Object(c["useMemo"])((()=>{var t,n,a=j(e.content,null===(t=e.patcher)||void 0===t?void 0:t.onPatchRenderer),r=Object(i["a"])(a,4),o=r[0],c=r[1],s=r[2],l=r[3],u=document.createElement("div");return u.innerHTML=e.noSanitize?o:E(o,null===(n=e.patcher)||void 0===n?void 0:n.onXssFileterAttr),c.forEach((e=>{var t=l(u,e.id);t.outerHTML=Object(M["a"])(e.code,e.language)})),s.forEach((e=>{var t=l(u,e.id);t.parentNode.replaceChild(C(e.code,e.display),t)})),Array.from(u.getElementsByTagName("a")).forEach((e=>{e.relList.add("noreferrer","noreferrer"),F(e.href)?e.target="_parent":e.target="_blank"})),V(u),u.innerHTML}),[e.content,e.noSanitize,e.patcher]),n=Object(c["useState"])(),a=Object(i["a"])(n,2),s=a[0],l=a[1];return Object(c["useEffect"])((()=>{var t;if(s){var n=[];s.addEventListener("click",i),n.push((()=>s.removeEventListener("click",i)));var a=null===(t=e.patcher)||void 0===t?void 0:t.onPatchResult;return a&&s&&n.push(a(s)),()=>n.forEach((e=>e&&e()))}function i(e){return c.apply(this,arguments)}function c(){return c=Object(o["a"])(r.a.mark((function e(t){var n,a,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.target,"A"!==n.tagName){e.next=7;break}if(a=n,["","_self"].includes(a.target.toLowerCase())){e.next=5;break}return e.abrupt("return");case 5:o=F(a.href),o&&t.preventDefault();case 7:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}}),[e.patcher,s]),Object(H["jsx"])("div",{className:u.a.markdownContent+(e.className?" "+e.className:"")+(e.dontUseContentFont?"":" content-font")+(e.noOverflowCutFix?" "+u.a.noOverflowCutFix:""),dangerouslySetInnerHTML:{__html:t},ref:l})};t["default"]=s.a.memo(G)},OUQG:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("jHpe"),r=n.n(a);n("bPOv"),n("ZgVT"),n("y1X9"),n("uM+M"),n("QWvX"),n("XpJP"),n("EbVF"),n("pZMP"),n("LmXF"),n("b6mF"),n("d4OG"),n("dgcb"),n("iB5L"),n("r4oG"),n("sA+S"),n("+FDh"),n("t2Jj"),n("u300"),n("huE1"),n("kfgK"),n("VOcU"),n("8ktg"),n("jOLr"),n("lSgE"),n("drhi"),n("ibSS"),n("Mqv6"),n("Q7+W"),n("gAkk"),n("qVSt"),n("wkPK"),n("HdDD"),n("uN/B"),n("SL6G"),n("pksX"),n("s2Vr"),n("xbA4"),n("56Ue"),n("lD8X"),n("J4HD"),n("OQpq"),n("g0jA"),n("Nd5L"),n("uQnp"),n("1Nty"),n("sTAn"),n("npCj"),n("KJ57"),n("NdPI"),n("hkok"),n("otUN"),n("Gi0s"),n("kAua"),n("ZzuI"),n("GD/k"),n("Yhcd"),n("HGMl"),n("f7nC"),n("2et7"),n("xwaw"),n("B/pZ"),n("YctN"),n("qJTN"),n("9QaP"),n("eIXP"),n("ZwEA"),n("nF1u"),n("00hE"),n("nrL0"),n("0fuW"),n("PUL1"),n("jxYe"),n("E9jH"),n("dBHq"),n("/nb9"),n("8RTI"),n("gRcZ"),n("Q046"),n("Z7/u"),n("qiXI"),n("PEIs"),n("B6Nr"),n("3xzq"),n("GYl3"),n("RX2a"),n("gmzG"),n("Y613"),n("4l/p"),n("+fy4"),n("hnpa"),n("jOTn"),n("weJn"),n("5dm5"),n("T8iE"),n("0WON"),n("9pLb"),n("ZZ/H"),n("85O/"),n("kYdm"),n("zI6Y"),n("xdrT"),n("SN7l"),n("dYyu"),n("0sus"),n("7d9O"),n("vy4m"),n("DB5f"),n("8XF4"),n("ki2X"),n("jpss"),n("c11f"),n("KTUv"),n("PRNa"),n("tkzC"),n("/27n"),n("uYYa"),n("O9Io"),n("XIHC"),n("k4T/"),n("dgIA"),n("+X5Q"),n("R4Wz"),n("MsKQ"),n("IqA8"),n("5M+F"),n("ST66"),n("ZM0j"),n("u1v7"),n("Vj/u"),n("cZAW"),n("HAjR"),n("zxki"),n("9IQp"),n("Ol/B"),n("USa+"),n("hnL7"),n("DV0F"),n("1NVV"),n("+ZwH"),n("ReX+"),n("Kqxr"),n("BbjY"),n("6Kvp"),n("YL/C"),n("jjUo"),n("76db"),n("h7LQ"),n("bDPX"),n("oNmE"),n("8sAH"),n("r4a2"),n("TUlN"),n("TL9f"),n("bEZN"),n("YT+k"),n("9xB9"),n("GF4Z"),n("xdtV"),n("Nuiu"),n("F0Kw"),n("gA1E"),n("5625"),n("mR1r"),n("pC7O"),n("VZmW"),n("4MSv"),n("wqKI"),n("OuMq"),n("8oPf"),n("RzVo"),n("a+kc"),n("9wRM"),n("RZ5y"),n("NymF"),n("9KPv"),n("dVlL"),n("vyez"),n("V9il"),n("Q+2V"),n("31oH"),n("PSGn"),n("aTfN"),n("Ka68"),n("+qzQ"),n("Scwt"),n("9du4"),n("CjHp"),n("pYjL"),n("YD4P"),n("Nhn9"),n("b7ok"),n("EHpB"),n("6GGF"),n("ceB4"),n("BHca"),n("8sVL"),n("eWXi"),n("q/gI"),n("RehC"),n("cnKv"),n("+EFr"),n("ujpa"),n("gV2Z"),n("/s04"),n("6c1m"),n("XJAp"),n("cGNI"),n("rGpf"),n("27LU"),n("hvH5"),n("dC2J"),n("6cul"),n("CTf8"),n("TAbw"),n("1Muh"),n("yrCP"),n("sVKi"),n("2niF"),n("yqz8"),n("/uFR"),n("yam7"),n("WrUs"),n("VMbu"),n("jR7t"),n("tDuG"),n("PFdE"),n("fO3x"),n("bldZ"),n("pweW"),n("ITQp"),n("oCKR"),n("+xhP"),n("YBrI"),n("z/kO"),n("+Nrv"),n("+TXG"),n("/Ab6"),n("wPEV"),n("bMoR");function o(e){return e.split("\r").join("")}function i(e){return e=e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split(" ").join("&nbsp;"),e}function c(e,t){function n(){if(t)try{var n=t.trim().toLowerCase();if(n in r.a.languages)return r.a.highlight(e,r.a.languages[n],n)}catch(a){console.error("Failed to highlight, language = ".concat(t),a)}return i(e).split("\n").join("<br>")}return e=o(e),'<div class="highlighted">'.concat(n(),"</div>")}},Xbr2:function(e,t,n){e.exports={codeBox:"codeBox___uU93F",markdownContent:"markdownContent___1qNKc",MathJax:"MathJax___3wE1u",inline:"inline___3qje8",block:"block___22ZrS",noOverflowCutFix:"noOverflowCutFix___1MJCG",taskListCheckbox:"taskListCheckbox___1Ha2U"}},bMoR:function(e,t,n){},foAP:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));n("q1tI");var a=n("/xQZ"),r=n.n(a),o=n("OUQG"),i=n("nKUr"),c=e=>Object(i["jsx"])("div",{className:"".concat(r.a.codeBoxSegment," ").concat(r.a.codeBoxPre),children:Object(i["jsx"])("pre",{className:"".concat(r.a.codeBoxContent),children:Object(i["jsx"])("div",{className:"language-".concat(e.language),dangerouslySetInnerHTML:{__html:Object(o["a"])(e.code,e.language)}})})}),s={segment:r.a.codeBoxSegment,content:r.a.codeBoxContent,pre:r.a.codeBoxPre}}}]);