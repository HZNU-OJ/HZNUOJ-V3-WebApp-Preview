(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"0Gvx":function(e,t,n){e.exports={root:"root___3Isu6"}},"3YPi":function(e,t,n){"use strict";n("14J3");var a=n("BMrR"),r=(n("jCWc"),n("kPKH")),i=(n("1YHl"),n("VNzZ")),o=n("q1tI"),s=n("7AqN"),c=n("9kvl"),l=n("ASxD"),u=n("XpTp"),d=n("Urjs"),m=n("0Gvx"),b=n.n(m),p=n("nKUr");function j(e){var t=t=>"/admin/contest/".concat(t,"/").concat(e),n=[{id:"dashboard",name:"Dashboard",link:t("dashboard")},{id:"problem",name:"Problem",link:t("problem")},{id:"user",name:"User",link:t("user")},{id:"email",name:"Email",link:t("email")}];return n}var f=e=>{var t=Object(s["l"])(),n=Object(d["d"])(0,768),m=Object(c["d"])("@@initialState"),f=(m.initialState,m.loading),h=Object(d["a"])(),v=h.getToken,x=Object(d["c"])();return Object(o["useEffect"])((()=>{!1===f&&""===v()&&x()}),[f]),Object(p["jsx"])(p["Fragment"],{children:Object(p["jsx"])(u["a"],{current:"contests",children:Object(p["jsx"])("div",{className:b.a.root,children:Object(p["jsxs"])(a["a"],{gutter:16,align:"top",children:[Object(p["jsxs"])(r["a"],{xs:24,sm:24,md:4,lg:4,xl:4,children:[n&&Object(p["jsx"])(l["a"],{current:e.current,menuItemList:j(parseInt(t.id)),direction:"left"}),!n&&Object(p["jsx"])(i["a"],{offsetTop:10,children:Object(p["jsx"])(l["a"],{current:e.current,menuItemList:j(parseInt(t.id)),direction:"left"})})]}),Object(p["jsx"])(r["a"],{xs:24,sm:24,md:20,lg:20,xl:20,children:e.children})]})})})})};t["a"]=f},"3ahm":function(e,t,n){e.exports={tableRoot:"tableRoot___3TK1X"}},"4JlD":function(e,t,n){"use strict";var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?i(o(e),(function(o){var s=encodeURIComponent(a(o))+n;return r(e[o])?i(e[o],(function(e){return s+encodeURIComponent(a(e))})).join(t):s+encodeURIComponent(a(e[o]))})).join(t):s?encodeURIComponent(a(s))+n+encodeURIComponent(a(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"4ylV":function(e,t,n){"use strict";n.r(t);var a,r=n("WmNS"),i=n.n(r),o=(n("miYZ"),n("tsqr")),s=(n("g9YV"),n("wCAj")),c=n("9og8"),l=n("tJVT"),u=(n("5Dmo"),n("3S7+")),d=n("q1tI"),m=n("3YPi"),b=n("7AqN"),p=n("3ahm"),j=n.n(p),f=n("yeqW"),h=n.n(f),v=n("Ecwe"),x=n("YjBB"),O=n("JG9v"),g=n("f133"),y=n("nKUr");function w(e,t){var n=0;return 0===t?parseInt((0).toFixed(n)):parseInt((100*e/t).toFixed(n))}(function(e){e["id"]="#",e["problemTitle"]="Problem Title",e["submissions"]="Submissions",e["acceptance"]="Acceptance",e["ratio"]="Ratio"})(a||(a={}));var _=e=>{var t=Object(b["l"])(),n=Object(d["useContext"])(v["a"]),r=[{title:a.id,dataIndex:"id",key:"id",width:"60px",align:"left",sorter:(e,t)=>e.id-t.id,render:x["j"]},{title:a.problemTitle,dataIndex:"problem",key:"problem",width:"540px",align:"left",render:e=>Object(y["jsx"])(u["a"],{placement:"top",title:e.title,children:Object(y["jsx"])("a",{href:"/contest/".concat(t.id,"/problem/").concat(e.orderId),className:["h-ellipsis"].join(" "),children:e.title})})},{title:a.acceptance,dataIndex:"acceptance",key:"acceptance",width:"80px",align:"right",sorter:(e,t)=>e.acceptance-t.acceptance},{title:a.submissions,dataIndex:"submissions",key:"submissions",width:"100px",align:"right",sorter:(e,t)=>e.submissions-t.submissions},{title:a.ratio,dataIndex:"ratio",key:"ratio",width:"60px",align:"right",sorter:(e,t)=>e.ratio-t.ratio,render:e=>Object(y["jsxs"])("span",{children:[e,"%"]})}],p=Object(d["useState"])([]),f=Object(l["a"])(p,2),_=f[0],S=f[1],I=Object(d["useState"])(!0),k=Object(l["a"])(I,2),A=k[0],C=k[1];function U(){return R.apply(this,arguments)}function R(){return R=Object(c["a"])(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["c"].contest.getContest({id:parseInt(t.id)});case 2:n=e.sent,a=n.requestError,r=n.response,a?o["default"].error(a):r.error?o["default"].error(r.error):(S(r.problemMetas.map((e=>({status:e.submission?"Accepted"===e.submission.status?O["a"].solved:O["a"].unSolved:O["a"].unSubmit,id:e.orderId,problem:{orderId:Object(x["j"])(e.orderId),title:e.title},acceptance:e.acceptedSubmissionCount,submissions:e.submissionCount,ratio:w(e.acceptedSubmissionCount,e.submissionCount)})))),C(!1));case 6:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}return Object(d["useEffect"])((()=>{U()}),[n]),Object(y["jsx"])(m["a"],{current:"problem",children:Object(y["jsx"])("div",{className:j.a.tableRoot,children:Object(y["jsx"])(s["a"],{size:"small",scroll:{x:800},sticky:!0,columns:r,loading:A,dataSource:_,className:h.a.table,rowKey:e=>e.id,pagination:{hideOnSinglePage:!0,showQuickJumper:!0,showSizeChanger:!0,defaultPageSize:32,pageSizeOptions:["8","16","32","64","128","256"]}})})})};t["default"]=_},ASxD:function(e,t,n){"use strict";n("q1tI");var a=n("9kvl"),r=n("c4wU"),i=n.n(r),o=n("nKUr"),s=e=>Object(o["jsx"])("div",{className:i.a["m-menu"],children:e.menuItemList.map(((t,n)=>Object(o["jsx"])("div",{className:[i.a["m-menu-item"],i.a[e.direction],e.current===t.id?i.a["active"]:""].join(" "),onClick:()=>{a["b"].push(t.link)},children:t.name},n.toString())))});t["a"]=s},J3HZ:function(e,t,n){e.exports={root:"root___d0IHw",secondRoot:"secondRoot___3OkMH",main:"main___2r23U","h-header":"h-header___1nnV8"}},JG9v:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return u}));var a,r=n("bRQS"),i=n("KXUm"),o=n("nKUr");(function(e){e["solved"]="solved",e["unSolved"]="unSolved",e["unSubmit"]="unSubmit"})(a||(a={}));var s=()=>Object(o["jsx"])("span",{style:{color:"#25ad40",fontWeight:"bold"},children:Object(o["jsx"])(r["a"],{})}),c=()=>Object(o["jsx"])("span",{style:{color:"#3e90cc",fontWeight:"bold"},children:Object(o["jsx"])(i["a"],{})});function l(e){return null==(null===e||void 0===e?void 0:e.submission)?a.unSubmit:"Accepted"===e.submission.status?a.solved:a.unSolved}function u(e){switch(e){case a.solved:return Object(o["jsx"])(s,{});case a.unSolved:return Object(o["jsx"])(c,{});case a.unSubmit:return Object(o["jsx"])(o["Fragment"],{})}}},XpTp:function(e,t,n){"use strict";var a=n("9kvl"),r=n("q1tI"),i=n("b2pr"),o=n("Qb08"),s=n("J3HZ"),c=n.n(s),l=n("Urjs"),u=n("nKUr");function d(e,t){var n="";return t.forEach((t=>{n+='<li class="'.concat(e===t.id?"am-active":"",'"><a href="').concat(t.link,'">').concat(t.name,"</a></li>")})),n}function m(e,t){var n="";n+='<li class="am-dropdown" data-am-dropdown>',n+="\n  <a class='am-dropdown-toggle' data-am-dropdown-toggle href='javascript:;'>\n  <span class='am-icon-user'></span>&nbsp;Dup4&nbsp;<span class='am-icon-caret-down'></span>\n  </a>",n+='<ul class="am-dropdown-content">';for(var a=0;a<e.length;++a)e[a].forEach((e=>{n+='<li><a href="'.concat(e.link,'">').concat(e.name,"</a></li>")})),a<e.length-1&&(n+='<li class="am-divider"></li>');return n+="</ul>",n+="</li>",n}function b(e,t,n){var a=[{id:"general",name:"General",link:"/admin"},{id:"contests",name:"Contests",link:"/admin/contests"}],r=[[{id:"back-oj",name:"Back OJ",link:"/"}]];return{__html:'\n    <header class="am-topbar-inverse am-topbar-fixed-toped" style="font-size: 16px; margin-top: 0px;">\n    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-primary am-show-sm-only"\n      data-am-collapse="{target: \'#collapse-head\'}">\n      <span class="am-sr-only">\u5bfc\u822a\u5207\u6362</span>\n      <span class="am-icon-bars"></span>\n    </button>\n    <div class="am-container '.concat(c.a["h-header"],'">\n      <h1 class="am-topbar-brand">\n        <a href="/admin" >').concat(e,'</a>\n      </h1>\n      <div class="am-collapse am-topbar-collapse" id="collapse-head">\n        <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(d(t,a),'\n        </ul>\n        <div class="am-topbar-right" style="padding-right: 0px;">\n          <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(m(r,n),"\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n    ")}}var p=e=>Object(u["jsx"])("div",{dangerouslySetInnerHTML:b("Administration",e.current,e.username)}),j=e=>{var t,n=Object(a["d"])("@@initialState"),s=n.initialState,d=n.loading,m=Object(l["a"])(),b=m.getToken,j=Object(l["c"])();return Object(r["useEffect"])((()=>{!1===d&&""===b()&&j()}),[d]),Object(r["useEffect"])((()=>{window.$(".am-dropdown").dropdown()})),Object(u["jsxs"])(u["Fragment"],{children:[!0===d&&Object(u["jsx"])("div",{style:{height:"calc(100vh)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u["jsx"])(o["b"],{})}),!1===d&&Object(u["jsxs"])(u["Fragment"],{children:[Object(u["jsx"])(p,{current:e.current,username:null===s||void 0===s||null===(t=s.userMeta)||void 0===t?void 0:t.username}),Object(u["jsx"])("div",{className:c.a.root,style:{maxWidth:e.maxWidth?e.maxWidth:""},children:Object(u["jsxs"])("div",{className:c.a.secondRoot,children:[Object(u["jsx"])("div",{className:c.a.main,children:e.children}),Object(u["jsx"])(i["a"],{})]})})]})]})};t["a"]=j},c4wU:function(e,t,n){e.exports={"m-menu":"m-menu___2hTVT","m-menu-item":"m-menu-item___31LxL",left:"left___2LY0w",right:"right___2AFVv",active:"active___EP5rv"}},kd2E:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var o={};if("string"!==typeof e||0===e.length)return o;var s=/\+/g;e=e.split(t);var c=1e3;i&&"number"===typeof i.maxKeys&&(c=i.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var d,m,b,p,j=e[u].replace(s,"%20"),f=j.indexOf(n);f>=0?(d=j.substr(0,f),m=j.substr(f+1)):(d=j,m=""),b=decodeURIComponent(d),p=decodeURIComponent(m),a(o,b)?r(o[b])?o[b].push(p):o[b]=[o[b],p]:o[b]=p}return o};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},"rAM+":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("Qw5x");function r(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}},s4NR:function(e,t,n){"use strict";t.decode=t.parse=n("kd2E"),t.encode=t.stringify=n("4JlD")},yeqW:function(e,t,n){e.exports={table:"table___167Jq"}}}]);