(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{A2oy:function(e,t,a){e.exports={"panel-header":"panel-header___1TEG8","panel-footer":"panel-footer___CYtqj","panel-body":"panel-body___3tug4",panel:"panel___3kiRT","diff-editor":"diff-editor___3Q9OS",upload:"upload___3qj2W",preview:"preview___1mH2o"}},Ubrr:function(e,t,a){"use strict";a("WmNS");var n=a("k1fw"),i=(a("9og8"),a("q1tI")),r=a("gL5p"),o=a("wsa1"),l=(a("KtZj"),a("nKUr")),c=e=>{var t={selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,multiCursorModifier:"ctrlCmd",cursorWidth:1,lineHeight:20,fontSize:12,fontFamily:"'Fira Mono', 'Bitstream Vera Sans Mono', 'Menlo', 'Consolas', 'Lucida Console', 'Source Han Sans SC', 'Noto Sans CJK SC', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', monospace",lineNumbers:"on",lineNumbersMinChars:0,folding:!0,glyphMargin:!1,renderFinalNewline:!0,scrollbar:{useShadows:!1,verticalScrollbarSize:0,horizontalScrollbarSize:2,vertical:"hidden"},overviewRulerBorder:!1,hideCursorInOverviewRuler:!0,contextmenu:!1,minimap:{enabled:!0}},a=Object(i["useRef"])();function c(t){t.getModel().setEOL(o["editor"].EndOfLineSequence.LF),a.current=t,e.editorDidMount&&e.editorDidMount(t)}Object(i["useRef"])(),Object(i["useRef"])();return Object(l["jsx"])("div",{className:e.className?e.className:"",children:Object(l["jsx"])(r["a"],{theme:"vs-light",width:e.width||"100%",height:e.height||"860",language:e.language||"cpp",value:e.value||"",options:Object(n["a"])(Object(n["a"])({},t),e.options),onChange:e.onChange,editorDidMount:c})})};t["a"]=c},hBwG:function(e,t,a){"use strict";a.r(t),a.d(t,"MarkDownEditor",(function(){return p}));var n=a("k1fw"),i=(a("+L6B"),a("2/Rp")),r=a("tJVT"),o=(a("Znn+"),a("ZTPi")),l=a("q1tI"),c=a("Ubrr"),s=a("A2oy"),d=a.n(s),u=a("Urjs"),b=a("xAIl"),j=a("nKUr"),h=o["a"].TabPane,p=e=>{var t,a=Object(u["d"])(0,577),s=Object(l["useState"])(e.value),p=Object(r["a"])(s,2),m=p[0],g=p[1];Object(l["useEffect"])((()=>{g(e.value)}),[e.value]);var O=Object(j["jsx"])(i["a"],{type:"primary",style:{width:a?"100%":120,marginBottom:a?"":"5px"},children:"Submit"}),v={lineNumbers:"off",folding:!1,minimap:{enabled:!1}};return Object(j["jsx"])(j["Fragment"],{children:Object(j["jsx"])("div",{className:d.a.root,children:Object(j["jsxs"])("div",{className:"am-panel am-panel-primary ".concat(d.a.panel),children:[Object(j["jsx"])("div",{className:d.a["panel-body"],children:Object(j["jsxs"])(o["a"],Object(n["a"])(Object(n["a"])({defaultActiveKey:"1",centered:!!a,tabBarGutter:0},!e.onSubmit||a?{}:{tabBarExtraContent:{right:O}}),{},{type:"card",style:{padding:"0px"},children:[Object(j["jsx"])(h,{tab:"Edit",children:Object(j["jsx"])(c["a"],{language:"markdown",height:e.height||"500",value:e.value,onChange:e.onChange,options:a?v:{}})},"1"),Object(j["jsx"])(h,{tab:"Preview",children:Object(j["jsx"])("div",{className:d.a.preview,style:{height:parseInt(e.height)},children:Object(j["jsx"])(b["a"],{content:m,noSanitize:!0})})},"2")]}))}),e.onSubmit&&a&&Object(j["jsx"])("div",{className:d.a["panel-footer"],children:Object(j["jsx"])("div",{style:{textAlign:"right"},children:Object(j["jsx"])(i["a"],{type:"primary",onClick:null!==(t=e.onSubmit)&&void 0!==t?t:()=>{},style:{width:a?"100%":120},children:"Submit"})})})]})})})};t["default"]=p},xAIl:function(e,t,a){"use strict";var n=a("k1fw"),i=(a("cWXX"),a("/ezw")),r=a("q1tI"),o=a("nKUr"),l=()=>Promise.all([a.e(10),a.e(53),a.e(54)]).then(a.bind(null,"1SVi")),c=Object(r["lazy"])(l),s=e=>{var t=Object(o["jsx"])(i["a"],{active:!0,title:!0,paragraph:{rows:e.placeholderLines||4}});return Object(o["jsxs"])(r["Suspense"],{fallback:t,children:[!0===e.loading&&t,!0!==e.loading&&Object(o["jsx"])(c,Object(n["a"])({},e))]})};t["a"]=Object.assign(s,{load:l})}}]);