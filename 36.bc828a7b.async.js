(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{A2oy:function(e,t,n){e.exports={"panel-header":"panel-header___1TEG8","panel-footer":"panel-footer___CYtqj","panel-body":"panel-body___3tug4",panel:"panel___3kiRT","diff-editor":"diff-editor___3Q9OS"}},GCGV:function(e,t,n){"use strict";n.r(t),n.d(t,"CodeBoxEditor",(function(){return f}));var a=n("k1fw"),o=(n("14J3"),n("BMrR")),r=(n("jCWc"),n("kPKH")),i=(n("+L6B"),n("2/Rp")),c=(n("OaEy"),n("2fM7")),l=(n("q1tI"),n("Ubrr")),s=n("A2oy"),u=n.n(s),d=n("Urjs"),p=n("nKUr"),b=c["a"].Option,f=e=>{var t={lineNumbers:"off",folding:!1,minimap:{enabled:!1}},n=Object(d["d"])(0,577),s=Object(p["jsx"])(i["a"],{type:"primary",style:{width:n?"100%":120},children:"Submit"});return Object(p["jsx"])(p["Fragment"],{children:Object(p["jsx"])("div",{className:u.a.root,children:Object(p["jsxs"])("div",{className:"am-panel am-panel-primary ".concat(u.a.panel),children:[Object(p["jsx"])("div",{className:u.a["panel-header"],children:Object(p["jsxs"])(o["a"],{gutter:16,align:"top",children:[Object(p["jsx"])(r["a"],{xs:{span:24},sm:{span:16},md:{span:16},lg:{span:20},xl:{span:20},children:Object(p["jsx"])("div",{style:{textAlign:n?"center":"left"},children:Object(p["jsxs"])(c["a"],{defaultValue:"cpp",style:{width:n?"100%":220},children:[Object(p["jsx"])(b,{value:"c",children:"C"}),Object(p["jsx"])(b,{value:"cpp",children:"C++"}),Object(p["jsx"])(b,{value:"java",children:"Java"}),Object(p["jsx"])(b,{value:"python",children:"Python"})]})})}),!1===n&&Object(p["jsx"])(r["a"],{xs:{span:24},sm:{span:8},md:{span:8},lg:{span:4},xl:{span:4},children:Object(p["jsx"])("div",{style:{textAlign:n?"center":"right",paddingTop:n?"10px":""},children:s})})]})}),Object(p["jsx"])("div",{className:u.a["panel-body"],children:Object(p["jsx"])(l["a"],Object(a["a"])({options:n?t:{}},e))}),!0===n&&Object(p["jsx"])("div",{className:u.a["panel-footer"],children:s})]})})})};t["default"]=f},LdHM:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return S}));var a=n("1OyB"),o=n("vuIU"),r=n("Ji7U"),i=n("LK+K"),c=n("q1tI"),l=n("rePB"),s=n("Ff2n"),u=n("ODXe"),d=n("4IlW"),p=n("bX4T"),b=n("YrtM"),f=n("TSYQ"),h=n.n(f),v=n("+nKL"),m=n("8OUc"),O=function(e,t){var n=e.prefixCls,a=e.id,o=e.flattenOptions,r=e.childrenAsData,i=e.values,f=e.searchValue,O=e.multiple,j=e.defaultActiveFirstOption,y=e.height,g=e.itemHeight,w=e.notFoundContent,x=e.open,S=e.menuItemSelectedIcon,k=e.virtual,E=e.onSelect,C=e.onToggleOpen,_=e.onActiveValue,N=e.onScroll,V=e.onMouseEnter,P="".concat(n,"-item"),M=Object(b["a"])((function(){return o}),[x,o],(function(e,t){return t[0]&&e[1]!==t[1]})),I=c["useRef"](null),R=function(e){e.preventDefault()},T=function(e){I.current&&I.current.scrollTo({index:e})},L=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=M.length,a=0;a<n;a+=1){var o=(e+a*t+n)%n,r=M[o],i=r.group,c=r.data;if(!i&&!c.disabled)return o}return-1},U=c["useState"]((function(){return L(0)})),D=Object(u["a"])(U,2),K=D[0],F=D[1],z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];F(e);var n={source:t?"keyboard":"mouse"},a=M[e];a?_(a.data.value,e,n):_(null,-1,n)};c["useEffect"]((function(){z(!1!==j?L(0):-1)}),[M.length,f]),c["useEffect"]((function(){var e,t=setTimeout((function(){if(!O&&x&&1===i.size){var e=Array.from(i)[0],t=M.findIndex((function(t){var n=t.data;return n.value===e}));z(t),T(t)}}));x&&(null===(e=I.current)||void 0===e||e.scrollTo(void 0));return function(){return clearTimeout(t)}}),[x]);var A=function(e){void 0!==e&&E(e,{selected:!i.has(e)}),O||C(!1)};if(c["useImperativeHandle"](t,(function(){return{onKeyDown:function(e){var t=e.which;switch(t){case d["a"].UP:case d["a"].DOWN:var n=0;if(t===d["a"].UP?n=-1:t===d["a"].DOWN&&(n=1),0!==n){var a=L(K+n,n);T(a),z(a,!0)}break;case d["a"].ENTER:var o=M[K];o&&!o.data.disabled?A(o.data.value):A(void 0),x&&e.preventDefault();break;case d["a"].ESC:C(!1),x&&e.stopPropagation()}},onKeyUp:function(){},scrollTo:function(e){T(e)}}})),0===M.length)return c["createElement"]("div",{role:"listbox",id:"".concat(a,"_list"),className:"".concat(P,"-empty"),onMouseDown:R},w);function G(e){var t=M[e];if(!t)return null;var n=t.data||{},o=n.value,l=n.label,s=n.children,u=Object(p["a"])(n,!0),d=r?s:l;return t?c["createElement"]("div",Object.assign({"aria-label":"string"===typeof d?d:null},u,{key:e,role:"option",id:"".concat(a,"_list_").concat(e),"aria-selected":i.has(o)}),o):null}return c["createElement"](c["Fragment"],null,c["createElement"]("div",{role:"listbox",id:"".concat(a,"_list"),style:{height:0,width:0,overflow:"hidden"}},G(K-1),G(K),G(K+1)),c["createElement"](v["a"],{itemKey:"key",ref:I,data:M,height:y,itemHeight:g,fullHeight:!1,onMouseDown:R,onScroll:N,virtual:k,onMouseEnter:V},(function(e,t){var n,a=e.group,o=e.groupOption,u=e.data,d=u.label,p=u.key;if(a)return c["createElement"]("div",{className:h()(P,"".concat(P,"-group"))},void 0!==d?d:p);var b=u.disabled,f=u.value,v=u.title,O=u.children,j=u.style,y=u.className,g=Object(s["a"])(u,["disabled","value","title","children","style","className"]),w=i.has(f),x="".concat(P,"-option"),k=h()(P,x,y,(n={},Object(l["a"])(n,"".concat(x,"-grouped"),o),Object(l["a"])(n,"".concat(x,"-active"),K===t&&!b),Object(l["a"])(n,"".concat(x,"-disabled"),b),Object(l["a"])(n,"".concat(x,"-selected"),w),n)),E=r?O:d,C=!S||"function"===typeof S||w,_=E||f,N="string"===typeof _||"number"===typeof _?_.toString():void 0;return void 0!==v&&(N=v),c["createElement"]("div",Object.assign({},g,{"aria-selected":w,className:k,title:N,onMouseMove:function(){K===t||b||z(t)},onClick:function(){b||A(f)},style:j}),c["createElement"]("div",{className:"".concat(x,"-content")},_),c["isValidElement"](S)||w,C&&c["createElement"](m["a"],{className:"".concat(P,"-option-state"),customizeIcon:S,customizeIconProps:{isSelected:w}},w?"\u2713":null))})))},j=c["forwardRef"](O);j.displayName="OptionList";var y=j,g=function(){return null};g.isSelectOption=!0;var w=g,x=function(){return null};x.isSelectOptGroup=!0;var S=x,k=n("VTBJ"),E=n("Zm9Q");function C(e){var t=e.key,n=e.props,a=n.children,o=n.value,r=Object(s["a"])(n,["children","value"]);return Object(k["a"])({key:t,value:void 0!==o?o:t,children:a},r)}function _(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(E["a"])(e).map((function(e,n){if(!c["isValidElement"](e)||!e.type)return null;var a=e.type.isSelectOptGroup,o=e.key,r=e.props,i=r.children,l=Object(s["a"])(r,["children"]);return t||!a?C(e):Object(k["a"])(Object(k["a"])({key:"__RC_SELECT_GRP__".concat(null===o?n:o,"__"),label:o},l),{},{options:_(i)})})).filter((function(e){return e}))}var N=n("2Qr1"),V=n("qNPg"),P=n("U8pU"),M=n("Kwbf"),I=n("WKfj");function R(e){var t=e.mode,n=e.options,a=e.children,o=e.backfill,r=e.allowClear,i=e.placeholder,l=e.getInputElement,s=e.showSearch,u=e.onSearch,d=e.defaultOpen,p=e.autoFocus,b=e.labelInValue,f=e.value,h=e.inputValue,v=e.optionLabelProp,m="multiple"===t||"tags"===t,O=void 0!==s?s:m||"combobox"===t,j=n||_(a);if(Object(M["a"])("tags"!==t||j.every((function(e){return!e.disabled})),"Please avoid setting option to disabled in tags mode since user can always type text as tag."),"tags"===t||"combobox"===t){var y=j.some((function(e){return e.options?e.options.some((function(e){return"number"===typeof("value"in e?e.value:e.key)})):"number"===typeof("value"in e?e.value:e.key)}));Object(M["a"])(!y,"`value` of Option should not use number type when `mode` is `tags` or `combobox`.")}if(Object(M["a"])("combobox"!==t||!v,"`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."),Object(M["a"])("combobox"===t||!o,"`backfill` only works with `combobox` mode."),Object(M["a"])("combobox"===t||!l,"`getInputElement` only work with `combobox` mode."),Object(M["b"])("combobox"!==t||!l||!r||!i,"Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."),u&&!O&&"combobox"!==t&&"tags"!==t&&Object(M["a"])(!1,"`onSearch` should work with `showSearch` instead of use alone."),Object(M["b"])(!d||p,"`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."),void 0!==f&&null!==f){var g=Object(I["d"])(f);Object(M["a"])(!b||g.every((function(e){return"object"===Object(P["a"])(e)&&("key"in e||"value"in e)})),"`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"),Object(M["a"])(!m||Array.isArray(f),"`value` should be array when `mode` is `multiple` or `tags`")}if(a){var w=null;Object(E["a"])(a).some((function(e){if(!c["isValidElement"](e)||!e.type)return!1;var t=e.type;if(t.isSelectOption)return!1;if(t.isSelectOptGroup){var n=Object(E["a"])(e.props.children).every((function(t){return!(c["isValidElement"](t)&&e.type&&!t.type.isSelectOption)||(w=t.type,!1)}));return!n}return w=t,!0})),w&&Object(M["a"])(!1,"`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(w.displayName||w.name||w,"`.")),Object(M["a"])(void 0===h,"`inputValue` is deprecated, please use `searchValue` instead.")}}var T=R,L=Object(V["a"])({prefixCls:"rc-select",components:{optionList:y},convertChildrenToData:_,flattenOptions:N["d"],getLabeledValue:N["e"],filterOptions:N["b"],isValueDisabled:N["g"],findValueOption:N["c"],warningProps:T,fillOptionsWithMissingValue:N["a"]}),U=function(e){Object(r["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.selectRef=c["createRef"](),e.focus=function(){e.selectRef.current.focus()},e.blur=function(){e.selectRef.current.blur()},e}return Object(o["a"])(n,[{key:"render",value:function(){return c["createElement"](L,Object.assign({ref:this.selectRef},this.props))}}]),n}(c["Component"]);U.Option=w,U.OptGroup=S;var D=U;t["c"]=D},Ubrr:function(e,t,n){"use strict";var a=n("WmNS"),o=n.n(a),r=n("9og8"),i=n("k1fw"),c=n("tJVT"),l=n("q1tI"),s=n("gL5p"),u=n("nKUr"),d=e=>{var t={selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,multicursorModifier:"ctrlCmd",cursorWidth:1,lineHeight:20,fontSize:12,fontFamily:"'Fira Mono', 'Bitstream Vera Sans Mono', 'Menlo', 'Consolas', 'Lucida Console', 'Source Han Sans SC', 'Noto Sans CJK SC', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', monospace",lineNumbers:"on",lineNumbersMinChars:0,folding:!0,glyphMargin:!1,renderFinalNewline:!0,scrollbar:{useShadows:!1,verticalScrollbarSize:0,horizontalScrollbarSize:2,vertical:"hidden"},overviewRulerBorder:!1,hideCursorInOverviewRuler:!0,contextmenu:!1,enableSplitViewResizing:!1,minimap:{enabled:!0}},n=Object(l["useState"])("860"),a=Object(c["a"])(n,2),d=a[0],p=a[1],b=Object(l["useState"])("cpp"),f=Object(c["a"])(b,2),h=f[0],v=f[1],m=Object(l["useState"])(""),O=Object(c["a"])(m,2),j=O[0],y=O[1],g=Object(l["useState"])("vs-light"),w=Object(c["a"])(g,2),x=w[0],S=w[1],k=Object(l["useState"])(t),E=Object(c["a"])(k,2),C=E[0],_=E[1];function N(e){return V.apply(this,arguments)}function V(){return V=Object(r["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function P(e){return M.apply(this,arguments)}function M(){return M=Object(r["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t;case 1:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}return Object(l["useEffect"])((()=>{e.hasOwnProperty("height")&&p(e.height),e.hasOwnProperty("language")&&v(e.language),e.hasOwnProperty("value")&&y(e.value),e.hasOwnProperty("theme")&&S(e.theme),e.hasOwnProperty("options")&&_(Object(i["a"])(Object(i["a"])({},t),e.options))}),[e]),Object(u["jsx"])(s["a"],{width:"100%",height:d,language:h,value:j,options:C,onChange:N,editorDidMount:P,theme:x})};t["a"]=d}}]);