(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"8WSx":function(t,e,n){"use strict";n.r(e);n("g9YV");var r,s=n("wCAj"),i=n("k1fw"),a=n("tJVT"),o=(n("5Dmo"),n("3S7+")),c=n("q1tI"),u=n("Qb08"),d=n("EW0o"),l={PENDING:"#3bb4f2",RUNNING:"rgb(94, 185, 94)",FROZEN:"#dd514c",FINISHED:"#0e90d2"};(function(t){t["pending"]="PENDING",t["running"]="RUNNING",t["frozen"]="FROZEN",t["finished"]="FINISHED"})(r||(r={}));n("Awhp");var h,m,f=n("KrTs"),p=n("nKUr"),g=t=>Object(p["jsxs"])("div",{children:[Object(p["jsx"])(f["a"],{color:l[t]}),Object(p["jsx"])("b",{style:{marginLeft:-5,color:l[t]},children:t})]}),b=n("NSXb"),v=n.n(b),j=n("yeqW"),_=n.n(j),w=n("acru"),O=n("Urjs");function x(t){var e="MM/DD HH:mm",n="YYYY-MM-DD HH:mm:ss";return Object(p["jsx"])(o["a"],{placement:"top",title:Object(w["a"])(t,n),children:Object(w["a"])(t,e)})}function y(t){return t.replace("FROZEN","RUNNING")}function $(){for(var t=[],e=1;e<=100;++e)t.push({id:e,contestName:"2020 Intelligent Video Coding Contest ".concat(e),writers:["Dup4","Hsueh-","ltslts"].join(", "),start:1613656156+100*e,end:1613656156+10*e*100,status:y([r.pending,r.running,r.frozen,r.finished][e-1>2?3:e-1]),register:"",mode:"ICPC"});return t}(function(t){t["id"]="#",t["contestName"]="Contest Name",t["writers"]="Writers",t["start"]="Start",t["end"]="End",t["status"]="Status",t["register"]="Register",t["mode"]="Mode"})(h||(h={})),function(t){t["icpc"]="ICPC",t["ioi"]="IOI",t["codeForces"]="CodeForces"}(m||(m={}));var M=t=>{var e=Object(c["useState"])(!1),n=Object(a["a"])(e,2),l=n[0],f=n[1];Object(c["useEffect"])((()=>{f(!0)}),[]);var b=[Object(i["a"])(Object(i["a"])({title:h.contestName,dataIndex:"contestName",key:"contestName",width:"320px",align:"center"},Object(O["d"])("contestName",h.contestName)),{},{render:t=>Object(p["jsx"])(o["a"],{placement:"top",title:t,children:Object(p["jsx"])("a",{href:"/",className:["h-ellipsis"].join(" "),children:t})})}),Object(i["a"])({title:h.writers,dataIndex:"writers",key:"writers",width:"100px",align:"center"},Object(O["d"])("writers",h.writers)),{title:h.start,dataIndex:"start",key:"start",width:"160px",align:"center",sorter:(t,e)=>t.start-e.start,render:x},{title:h.end,dataIndex:"end",key:"end",width:"160px",align:"center",sorter:(t,e)=>t.end-e.end,render:x},Object(i["a"])(Object(i["a"])({title:h.status,dataIndex:"status",key:"status",width:"100px",align:"center"},Object(O["c"])("status","Status",[r.pending,r.running,r.finished].map((t=>({title:g(t),value:t}))),160)),{},{render:g}),{title:"Register",dataIndex:"register",key:"register",width:"100px",align:"center"},{title:"Standings",dataIndex:"standings",key:"standings",width:"100px",align:"center"},Object(i["a"])({title:"Mode",dataIndex:"mode",key:"mode",width:"100px",align:"center"},Object(O["c"])("mode","Mode",[m.icpc,m.ioi,m.codeForces].map((t=>({title:Object(p["jsx"])("b",{children:t}),value:t}))),160))];return Object(p["jsx"])(d["a"],{current:"contests",children:Object(p["jsxs"])("div",{className:v.a.root,children:[!1===l&&Object(p["jsx"])("div",{className:v.a.loading,children:Object(p["jsx"])(u["a"],{})}),!0===l&&Object(p["jsx"])("div",{className:v.a.tableRoot,children:Object(p["jsx"])(s["a"],{size:"small",scroll:{x:920},sticky:!0,columns:b,dataSource:$(),className:_.a.table,rowKey:t=>t.id,pagination:{hideOnSinglePage:!0,showQuickJumper:!0,showSizeChanger:!0,defaultPageSize:32,pageSizeOptions:["8","16","32","64","128","256"]}})})]})})};e["default"]=M},"8tQ+":function(t,e,n){t.exports={footer:"footer___3EQLU",name:"name___1AcRw",version:"version___3owxy",github:"github___2s1sl"}},EW0o:function(t,e,n){"use strict";var r=n("WmNS"),s=n.n(r),i=n("9og8"),a=n("tJVT"),o=n("8tQ+"),c=n.n(o),u=n("kiQV"),d=n("nKUr"),l=()=>Object(d["jsx"])("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 496 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(d["jsx"])("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}),h=n("q1tI"),m=n("f133"),f=t=>{var e=Object(h["useState"])("Loading"),n=Object(a["a"])(e,2),r=n[0],o=n[1];function f(){return p.apply(this,arguments)}function p(){return p=Object(i["a"])(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["c"].app.getVersion();case 2:e=t.sent,e.requestError,n=e.response,n&&o(n.version);case 6:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}return Object(h["useEffect"])((()=>{f()}),[]),Object(d["jsxs"])("footer",{className:c.a.footer,children:[Object(d["jsx"])("div",{className:c.a.name,children:"Hangzhou Normal U Online Judge V3"}),Object(d["jsxs"])("div",{className:c.a.version,children:["WebApp: ",u.version," | API: ",r]}),Object(d["jsx"])("div",{className:c.a.icon,children:Object(d["jsx"])("a",{className:c.a.github,title:"GitHub",target:"_blank",rel:"noreferrer noopener",href:"https://github.com/hznu-oj",children:Object(d["jsx"])(l,{})})})]})},p=f,g=n("KYGz"),b=n.n(g),v=n("9kvl"),j=n("Qb08");function _(t,e){var n="";return e.forEach((e=>{n+='<li class="'.concat(t===e.id?"am-active":"",'"><a href="').concat(e.link,'">').concat(e.name,"</a></li>")})),n}function w(t,e){var n="";n+='<li class="am-dropdown" data-am-dropdown>',n+="\n  <a class='am-dropdown-toggle' data-am-dropdown-toggle href='javascript:;'>\n  <span class='am-icon-user'></span>&nbsp;Dup4&nbsp;<span class='am-icon-caret-down'></span>\n  </a>",n+='<ul class="am-dropdown-content">';for(var r=0;r<t.length;++r)t[r].forEach((t=>{n+='<li><a href="'.concat(t.link,'">').concat(t.name,"</a></li>")})),r<t.length-1&&(n+='<li class="am-divider"></li>');return n+="</ul>",n+="</li>",n}function O(t,e,n){var r=[{id:"contests",name:"Contests",link:"/contests"},{id:"problemSet",name:"Problem Set",link:"/problemset"},{id:"submissions",name:"Submissions",link:"/submissions"},{id:"users",name:"Users",link:"/users"},{id:"discussion",name:"Discussion",link:"/disscussion"}],s=[{id:"enter",name:"Enter",link:"/login"}],i=[[{id:"my_profile",name:"My Profile",link:"/"},{id:"my_submissions",name:"My Submissions",link:"/"}],[{id:"edit_profile",name:"Edit Profile",link:"/"},{id:"logout",name:"Logout",link:"/logout"}]];return{__html:'\n    <header class="am-topbar-inverse am-topbar-fixed-toped" style="font-size: 16px; margin-top: 0px;">\n    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-primary am-show-sm-only"\n      data-am-collapse="{target: \'#collapse-head\'}">\n      <span class="am-sr-only">\u5bfc\u822a\u5207\u6362</span>\n      <span class="am-icon-bars"></span>\n    </button>\n    <div class="am-container '.concat(b.a["h-header"],'">\n      <h1 class="am-topbar-brand">\n        <a href="/" >').concat(t,'</a>\n      </h1>\n      <div class="am-collapse am-topbar-collapse" id="collapse-head">\n        <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(_(e,r),'\n        </ul>\n        <div class="am-topbar-right" style="padding-right: 0px;">\n          <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(n?w(i,n):_(e,s),"\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n    ")}}var x=t=>Object(d["jsx"])("div",{dangerouslySetInnerHTML:O("HZNU Online Judge",t.current,t.username)}),y=t=>{var e,n=Object(v["c"])("@@initialState"),r=n.initialState,s=n.loading;return Object(h["useEffect"])((()=>{window.$(".am-dropdown").dropdown()})),Object(d["jsxs"])(d["Fragment"],{children:[!0===s&&Object(d["jsx"])("div",{style:{height:"calc(100vh)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d["jsx"])(j["a"],{})}),!1===s&&Object(d["jsxs"])(d["Fragment"],{children:[Object(d["jsx"])(x,{current:t.current,username:null===r||void 0===r||null===(e=r.userMeta)||void 0===e?void 0:e.username}),Object(d["jsx"])("div",{className:b.a.root,children:Object(d["jsxs"])("div",{className:b.a.secondRoot,children:[Object(d["jsx"])("div",{className:b.a.main,children:t.children}),Object(d["jsx"])(p,{})]})})]})]})};e["a"]=y},KYGz:function(t,e,n){t.exports={root:"root___13siR",secondRoot:"secondRoot___3VJJZ",main:"main___ZgJtu","h-header":"h-header___38UsQ"}},NSXb:function(t,e,n){t.exports={root:"root___1YVxm",loading:"loading___2WwEo",tableRoot:"tableRoot___xPGgM"}},Wgwc:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",s="day",i="week",a="month",o="quarter",c="year",u="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,a),i=n-s<0,o=e.clone().add(r+(i?-1:1),a);return+(-(r+(n-s)/(i?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:c,w:i,d:s,D:u,h:r,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=h;var b=function(t){return t instanceof w},v=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)g[t]&&(r=t),e&&(g[t]=e,r=t);else{var s=t.name;g[s]=t,r=s}return!n&&r&&(p=r),r||!n&&p},j=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},_=f;_.l=v,_.i=b,_.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function h(t){this.$L=v(t.locale,null,!0),this.parse(t)}var m=h.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return _},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return j(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<j(t)},m.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,o){var d=this,l=!!_.u(o)||o,h=_.p(t),m=function(t,e){var n=_.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return l?n:n.endOf(s)},f=function(t,e){return _.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},p=this.$W,g=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return l?m(1,0):m(31,11);case a:return l?m(1,g):m(0,g+1);case i:var j=this.$locale().weekStart||0,w=(p<j?p+7:p)-j;return m(l?b-w:b+(6-w),g);case s:case u:return f(v+"Hours",0);case r:return f(v+"Minutes",1);case n:return f(v+"Seconds",2);case e:return f(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(i,o){var d,l=_.p(i),h="set"+(this.$u?"UTC":""),m=(d={},d[s]=h+"Date",d[u]=h+"Date",d[a]=h+"Month",d[c]=h+"FullYear",d[r]=h+"Hours",d[n]=h+"Minutes",d[e]=h+"Seconds",d[t]=h+"Milliseconds",d)[l],f=l===s?this.$D+(o-this.$W):o;if(l===a||l===c){var p=this.clone().set(u,1);p.$d[m](f),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[_.p(t)]()},m.add=function(t,o){var u,d=this;t=Number(t);var l=_.p(o),h=function(e){var n=j(d);return _.w(n.date(n.date()+Math.round(e*t)),d)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===s)return h(1);if(l===i)return h(7);var m=(u={},u[n]=6e4,u[r]=36e5,u[e]=1e3,u)[l]||1,f=this.$d.getTime()+t*m;return _.w(f,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=_.z(this),s=this.$locale(),i=this.$H,a=this.$m,o=this.$M,c=s.weekdays,u=s.months,d=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].substr(0,i)},h=function(t){return _.s(i%12||12,t,"0")},m=s.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:_.s(o+1,2,"0"),MMM:d(s.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,c,2),ddd:d(s.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:_.s(i,2,"0"),h:h(1),hh:h(2),a:m(i,a,!0),A:m(i,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||f[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(t,u,d){var l,h=_.p(u),m=j(t),f=6e4*(m.utcOffset()-this.utcOffset()),p=this-m,g=_.m(this,m);return g=(l={},l[c]=g/12,l[a]=g,l[o]=g/3,l[i]=(p-f)/6048e5,l[s]=(p-f)/864e5,l[r]=p/36e5,l[n]=p/6e4,l[e]=p/1e3,l)[h]||p,d?g:_.a(g)},m.daysInMonth=function(){return this.endOf(a).$D},m.$locale=function(){return g[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return _.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),O=w.prototype;return j.prototype=O,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",s],["$M",a],["$y",c],["$D",u]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,w,j),t.$i=!0),j},j.locale=v,j.isDayjs=b,j.unix=function(t){return j(1e3*t)},j.en=g[p],j.Ls=g,j.p={},j}))},acru:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("Wgwc"),s=n.n(r);n("pHGr");function i(t,e){return"string"===typeof t&&(t=parseInt(t)),s.a.unix(t).format(e)}s.a.locale("zh-cn")},kiQV:function(t){t.exports=JSON.parse('{"name":"hznuoj-v3-webapp","version":"0.0.31","description":"The WebApp of HZNUOJ V3","repository":"https://github.com/HZNU-OJ/HZNUOJ-V3-WebApp","author":"Dup4","license":"MIT","scripts":{"start":"cross-env umi dev","start:no-mock":"cross-env MOCK=none umi dev","start:no-ui":"cross-env UMI_UI=none umi dev","build":"cross-env NODE_OPTIONS=--max-old-space-size=4096 umi build","generate-api":"node scripts/generate-api.js http://localhost:3000/api/docs-json","postinstall":"umi generate tmp","prettier":"prettier --write \'src/**/*.{js,jsx,tsx,less,md,json}\' && prettier --write --parser=typescript \'src/**/*.ts?(x)\'","test":"umi-test","test:coverage":"umi-test --coverage"},"gitHooks":{"pre-commit":"lint-staged"},"lint-staged":{"*.{js,jsx,less,md,json}":["prettier --write"],"*.ts?(x)":["prettier --parser=typescript --write"]},"dependencies":{"@ant-design/pro-layout":"^6.5.0","@hackmd/markdown-it-task-lists":"^2.1.1","@types/validator":"^13.1.3","@umijs/preset-react":"1.x","antd":"^4.12.3","axios":"^0.21.1","class-validator":"^0.13.1","dayjs":"^1.10.4","highcharts":"^9.0.1","highcharts-react-official":"^3.0.0","markdown-it":"^12.0.4","markdown-it-math-loose":"^4.1.1","markdown-it-mentions":"^1.0.0","markdown-it-merge-cells":"^1.0.1","mathjax-full":"^3.1.2","monaco-editor-webpack-plugin":"^3.0.0","react-google-recaptcha-v3":"^1.8.0","react-highlight-words":"^0.17.0","react-monaco-editor":"^0.42.0","twemoji":"^13.0.1","umi":"^3.3.7","uuid":"^8.3.2","validator":"^13.5.2","xss":"^1.0.8"},"devDependencies":{"@types/react":"^16.9.0","@types/react-dom":"^16.9.0","@umijs/preset-ui":"^2.2.9","@umijs/test":"^3.3.7","cross-env":"^7.0.3","dtsgenerator":"2.7.0","lint-staged":"^10.0.7","prettier":"^2.2.0","react":"17.x","react-dom":"17.x","typescript":"^4.1.2","yorkie":"^2.0.0"},"engines":{"node":">=14.15.5"}}')},pHGr:function(t,e,n){!function(e,r){t.exports=r(n("Wgwc"))}(0,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={name:"zh-cn",weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"\u5468";default:return t+"\u65e5"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},relativeTime:{future:"%s\u5185",past:"%s\u524d",s:"\u51e0\u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},meridiem:function(t,e){var n=100*t+e;return n<600?"\u51cc\u6668":n<900?"\u65e9\u4e0a":n<1100?"\u4e0a\u5348":n<1300?"\u4e2d\u5348":n<1800?"\u4e0b\u5348":"\u665a\u4e0a"}};return t.locale(e,null,!0),e}))},yeqW:function(t,e,n){t.exports={table:"table___167Jq"}}}]);