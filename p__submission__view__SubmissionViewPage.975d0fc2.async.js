(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"/vjS":function(e,t,n){"use strict";n.r(t);var s=n("WmNS"),a=n.n(s),r=(n("miYZ"),n("tsqr")),i=n("9og8"),c=(n("14J3"),n("BMrR")),o=(n("jCWc"),n("kPKH")),l=n("tJVT"),d=(n("fu2T"),n("gK9i")),u=n("q1tI"),m=n("7AqN"),p=n("bx7e"),j=n("Qb08"),b=n("E4Z0"),h=n.n(b),g=n("d5+F"),v=n.n(g),x=n("/xQZ"),O=n.n(x),f=n("Urjs"),y=n("foAP"),w=n("Hx64"),k=n("d1CT"),_=n("8Skl"),S=n("UESt"),N=n("f133"),I=n("nKUr"),M=d["a"].Panel,P=()=>Object(I["jsx"])(_["a"],{style:{cursor:"pointer",color:"#3e90cc"}}),B=()=>Object(I["jsx"])(S["a"],{style:{cursor:"pointer",color:"#3e90cc"}}),H=e=>{var t,n=Object(u["useState"])(null===(t=e.defaultVisible)||void 0===t||t),s=Object(l["a"])(n,2),a=s[0],r=s[1];return Object(I["jsx"])(I["Fragment"],{children:Object(I["jsxs"])("div",{style:{borderBottom:a?"":"1px solid #3e90cc",marginBottom:a?"":20},children:[Object(I["jsxs"])(c["a"],{onClick:()=>{r((e=>!e))},style:{cursor:"pointer"},children:[Object(I["jsx"])(o["a"],{xs:12,style:{textAlign:"left"},children:Object(I["jsx"])("h2",{children:e.title})}),Object(I["jsx"])(o["a"],{xs:12,style:{textAlign:"right"},children:(()=>a?Object(I["jsx"])(P,{}):Object(I["jsx"])(B,{}))()})]}),Object(I["jsx"])("div",{style:{display:a?"":"none"},children:e.children})]})})};function T(e,t,n,s){return Object(I["jsx"])("span",{children:"Testcase ".concat(e," ").concat(t," ").concat(n.toFixed(0)," ").concat(s)})}var A=e=>{var t=Object(m["l"])(),n=(Object(f["d"])(0,992),new h.a),s=Object(u["useState"])(null),c=Object(l["a"])(s,2),o=c[0],b=c[1],g=Object(u["useState"])(""),x=Object(l["a"])(g,2),_=x[0],S=x[1],P=Object(u["useState"])({message:"",success:!0}),B=Object(l["a"])(P,2),A=B[0],C=B[1],U=Object(u["useState"])([]),V=Object(l["a"])(U,2),F=V[0],Z=V[1],E=Object(u["useState"])(!0),R=Object(l["a"])(E,2),K=R[0],L=R[1];function z(){return Q.apply(this,arguments)}function Q(){return Q=Object(i["a"])(a.a.mark((function e(){var n,s,i,c,o,l,d,u;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N["c"].submission.getSubmissionDetail({submissionId:t.id,locale:"en_US"});case 2:n=e.sent,s=n.requestError,i=n.response,s?r["default"].error(s):i.error?r["default"].error(i.error):(b(i.meta),S(null===(c=i.content)||void 0===c?void 0:c.code),C(null===(o=i.progress)||void 0===o?void 0:o.compile),(null===(l=i.progress)||void 0===l?void 0:l.testcaseResult)&&(d=i.progress.testcaseResult,u=[],Object.keys(d).forEach((e=>{u.push(d[e])})),u.sort(((e,t)=>{var n=e.testcaseInfo.inputFile,s=t.testcaseInfo.inputFile;return n<s?-1:1})),Z(u)),L(!1));case 6:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}return Object(u["useEffect"])((()=>{z()}),[]),Object(I["jsx"])(p["a"],{current:"submissions",children:Object(I["jsxs"])("div",{className:v.a.root,children:[K&&Object(I["jsx"])("div",{className:v.a.loading,children:Object(I["jsx"])(j["a"],{})}),!1===K&&Object(I["jsxs"])(I["Fragment"],{children:[Object(I["jsx"])(k["a"],{query:{minId:parseInt(t.id),takeCount:1}}),(null===A||void 0===A?void 0:A.message.length)>0&&Object(I["jsx"])("div",{style:{marginTop:20},children:Object(I["jsx"])(H,{title:"Compilation Message",children:Object(I["jsx"])(y["a"],{language:"dangerouslySetInnerHTML",code:n.ansi_to_html(A.message)})})}),Object(I["jsx"])("div",{style:{marginTop:20},children:Object(I["jsx"])(H,{title:"Code",children:Object(I["jsx"])(y["a"],{language:o.codeLanguage,code:_})})}),F.length>0&&Object(I["jsx"])("div",{style:{marginTop:20},children:Object(I["jsx"])(H,{title:"Test Details",children:Object(I["jsx"])("div",{className:"".concat(O.a.codeBoxSegment," ").concat(O.a.codeBoxPre),children:Object(I["jsx"])(d["a"],{defaultActiveKey:[],ghost:!0,children:Object(I["jsx"])(I["Fragment"],{children:F.map(((e,t)=>Object(I["jsx"])(M,{header:T(t+1,e.status,e.time,e.memory),children:Object(I["jsx"])(w["b"],{meta:o,testcaseResult:e})},t+1)))})})})})})]})]})})};t["default"]=A},"/xQZ":function(e,t,n){e.exports={codeBox:"codeBox___uVKvQ",codeBoxSegment:"codeBoxSegment___jwfBB",codeBoxContent:"codeBoxContent___wAGWc",wrap:"wrap___1DR7N",codeBoxPre:"codeBoxPre___2P8-H",omittedLabel:"omittedLabel___3SHXN"}},"0ieP":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var s=n("nKUr"),a=()=>Object(s["jsx"])("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 496 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(s["jsx"])("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}),r=()=>Object(s["jsx"])("svg",{viewBox:"0 0 1025 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"currentColor","p-id":"1198",strokeWidth:"0",width:"1em",height:"1em",children:Object(s["jsx"])("path",{d:"M879.243325 586.810341c-16.32354-43.266438-79.320268-141.551527-80.064248-190.941723l-0.374548 0c0.125873-2.627976 0.374548-5.253906 0.374548-7.876766 0-179.445349-128.665437-324.870276-287.365328-324.870276-158.764362 0-287.368398 145.424926-287.368398 324.870276 0 2.62286 0.251745 5.248789 0.312123 7.876766l-0.312123 0c-0.742956 49.39122-63.677259 147.675285-80.063224 190.941723-16.386988 43.391287-20.484503 87.1561-12.911674 121.921525 7.572829 34.63546 13.778456 56.144341 20.978783 62.896439 7.137903 6.876948 13.964706 14.13049 35.628114-1.125691 17.376573-14.381212 36.368-43.640986 36.368-43.640986s15.70441 45.3899 50.769679 80.030477c-27.496533 13.002752-67.278447 41.890025-70.133608 60.77093-2.731335 18.759126 41.707868 90.158624 146.102387 91.783712 104.396566 1.500239 139.090357-43.64201 142.50734-47.143931 9.742342-10.252997 18.121575-16.503651 18.121575-16.503651s8.440634 6.250654 18.123622 16.503651c3.410843 3.501922 38.105657 48.64417 142.503247 47.143931 104.392473-1.626112 148.832699-73.024587 146.040986-91.783712-2.794783-18.880905-42.639121-47.768178-70.07323-60.77093 35.002844-34.640576 50.770702-80.030477 50.770702-80.030477s18.992451 29.259774 36.372094 43.640986c21.597913 15.255157 28.423693 8.001615 35.622998 1.125691 7.201351-6.752098 13.3466-28.26098 20.978783-62.896439C899.725781 673.966441 895.569935 630.201629 879.243325 586.810341z","p-id":"1199"})})},"8tQ+":function(e,t,n){e.exports={footer:"footer___3EQLU",name:"name___1AcRw",version:"version___3owxy",github:"github___2s1sl"}},OUQG:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var s=n("jHpe"),a=n.n(s);n("bPOv"),n("ZgVT"),n("y1X9"),n("uM+M"),n("QWvX"),n("XpJP"),n("EbVF"),n("pZMP"),n("LmXF"),n("b6mF"),n("d4OG"),n("dgcb"),n("iB5L"),n("r4oG"),n("sA+S"),n("+FDh"),n("t2Jj"),n("u300"),n("huE1"),n("kfgK"),n("VOcU"),n("8ktg"),n("jOLr"),n("lSgE"),n("drhi"),n("ibSS"),n("Mqv6"),n("Q7+W"),n("gAkk"),n("qVSt"),n("wkPK"),n("HdDD"),n("uN/B"),n("SL6G"),n("pksX"),n("s2Vr"),n("xbA4"),n("56Ue"),n("lD8X"),n("J4HD"),n("OQpq"),n("g0jA"),n("Nd5L"),n("uQnp"),n("1Nty"),n("sTAn"),n("npCj"),n("KJ57"),n("NdPI"),n("hkok"),n("otUN"),n("Gi0s"),n("kAua"),n("ZzuI"),n("GD/k"),n("Yhcd"),n("HGMl"),n("f7nC"),n("2et7"),n("xwaw"),n("B/pZ"),n("YctN"),n("qJTN"),n("9QaP"),n("eIXP"),n("ZwEA"),n("nF1u"),n("00hE"),n("nrL0"),n("0fuW"),n("PUL1"),n("jxYe"),n("E9jH"),n("dBHq"),n("/nb9"),n("8RTI"),n("gRcZ"),n("Q046"),n("Z7/u"),n("qiXI"),n("PEIs"),n("B6Nr"),n("3xzq"),n("GYl3"),n("RX2a"),n("gmzG"),n("Y613"),n("4l/p"),n("+fy4"),n("hnpa"),n("jOTn"),n("weJn"),n("5dm5"),n("T8iE"),n("0WON"),n("9pLb"),n("ZZ/H"),n("85O/"),n("kYdm"),n("zI6Y"),n("xdrT"),n("SN7l"),n("dYyu"),n("0sus"),n("7d9O"),n("vy4m"),n("DB5f"),n("8XF4"),n("ki2X"),n("jpss"),n("c11f"),n("KTUv"),n("PRNa"),n("tkzC"),n("/27n"),n("uYYa"),n("O9Io"),n("XIHC"),n("k4T/"),n("dgIA"),n("+X5Q"),n("R4Wz"),n("MsKQ"),n("IqA8"),n("5M+F"),n("ST66"),n("ZM0j"),n("u1v7"),n("Vj/u"),n("cZAW"),n("HAjR"),n("zxki"),n("9IQp"),n("Ol/B"),n("USa+"),n("hnL7"),n("DV0F"),n("1NVV"),n("+ZwH"),n("ReX+"),n("Kqxr"),n("BbjY"),n("6Kvp"),n("YL/C"),n("jjUo"),n("76db"),n("h7LQ"),n("bDPX"),n("oNmE"),n("8sAH"),n("r4a2"),n("TUlN"),n("TL9f"),n("bEZN"),n("YT+k"),n("9xB9"),n("GF4Z"),n("xdtV"),n("Nuiu"),n("F0Kw"),n("gA1E"),n("5625"),n("mR1r"),n("pC7O"),n("VZmW"),n("4MSv"),n("wqKI"),n("OuMq"),n("8oPf"),n("RzVo"),n("a+kc"),n("9wRM"),n("RZ5y"),n("NymF"),n("9KPv"),n("dVlL"),n("vyez"),n("V9il"),n("Q+2V"),n("31oH"),n("PSGn"),n("aTfN"),n("Ka68"),n("+qzQ"),n("Scwt"),n("9du4"),n("CjHp"),n("pYjL"),n("YD4P"),n("Nhn9"),n("b7ok"),n("EHpB"),n("6GGF"),n("ceB4"),n("BHca"),n("8sVL"),n("eWXi"),n("q/gI"),n("RehC"),n("cnKv"),n("+EFr"),n("ujpa"),n("gV2Z"),n("/s04"),n("6c1m"),n("XJAp"),n("cGNI"),n("rGpf"),n("27LU"),n("hvH5"),n("dC2J"),n("6cul"),n("CTf8"),n("TAbw"),n("1Muh"),n("yrCP"),n("sVKi"),n("2niF"),n("yqz8"),n("/uFR"),n("yam7"),n("WrUs"),n("VMbu"),n("jR7t"),n("tDuG"),n("PFdE"),n("fO3x"),n("bldZ"),n("pweW"),n("ITQp"),n("oCKR"),n("+xhP"),n("YBrI"),n("z/kO"),n("+Nrv"),n("+TXG"),n("/Ab6"),n("wPEV"),n("bMoR");function r(e){return e.split("\r").join("")}function i(e){return e=e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split(" ").join("&nbsp;"),e}function c(e,t){function n(){if(t)try{var n=t.trim().toLowerCase();if(n in a.a.languages)return a.a.highlight(e,a.a.languages[n],n)}catch(s){console.error("Failed to highlight, language = ".concat(t),s)}return i(e).split("\n").join("<br>")}return e=r(e),'<div class="highlighted">'.concat(n(),"</div>")}},RH92:function(e,t,n){"use strict";n("5Dmo");var s=n("3S7+"),a=n("tJVT"),r=(n("q1tI"),n("acru")),i=n("nKUr"),c=e=>{var t=Object(r["a"])(e.date),n=Object(a["a"])(t,2),c=n[0],o=n[1];return Object(i["jsx"])(s["a"],{placement:"top",title:o,children:Object(i["jsx"])("span",{children:c})})};t["a"]=c},acru:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var s=n("Wgwc"),a=n.n(s),r=(n("pHGr"),n("nKUr"));function i(e,t){return"string"===typeof e&&(e=parseInt(e)),a.a.unix(e).format(t)}function c(e,t){"number"===typeof e&&10===e.toString().length&&(e*=1e3),e instanceof Date||(e=new Date(e));var n=(e.getMonth()+1).toString(),s=e.getDate().toString(),a=e.getHours().toString(),i=e.getMinutes().toString(),c=e.getSeconds().toString();n=1===n.length?"0"+n:n,s=1===s.length?"0"+s:s,a=1===a.length?"0"+a:a,i=1===i.length?"0"+i:i,c=1===c.length?"0"+c:c;var o="".concat(n,"/").concat(s),l=t?o:Object(r["jsxs"])(r["Fragment"],{children:[o,"\xa0\xa0","".concat(a,":").concat(i,":").concat(c)]}),d="".concat(e.getFullYear(),"-").concat(n,"-").concat(s),u=t?d:"".concat(d," ").concat(a,":").concat(i,":").concat(c);return[l,u]}a.a.locale("zh-cn")},b2pr:function(e,t,n){"use strict";var s=n("WmNS"),a=n.n(s),r=n("9og8"),i=n("tJVT"),c=n("8tQ+"),o=n.n(c),l=n("kiQV"),d=n("0ieP"),u=n("q1tI"),m=n("f133"),p=n("nKUr"),j=e=>{var t=Object(u["useState"])("Loading"),n=Object(i["a"])(t,2),s=n[0],c=n[1];function j(){return b.apply(this,arguments)}function b(){return b=Object(r["a"])(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["c"].app.getVersion();case 2:t=e.sent,t.requestError,n=t.response,n&&c(n.version);case 6:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}return Object(u["useEffect"])((()=>{j()}),[]),Object(p["jsxs"])("footer",{className:o.a.footer,children:[Object(p["jsx"])("div",{className:o.a.name,children:"Hangzhou Normal U Online Judge V3"}),Object(p["jsxs"])("div",{className:o.a.version,children:["WebApp: ",l.version," | API: ",s]}),Object(p["jsx"])("div",{className:o.a.icon,children:Object(p["jsx"])("a",{className:o.a.github,title:"GitHub",target:"_blank",rel:"noreferrer noopener",href:"https://github.com/HZNU-OJ/HZNUOJ",children:Object(p["jsx"])(d["a"],{})})})]})};t["a"]=j},bMoR:function(e,t,n){},bnip:function(e,t,n){e.exports={root:"root___75B7Y",secondRoot:"secondRoot___PF0A-",main:"main___3b34R","h-header":"h-header___2IoNM"}},bx7e:function(e,t,n){"use strict";var s=n("9kvl"),a=n("q1tI"),r=n("b2pr"),i=n("Qb08"),c=n("bnip"),o=n.n(c),l=n("nKUr");function d(e,t){var n="";return t.forEach((t=>{n+='<li class="'.concat(e===t.id?"am-active":"",'"><a href="').concat(t.link,'">').concat(t.name,"</a></li>")})),n}function u(e,t){var n="";n+='<li class="am-dropdown" data-am-dropdown>',n+="\n  <a class='am-dropdown-toggle' data-am-dropdown-toggle href='javascript:;'>\n  <span class='am-icon-user'></span>&nbsp;".concat(t,"&nbsp;<span class='am-icon-caret-down'></span>\n  </a>"),n+='<ul class="am-dropdown-content">';for(var s=0;s<e.length;++s)0!==e[s].length&&(e[s].forEach((e=>{n+='<li><a href="'.concat(e.link,'">').concat(e.name,"</a></li>")})),s<e.length-1&&(n+='<li class="am-divider"></li>'));return n+="</ul>",n+="</li>",n}function m(e,t,n,s,a){var r=[{id:"contests",name:"Contests",link:"/contests"},{id:"problem_set",name:"Problem Set",link:"/problemset"},{id:"submissions",name:"Submissions",link:"/submissions"},{id:"users",name:"Users",link:"/users"},{id:"discussions",name:"Discussions",link:"/discussions"}],i=[{id:"enter",name:"Enter",link:"/login"}],c=[[...a?[{id:"my_profile",name:"My Profile",link:"/user/".concat(n)}]:[],{id:"my_submissions",name:"My Submissions",link:"/submissions?username=".concat(null!==n&&void 0!==n?n:"")},...a?[{id:"my_discussions",name:"My Discussions",link:"/discussions?publisherId=".concat(null!==s&&void 0!==s?s:"")}]:[]],a?[{id:"polygon",name:"Polygon",link:"/polygon"},{id:"administration",name:"Administration",link:"/admin"}]:[],[...a?[{id:"settings",name:"Settings",link:"/settings"}]:[],{id:"logout",name:"Logout",link:"/logout"}]];return{__html:'\n    <header class="am-topbar-inverse am-topbar-fixed-toped" style="font-size: 16px; margin-top: 0px;">\n    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-primary am-show-sm-only"\n      data-am-collapse="{target: \'#collapse-head\'}">\n      <span class="am-sr-only">\u5bfc\u822a\u5207\u6362</span>\n      <span class="am-icon-bars"></span>\n    </button>\n    <div class="am-container '.concat(o.a["h-header"],'">\n      <h1 class="am-topbar-brand">\n        <a href="/" >').concat(e,'</a>\n      </h1>\n      <div class="am-collapse am-topbar-collapse" id="collapse-head">\n        <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(d(t,r),'\n        </ul>\n        <div class="am-topbar-right" style="padding-right: 0px;">\n          <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(n?u(c,n):d(t,i),"\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n    ")}}var p=e=>Object(l["jsx"])("div",{dangerouslySetInnerHTML:m("HZNU Online Judge",e.current,e.username,e.id,e.isAdmin)}),j=e=>{var t,n,c,d=Object(s["d"])("@@initialState"),u=d.initialState,m=d.loading;return Object(a["useEffect"])((()=>{window.$(".am-dropdown").dropdown()})),Object(l["jsxs"])(l["Fragment"],{children:[!0===m&&Object(l["jsx"])("div",{style:{height:"calc(100vh)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(l["jsx"])(i["a"],{})}),!1===m&&Object(l["jsxs"])(l["Fragment"],{children:[Object(l["jsx"])(p,{current:e.current,username:null===u||void 0===u||null===(t=u.userMeta)||void 0===t?void 0:t.username,id:null===u||void 0===u||null===(n=u.userMeta)||void 0===n?void 0:n.id,isAdmin:null===u||void 0===u||null===(c=u.userMeta)||void 0===c?void 0:c.isAdmin}),Object(l["jsx"])("div",{className:o.a.root,style:{maxWidth:e.maxWidth?e.maxWidth:""},children:Object(l["jsxs"])("div",{className:o.a.secondRoot,children:[Object(l["jsx"])("div",{className:o.a.main,children:e.children}),Object(l["jsx"])(r["a"],{})]})})]})]})};t["a"]=j},"d5+F":function(e,t,n){e.exports={root:"root___r7IPV",loading:"loading___KDMmm"}},foAP:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));n("q1tI");var s=n("/xQZ"),a=n.n(s),r=n("OUQG"),i=n("nKUr"),c=e=>Object(i["jsx"])("div",{className:"".concat(a.a.codeBoxSegment," ").concat(a.a.codeBoxPre),children:Object(i["jsx"])("pre",{className:"".concat(a.a.codeBoxContent),children:Object(i["jsx"])("div",{className:"language-".concat(e.language),dangerouslySetInnerHTML:{__html:"dangerouslySetInnerHTML"===e.language?e.code:Object(r["a"])(e.code,e.language)}})})}),o={segment:a.a.codeBoxSegment,content:a.a.codeBoxContent,pre:a.a.codeBoxPre}},kiQV:function(e){e.exports=JSON.parse('{"name":"hznuoj-v3-webapp","version":"0.0.64.2","description":"The WebApp of HZNUOJ V3","repository":"https://github.com/HZNU-OJ/HZNUOJ-V3-WebApp","author":"Dup4","license":"MIT","scripts":{"start":"cross-env umi dev","start:no-mock":"cross-env MOCK=none umi dev","start:no-ui":"cross-env UMI_UI=none umi dev","build":"cross-env NODE_OPTIONS=--max-old-space-size=4096 umi build","generate-api":"node scripts/generate-api.js http://localhost:3000/api/docs-json","postinstall":"umi generate tmp","prettier":"prettier --write \'src/**/*.{js,jsx,tsx,less,md,json}\' && prettier --write --parser=typescript \'src/**/*.ts?(x)\'","test":"umi-test","test:coverage":"umi-test --coverage"},"gitHooks":{"pre-commit":"lint-staged"},"lint-staged":{"*.{js,jsx,less,md,json}":["prettier --write"],"*.ts?(x)":["prettier --parser=typescript --write"]},"dependencies":{"@ahooksjs/use-url-state":"^2.5.6","@ant-design/pro-layout":"^6.5.0","@hackmd/markdown-it-task-lists":"^2.1.1","@types/array-move":"^2.0.0","@types/react-sortable-hoc":"^0.7.1","@types/validator":"^13.1.3","@umijs/preset-react":"1.x","ansi_up":"^5.0.0","antd":"^4.12.3","array-move":"^3.0.1","axios":"^0.21.1","blueimp-md5":"^2.18.0","class-validator":"^0.13.1","css-element-queries":"^1.2.3","dayjs":"^1.10.4","highcharts":"^9.0.1","highcharts-react-official":"^3.0.0","markdown-it":"^12.0.4","markdown-it-container":"^3.0.0","markdown-it-math-loose":"^4.1.1","markdown-it-mentions":"^1.0.0","markdown-it-merge-cells":"^1.0.1","markdown-it-toc-and-anchor":"^4.2.0","mathjax-full":"^3.1.2","monaco-editor-webpack-plugin":"^3.0.0","p-all":"^3.0.0","prismjs":"^1.23.0","react-calendar-heatmap":"^1.8.1","react-google-recaptcha-v3":"^1.8.0","react-highlight-words":"^0.17.0","react-monaco-editor":"^0.42.0","react-sortable-hoc":"^2.0.0","react-tooltip":"^4.2.15","twemoji":"^13.0.1","umi":"^3.3.7","uuid":"^8.3.2","validator":"^13.5.2","xss":"^1.0.8"},"devDependencies":{"@types/blueimp-md5":"^2.7.0","@types/markdown-it":"^12.0.1","@types/markdown-it-container":"^2.0.3","@types/prismjs":"^1.16.3","@types/react":"^17.0.3","@types/react-calendar-heatmap":"^1.6.2","@types/react-dom":"^16.9.0","@types/react-tooltip":"^4.2.4","@types/uuid":"^8.3.0","@umijs/preset-ui":"^2.2.9","@umijs/test":"^3.3.7","babel-plugin-import":"^1.13.3","babel-plugin-prismjs":"^2.0.1","cross-env":"^7.0.3","dtsgenerator":"2.7.0","lint-staged":"^10.0.7","prettier":"^2.2.0","react":"17.x","react-dom":"17.x","typescript":"^4.1.2","yorkie":"^2.0.0"},"engines":{"node":">=14.15.5"}}')}}]);