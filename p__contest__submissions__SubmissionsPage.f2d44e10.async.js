(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"2ekl":function(t,n,e){"use strict";e("q1tI");var s=e("mn2G"),i=e.n(s),r=e("nKUr"),a=t=>Object(r["jsx"])("div",{className:i.a.divider});n["a"]=a},"31oL":function(t,n,e){t.exports={contestTitle:"contestTitle___29u1O",contestHeader:"contestHeader___3m_8G",left:"left___3lwSt"}},CTc0:function(t,n,e){"use strict";e.r(n);var s=e("tJVT"),i=(e("q1tI"),e("SDKw")),r=e.n(i),a=e("d1CT"),o=e("Urjs"),c=e("Ecwe"),u=e("nKUr"),d=t=>{var n=Object(o["g"])({username:""}),e=Object(s["a"])(n,2),i=e[0];e[1];return Object(u["jsx"])(c["a"],{current:"submissions",children:Object(u["jsx"])("div",{className:r.a.root,children:Object(u["jsx"])(a["a"],{query:{submitter:i.username}})})})};n["default"]=d},Ecwe:function(t,n,e){"use strict";var s=e("9kvl"),i=e("7AqN"),r=e("q1tI"),a=e("b2pr"),o=e("Qb08"),c=e("tbxT"),u=e.n(c),d=e("2ekl"),l=e("31oL"),h=e.n(l),f=e("nKUr"),m="2020 Intelligent Video Coding Contest 1",_=t=>Object(f["jsx"])("div",{className:h.a.contestHeader,children:Object(f["jsx"])("div",{className:h.a.contestTitle,children:"".concat(m)})}),p=_;function v(t,n){var e="";return n.forEach((n=>{e+='<li class="'.concat(t===n.id?"am-active":"",'"><a href="').concat(n.link,'">').concat(n.name,"</a></li>")})),e}function $(t,n){var e="";e+='<li class="am-dropdown" data-am-dropdown>',e+="\n  <a class='am-dropdown-toggle' data-am-dropdown-toggle href='javascript:;'>\n  <span class='am-icon-user'></span>&nbsp;Dup4&nbsp;<span class='am-icon-caret-down'></span>\n  </a>",e+='<ul class="am-dropdown-content">';for(var s=0;s<t.length;++s)t[s].forEach((t=>{e+='<li><a href="'.concat(t.link,'">').concat(t.name,"</a></li>")})),s<t.length-1&&(e+='<li class="am-divider"></li>');return e+="</ul>",e+="</li>",e}function g(t,n,e,s){var i=[{id:"dashboard",name:"Dashboard",link:"/contest/".concat(e)},{id:"submissions",name:"Submissions",link:"/contest/".concat(e,"/submissions")},{id:"standings",name:"Standings",link:"/contest/".concat(e,"/standings")},{id:"clarifications",name:"Clarifications",link:"/contest/".concat(e,"/clarifications")}],r=[{id:"enter",name:"Enter",link:"/login"}],a=[[{id:"my_profile",name:"My Profile",link:"/user/".concat(s)},{id:"my_submissions",name:"My Submissions",link:"/"}],[{id:"polygon",name:"Polygon",link:"/polygon"},{id:"admin",name:"Admin",link:"/admin"}],[{id:"settings",name:"Settings",link:"/settings"},{id:"logout",name:"Logout",link:"/logout"}]];return{__html:'\n    <header class="am-topbar-inverse am-topbar-fixed-toped" style="font-size: 16px; margin-top: 0px;">\n    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-primary am-show-sm-only"\n      data-am-collapse="{target: \'#collapse-head\'}">\n      <span class="am-sr-only">\u5bfc\u822a\u5207\u6362</span>\n      <span class="am-icon-bars"></span>\n    </button>\n    <div class="am-container '.concat(u.a["h-header"],'">\n      <div class="am-collapse am-topbar-collapse" id="collapse-head">\n      <ul class="am-nav am-nav-pills am-topbar-nav">\n        <li>\n          <a class="am-icon-chevron-left" href="/contests"> Back</a>\n        </li>\n          ').concat(v(n,i),'\n        </ul>\n        <div class="am-topbar-right" style="padding-right: 0px;">\n          <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(s?$(a,s):v(n,r),"\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n    ")}}var b=t=>Object(f["jsx"])("div",{dangerouslySetInnerHTML:g("Back",t.current,t.contestId,t.username)}),y=t=>{var n,e=Object(s["d"])("@@initialState"),c=e.initialState,l=e.loading,h=Object(i["l"])();return Object(r["useEffect"])((()=>{window.$(".am-dropdown").dropdown()})),Object(f["jsxs"])(f["Fragment"],{children:[!0===l&&Object(f["jsx"])("div",{style:{height:"calc(100vh)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(f["jsx"])(o["a"],{})}),!1===l&&Object(f["jsxs"])(f["Fragment"],{children:[Object(f["jsx"])(b,{current:t.current,contestId:parseInt(h.id),username:null===c||void 0===c||null===(n=c.userMeta)||void 0===n?void 0:n.username}),Object(f["jsx"])("div",{className:u.a.root,style:{maxWidth:t.maxWidth?t.maxWidth:""},children:Object(f["jsxs"])("div",{className:u.a.secondRoot,children:[Object(f["jsxs"])("div",{className:u.a.main,children:[Object(f["jsxs"])("div",{className:u.a.contestHeader,children:[Object(f["jsx"])(p,{}),Object(f["jsx"])(d["a"],{})]}),t.children]}),Object(f["jsx"])(a["a"],{})]})})]})]})};n["a"]=y},SDKw:function(t,n,e){t.exports={root:"root___1brP-"}},Wgwc:function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){"use strict";var t="millisecond",n="second",e="minute",s="hour",i="day",r="week",a="month",o="quarter",c="year",u="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,n,e){var s=String(t);return!s||s.length>=n?t:""+Array(n+1-s.length).join(e)+t},m={s:f,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),s=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+f(s,2,"0")+":"+f(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var s=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(s,a),r=e-i<0,o=n.clone().add(s+(r?-1:1),a);return+(-(s+(e-i)/(r?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:c,w:r,d:i,D:u,h:s,m:e,s:n,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",p={};p[_]=h;var v=function(t){return t instanceof y},$=function(t,n,e){var s;if(!t)return _;if("string"==typeof t)p[t]&&(s=t),n&&(p[t]=n,s=t);else{var i=t.name;p[i]=t,s=i}return!e&&s&&(_=s),s||!e&&_},g=function(t,n){if(v(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new y(e)},b=m;b.l=$,b.i=v,b.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var y=function(){function h(t){this.$L=$(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(b.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var s=n.match(d);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return e?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return b},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},f.isAfter=function(t,n){return g(t)<this.startOf(n)},f.isBefore=function(t,n){return this.endOf(n)<g(t)},f.$g=function(t,n,e){return b.u(t)?this[n]:this.set(e,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var d=this,l=!!b.u(o)||o,h=b.p(t),f=function(t,n){var e=b.w(d.$u?Date.UTC(d.$y,n,t):new Date(d.$y,n,t),d);return l?e:e.endOf(i)},m=function(t,n){return b.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(n)),d)},_=this.$W,p=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case c:return l?f(1,0):f(31,11);case a:return l?f(1,p):f(0,p+1);case r:var g=this.$locale().weekStart||0,y=(_<g?_+7:_)-g;return f(l?v-y:v+(6-y),p);case i:case u:return m($+"Hours",0);case s:return m($+"Minutes",1);case e:return m($+"Seconds",2);case n:return m($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,o){var d,l=b.p(r),h="set"+(this.$u?"UTC":""),f=(d={},d[i]=h+"Date",d[u]=h+"Date",d[a]=h+"Month",d[c]=h+"FullYear",d[s]=h+"Hours",d[e]=h+"Minutes",d[n]=h+"Seconds",d[t]=h+"Milliseconds",d)[l],m=l===i?this.$D+(o-this.$W):o;if(l===a||l===c){var _=this.clone().set(u,1);_.$d[f](m),_.init(),this.$d=_.set(u,Math.min(this.$D,_.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,n){return this.clone().$set(t,n)},f.get=function(t){return this[b.p(t)]()},f.add=function(t,o){var u,d=this;t=Number(t);var l=b.p(o),h=function(n){var e=g(d);return b.w(e.date(e.date()+Math.round(n*t)),d)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===i)return h(1);if(l===r)return h(7);var f=(u={},u[e]=6e4,u[s]=36e5,u[n]=1e3,u)[l]||1,m=this.$d.getTime()+t*f;return b.w(m,this)},f.subtract=function(t,n){return this.add(-1*t,n)},f.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),i=this.$locale(),r=this.$H,a=this.$m,o=this.$M,c=i.weekdays,u=i.months,d=function(t,s,i,r){return t&&(t[s]||t(n,e))||i[s].substr(0,r)},h=function(t){return b.s(r%12||12,t,"0")},f=i.meridiem||function(t,n,e){var s=t<12?"AM":"PM";return e?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:d(i.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,c,2),ddd:d(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:b.s(r,2,"0"),h:h(1),hh:h(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:s};return e.replace(l,(function(t,n){return n||m[t]||s.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,d){var l,h=b.p(u),f=g(t),m=6e4*(f.utcOffset()-this.utcOffset()),_=this-f,p=b.m(this,f);return p=(l={},l[c]=p/12,l[a]=p,l[o]=p/3,l[r]=(_-m)/6048e5,l[i]=(_-m)/864e5,l[s]=_/36e5,l[e]=_/6e4,l[n]=_/1e3,l)[h]||_,d?p:b.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),s=$(t,n,!0);return s&&(e.$L=s),e},f.clone=function(){return b.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),M=y.prototype;return g.prototype=M,[["$ms",t],["$s",n],["$m",e],["$H",s],["$W",i],["$M",a],["$y",c],["$D",u]].forEach((function(t){M[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),g.extend=function(t,n){return t.$i||(t(n,y,g),t.$i=!0),g},g.locale=$,g.isDayjs=v,g.unix=function(t){return g(1e3*t)},g.en=p[_],g.Ls=p,g.p={},g}))},mn2G:function(t,n,e){t.exports={divider:"divider___Qy6d0"}},pHGr:function(t,n,e){!function(n,s){t.exports=s(e("Wgwc"))}(0,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var n={name:"zh-cn",weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:function(t,n){switch(n){case"W":return t+"\u5468";default:return t+"\u65e5"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},relativeTime:{future:"%s\u5185",past:"%s\u524d",s:"\u51e0\u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},meridiem:function(t,n){var e=100*t+n;return e<600?"\u51cc\u6668":e<900?"\u65e9\u4e0a":e<1100?"\u4e0a\u5348":e<1300?"\u4e2d\u5348":e<1800?"\u4e0b\u5348":"\u665a\u4e0a"}};return t.locale(n,null,!0),n}))},tbxT:function(t,n,e){t.exports={root:"root___2-KUl",secondRoot:"secondRoot___3jV_2",main:"main___2nAG9",contestHeader:"contestHeader___16_JS","h-header":"h-header___2USDB"}}}]);