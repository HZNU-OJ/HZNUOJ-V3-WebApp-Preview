(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"2ekl":function(e,t,n){"use strict";n("q1tI");var a=n("mn2G"),s=n.n(a),i=n("nKUr"),c=e=>Object(i["jsx"])("div",{className:s.a.divider});t["a"]=c},"7ptE":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("WmNS"),s=n.n(a),i=n("9og8");function c(e){return r.apply(this,arguments)}function r(){return r=Object(i["a"])(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:return e.abrupt("return",!0);case 6:e.prev=6,e.t0=e["catch"](0);case 8:return n=document.createElement("textarea"),n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="2em",n.style.height="2em",n.style.padding="0",n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value=t,document.body.appendChild(n),n.focus(),n.select(),a=document.execCommand("copy"),document.body.removeChild(n),e.abrupt("return",a);case 26:case"end":return e.stop()}}),e,null,[[0,6]])}))),r.apply(this,arguments)}},ASxD:function(e,t,n){"use strict";n("q1tI");var a=n("9kvl"),s=n("c4wU"),i=n.n(s),c=n("nKUr"),r=e=>Object(c["jsx"])("div",{className:i.a["m-menu"],children:e.menuItemList.map(((t,n)=>Object(c["jsx"])("div",{className:[i.a["m-menu-item"],i.a[e.direction],e.current===t.id?i.a["active"]:""].join(" "),onClick:()=>{a["b"].push(t.link)},children:t.name},n.toString())))});t["a"]=r},HF3G:function(e,t,n){e.exports={center:"center___1xgRN"}},"S/sW":function(e,t,n){e.exports={root:"root___1VgC-",loading:"loading___kVJFr"}},ZXIb:function(e,t,n){e.exports={problemTitle:"problemTitle___zTjME",tag:"tag___3W9lS",type:"type___1td-m",time:"time___QO7Fz",memory:"memory___19PpQ",problemViewHeader:"problemViewHeader___12kV3",left:"left___3KXeP"}},bnip:function(e,t,n){e.exports={root:"root___75B7Y",secondRoot:"secondRoot___PF0A-",main:"main___3b34R","h-header":"h-header___2IoNM"}},bx7e:function(e,t,n){"use strict";var a=n("9kvl"),s=n("q1tI"),i=n("b2pr"),c=n("Qb08"),r=n("bnip"),o=n.n(r),l=n("nKUr");function d(e,t){var n="";return t.forEach((t=>{n+='<li class="'.concat(e===t.id?"am-active":"",'"><a href="').concat(t.link,'">').concat(t.name,"</a></li>")})),n}function u(e,t){var n="";n+='<li class="am-dropdown" data-am-dropdown>',n+="\n  <a class='am-dropdown-toggle' data-am-dropdown-toggle href='javascript:;'>\n  <span class='am-icon-user'></span>&nbsp;".concat(t,"&nbsp;<span class='am-icon-caret-down'></span>\n  </a>"),n+='<ul class="am-dropdown-content">';for(var a=0;a<e.length;++a)0!==e[a].length&&(e[a].forEach((e=>{n+='<li><a href="'.concat(e.link,'">').concat(e.name,"</a></li>")})),a<e.length-1&&(n+='<li class="am-divider"></li>'));return n+="</ul>",n+="</li>",n}function m(e,t,n,a,s){var i=[{id:"contests",name:"Contests",link:"/contests"},{id:"problem_set",name:"Problem Set",link:"/problemset"},{id:"submissions",name:"Submissions",link:"/submissions"},{id:"users",name:"Users",link:"/users"},{id:"discussions",name:"Discussions",link:"/discussions"}],c=[{id:"enter",name:"Enter",link:"/login"}],r=[[{id:"my_profile",name:"My Profile",link:"/user/".concat(n)},{id:"my_submissions",name:"My Submissions",link:"/submissions?username=".concat(null!==n&&void 0!==n?n:"")},...s?[{id:"my_discussions",name:"My Discussions",link:"/discussions?publisherId=".concat(null!==a&&void 0!==a?a:"")}]:[]],s?[{id:"polygon",name:"Polygon",link:"/polygon"},{id:"administration",name:"Administration",link:"/admin"}]:[],[{id:"settings",name:"Settings",link:"/settings"},{id:"logout",name:"Logout",link:"/logout"}]];return{__html:'\n    <header class="am-topbar-inverse am-topbar-fixed-toped" style="font-size: 16px; margin-top: 0px;">\n    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-primary am-show-sm-only"\n      data-am-collapse="{target: \'#collapse-head\'}">\n      <span class="am-sr-only">\u5bfc\u822a\u5207\u6362</span>\n      <span class="am-icon-bars"></span>\n    </button>\n    <div class="am-container '.concat(o.a["h-header"],'">\n      <h1 class="am-topbar-brand">\n        <a href="/" >').concat(e,'</a>\n      </h1>\n      <div class="am-collapse am-topbar-collapse" id="collapse-head">\n        <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(d(t,i),'\n        </ul>\n        <div class="am-topbar-right" style="padding-right: 0px;">\n          <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(n?u(r,n):d(t,c),"\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n    ")}}var b=e=>Object(l["jsx"])("div",{dangerouslySetInnerHTML:m("HZNU Online Judge",e.current,e.username,e.id,e.isAdmin)}),p=e=>{var t,n,r,d=Object(a["d"])("@@initialState"),u=d.initialState,m=d.loading;return Object(s["useEffect"])((()=>{window.$(".am-dropdown").dropdown()})),Object(l["jsxs"])(l["Fragment"],{children:[!0===m&&Object(l["jsx"])("div",{style:{height:"calc(100vh)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(l["jsx"])(c["a"],{})}),!1===m&&Object(l["jsxs"])(l["Fragment"],{children:[Object(l["jsx"])(b,{current:e.current,username:null===u||void 0===u||null===(t=u.userMeta)||void 0===t?void 0:t.username,id:null===u||void 0===u||null===(n=u.userMeta)||void 0===n?void 0:n.id,isAdmin:null===u||void 0===u||null===(r=u.userMeta)||void 0===r?void 0:r.isAdmin}),Object(l["jsx"])("div",{className:o.a.root,style:{maxWidth:e.maxWidth?e.maxWidth:""},children:Object(l["jsxs"])("div",{className:o.a.secondRoot,children:[Object(l["jsx"])("div",{className:o.a.main,children:e.children}),Object(l["jsx"])(i["a"],{})]})})]})]})};t["a"]=p},c4wU:function(e,t,n){e.exports={"m-menu":"m-menu___2hTVT","m-menu-item":"m-menu-item___31LxL",left:"left___2LY0w",right:"right___2AFVv",active:"active___EP5rv"}},fwH8:function(e,t,n){"use strict";n.r(t);var a=n("WmNS"),s=n.n(a),i=(n("miYZ"),n("tsqr")),c=(n("14J3"),n("BMrR")),r=(n("1YHl"),n("VNzZ")),o=(n("jCWc"),n("kPKH")),l=n("9og8"),d=n("tJVT"),u=n("q1tI"),m=n("7AqN"),b=n("bx7e"),p=n("S/sW"),j=n.n(p),O=n("ASxD"),x=n("2ekl"),h=n("Urjs"),v=n("Qb08"),g=(n("aHsQ"),n("sGsY")),_=n("ZXIb"),f=n.n(_),y=n("nKUr"),S=e=>Object(y["jsx"])("div",{className:f.a.problemViewHeader,children:Object(y["jsxs"])(c["a"],{gutter:16,align:"top",children:[Object(y["jsx"])(o["a"],{xs:24,sm:24,md:16,lg:16,xl:16,children:Object(y["jsxs"])("div",{className:f.a.left,children:[Object(y["jsx"])("div",{className:f.a.problemTitle,children:"#".concat(e.id,". ").concat(e.title)}),Object(y["jsx"])("div",{className:"".concat(f.a.tag," ").concat(f.a.type),children:e.type}),Object(y["jsxs"])("div",{className:[f.a.tag,f.a.time].join(" "),children:[e.timeLimit," ms"]}),Object(y["jsxs"])("div",{className:[f.a.tag,f.a.memory].join(" "),children:[e.memoryLimit," MiB"]})]})}),Object(y["jsx"])(o["a"],{xs:24,sm:24,md:8,lg:8,xl:8,children:Object(y["jsxs"])(c["a"],{gutter:16,align:"top",children:[Object(y["jsx"])(o["a"],{span:12,children:Object(y["jsx"])(g["a"],{title:"AC.",value:e.acceptedSubmissionCount})}),Object(y["jsx"])(o["a"],{span:12,children:Object(y["jsx"])(g["a"],{title:"SUBS.",value:e.submissionCount})})]})})]})}),k=(n("5Dmo"),n("3S7+"),n("gCJV")),w=n.n(k),N=n("7ptE"),C=(n("rqeN"),n("+YFz"),e=>{var t=function(){var e=Object(l["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(N["a"])(t);case 2:i["default"].success("Copied!");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y["jsx"])("div",{className:w.a.copyBtn,onClick:()=>{t(e.text)},children:"Copy"})}),I=e=>Object(y["jsxs"])("div",{className:w.a.exampleRoot,children:[Object(y["jsxs"])("div",{className:w.a.input,children:[Object(y["jsxs"])("div",{className:w.a.title,children:["input",Object(y["jsx"])(C,{text:e.input})]}),Object(y["jsx"])("pre",{children:e.input})]}),Object(y["jsxs"])("div",{className:w.a.output,children:[Object(y["jsxs"])("div",{className:w.a.title,children:["output",Object(y["jsx"])(C,{text:e.output})]}),Object(y["jsx"])("pre",{children:e.output})]})]}),L=n("xAIl"),A=e=>{var t=Object(u["useState"])(!1),n=Object(d["a"])(t,2),a=n[0],s=n[1];return Object(y["jsxs"])("div",{className:"am-panel am-panel-primary",style:{fontSize:15},children:[Object(y["jsx"])("div",{className:"am-panel-hd",style:{padding:"2px 5px",fontSize:16,cursor:"pointer"},onClick:()=>{s((e=>!e))},children:e.title}),Object(y["jsx"])("div",{className:"am-panel-bd",style:{padding:"10px",display:a?"none":""},children:Object(y["jsx"])("div",{style:{marginBottom:-20},children:e.children})})]})},z=e=>Object(y["jsx"])(y["Fragment"],{children:e.contentSections.map(((t,n)=>"Text"===t.type?Object(y["jsx"])("div",{children:Object(y["jsx"])(A,{title:t.sectionTitle,children:Object(y["jsx"])(L["a"],{content:t.text,noSanitize:!0})})},n):"Sample"===t.type?Object(y["jsx"])("div",{children:Object(y["jsx"])(I,{input:e.samples[t.sampleId].inputData,output:e.samples[t.sampleId].outputData})},n):void 0))}),T=n("k1fw"),E=n("v86s"),F=n.n(E),V=n("HF3G"),q=n.n(V),H=()=>Promise.all([n.e(0),n.e(9),n.e(10),n.e(66)]).then(n.bind(null,"GCGV")),M=Object(u["lazy"])(H),R=e=>{var t,n=Object(y["jsx"])("div",{className:q.a.center,style:{height:null!==(t=parseInt(e.height))&&void 0!==t?t:480},children:Object(y["jsx"])(v["a"],{})});return Object(y["jsx"])(u["Suspense"],{fallback:n,children:Object(y["jsx"])(M,Object(T["a"])({},e))})},B=Object.assign(R,{load:H}),P=n("f133"),U=n("d1CT"),W={c:{language:"c",compileAndRunOptions:{compiler:"gcc",std:"c11",O:"2",m:"64"}},cpp:{language:"cpp",compileAndRunOptions:{compiler:"g++",std:"c++17",O:"2",m:"64"}},java:{language:"java",compileAndRunOptions:{}},python:{language:"python",compileAndRunOptions:{version:"3.9"}}},Y=e=>{var t,n,a,c,r=Object(u["useState"])(null!==(t=null===(n=e.lastSubmissionContent)||void 0===n?void 0:n.code)&&void 0!==t?t:""),o=Object(d["a"])(r,2),m=o[0],b=o[1],p=Object(u["useState"])(null!==(a=null===(c=e.lastSubmissionContent)||void 0===c?void 0:c.language)&&void 0!==a?a:"cpp"),j=Object(d["a"])(p,2),O=j[0],x=j[1],v=Object(u["useState"])(-1),g=Object(d["a"])(v,2),_=g[0],f=g[1],S=Object(h["d"])(0,577),k=Object(h["b"])(),w=Object(u["useState"])(!1),N=Object(d["a"])(w,2),C=N[0],I=N[1];function L(){return A.apply(this,arguments)}function A(){return A=Object(l["a"])(s.a.mark((function t(){var n,a,c;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return I(!0),t.next=3,P["c"].submission.submit({problemId:e.id,content:Object(T["a"])(Object(T["a"])({code:m},W[O]),{},{skipSamples:!0})},k("SubmitProblem"));case 3:n=t.sent,a=n.requestError,c=n.response,a?i["default"].error(a):c.error?i["default"].error(c.error):(i["default"].success("Submit Successfully!"),f(c.submissionId),I(!1));case 7:case"end":return t.stop()}}),t)}))),A.apply(this,arguments)}return Object(y["jsxs"])("div",{className:F.a.root,children:[-1!==_&&Object(y["jsx"])("div",{style:{marginBottom:20},children:Object(y["jsx"])(U["a"],{query:{minId:_,takeCount:1}})}),Object(y["jsx"])(B,{height:S?"220":"500",value:m,language:O,setLanguage:x,onSubmit:L,submitButtonLoading:C,onChange:e=>{b(e)}})]})},D=e=>Object(y["jsx"])(y["Fragment"],{children:Object(y["jsx"])("div",{className:F.a.root,children:Object(y["jsx"])(U["a"],{query:{problemId:e.id}})})}),G=e=>{var t=Object(m["l"])(),n=Object(h["g"])({tab:"statement"}),a=Object(d["a"])(n,2),p=a[0],g=(a[1],location.pathname),_=Object(u["useState"])(!1),f=Object(d["a"])(_,2),k=f[0],w=f[1],N=Object(h["d"])(0,992),C=[{id:"statement",name:"Statement",link:"".concat(g,"?tab=statement")},{id:"submit",name:"Submit",link:"".concat(g,"?tab=submit")},{id:"submissions",name:"Submissions",link:"".concat(g,"?tab=submissions")}],I=Object(u["useState"])(""),L=Object(d["a"])(I,2),A=L[0],T=L[1],E=Object(u["useState"])(""),F=Object(d["a"])(E,2),V=F[0],q=F[1],H=Object(u["useState"])(0),M=Object(d["a"])(H,2),R=M[0],B=M[1],U=Object(u["useState"])(0),W=Object(d["a"])(U,2),G=W[0],J=W[1],K=Object(u["useState"])([]),Q=Object(d["a"])(K,2),X=Q[0],Z=Q[1],$=Object(u["useState"])([]),ee=Object(d["a"])($,2),te=ee[0],ne=ee[1],ae=Object(u["useState"])(0),se=Object(d["a"])(ae,2),ie=se[0],ce=se[1],re=Object(u["useState"])(0),oe=Object(d["a"])(re,2),le=oe[0],de=oe[1],ue=Object(u["useState"])({}),me=Object(d["a"])(ue,2),be=me[0],pe=me[1];function je(){return Oe.apply(this,arguments)}function Oe(){return Oe=Object(l["a"])(s.a.mark((function e(){var n,a,c,r,o;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P["c"].problem.getProblem({id:parseInt(t.id),localizedContentsOfLocale:"en_US",localizedContentsTitleOnly:!1,samples:!0,judgeInfo:!0,statistics:!0,lastSubmissionAndLastAcceptedSubmission:!0});case 2:n=e.sent,a=n.requestError,c=n.response,a?i["default"].error(a):c.error?i["default"].error(c.error):(T(c.localizedContentsOfLocale.title),q(c.meta.type),B(c.meta.submissionCount),J(c.meta.acceptedSubmissionCount),Z(c.localizedContentsOfLocale.contentSections),ne(c.samples),ce(null===(r=c.judgeInfo)||void 0===r?void 0:r.timeLimit),de(null===(o=c.judgeInfo)||void 0===o?void 0:o.memoryLimit),pe(c.lastSubmission.lastSubmissionContent),w(!0));case 6:case"end":return e.stop()}}),e)}))),Oe.apply(this,arguments)}return Object(u["useEffect"])((()=>{je()}),[]),Object(y["jsx"])(y["Fragment"],{children:Object(y["jsx"])(b["a"],{current:"problem_set",children:Object(y["jsxs"])("div",{className:j.a.root,children:[!k&&Object(y["jsx"])("div",{className:j.a.loading,children:Object(y["jsx"])(v["a"],{})}),k&&Object(y["jsxs"])(y["Fragment"],{children:[Object(y["jsx"])(S,{id:t.id,title:A,type:V,submissionCount:R,acceptedSubmissionCount:G,timeLimit:ie,memoryLimit:le}),Object(y["jsx"])(x["a"],{}),Object(y["jsxs"])(c["a"],{gutter:16,align:"top",children:[Object(y["jsx"])(o["a"],{xs:{span:24,order:2},sm:{span:24,order:2},md:{span:24,order:2},lg:{span:21,order:1},xl:{span:21,order:1},children:Object(y["jsxs"])(y["Fragment"],{children:["statement"===p.tab&&Object(y["jsx"])(z,{contentSections:X,samples:te}),"submit"===p.tab&&Object(y["jsx"])(Y,{id:parseInt(t.id),lastSubmissionContent:be}),"submissions"===p.tab&&Object(y["jsx"])(D,{id:parseInt(t.id)})]})}),Object(y["jsxs"])(o["a"],{xs:{span:24,order:1},sm:{span:24,order:1},md:{span:24,order:1},lg:{span:3,order:2},xl:{span:3,order:2},children:[N&&Object(y["jsx"])(O["a"],{current:p.tab,menuItemList:C,direction:"right"}),!N&&Object(y["jsx"])(r["a"],{offsetTop:10,children:Object(y["jsx"])(O["a"],{current:p.tab,menuItemList:C,direction:"right"})})]})]})]})]})})})};t["default"]=G},gCJV:function(e,t,n){e.exports={exampleRoot:"exampleRoot___38k_z",input:"input___1TQHi",output:"output___jysY5",yourOutput:"yourOutput___2gv_d",checkerMessage:"checkerMessage___okmsY",title:"title___3yXDH",copyBtn:"copyBtn___W22Oj",downloadBtn:"downloadBtn___12pGg"}},mn2G:function(e,t,n){e.exports={divider:"divider___Qy6d0"}},rqeN:function(e,t,n){"use strict";function a(e){var t=document.createElement("a");t.target="_blank",t.href=e,t.download="",t.click()}n.d(t,"a",(function(){return a}))},v86s:function(e,t,n){e.exports={root:"root___nSukY",loading:"loading___rEzTc"}},xAIl:function(e,t,n){"use strict";var a=n("k1fw"),s=(n("cWXX"),n("/ezw")),i=n("q1tI"),c=n("nKUr"),r=()=>Promise.all([n.e(13),n.e(63),n.e(64)]).then(n.bind(null,"1SVi")),o=Object(i["lazy"])(r),l=e=>{var t=Object(c["jsx"])(s["a"],{active:!0,title:!0,paragraph:{rows:e.placeholderLines||4}});return Object(c["jsxs"])(i["Suspense"],{fallback:t,children:[!0===e.loading&&t,!0!==e.loading&&Object(c["jsx"])(o,Object(a["a"])({},e))]})};t["a"]=Object.assign(l,{load:r})}}]);