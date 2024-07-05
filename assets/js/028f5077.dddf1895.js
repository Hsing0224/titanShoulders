"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:21,description:"Object"},i="Object",c={unversionedId:"JavaScript/javascript_object",id:"JavaScript/javascript_object",title:"Object",description:"Object",source:"@site/docs/JavaScript/javascript_object.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_object",permalink:"/titanShoulders/docs/JavaScript/javascript_object",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/JavaScript/javascript_object.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,description:"Object"},sidebar:"tutorialSidebar",previous:{title:"Array",permalink:"/titanShoulders/docs/JavaScript/javascript_array"},next:{title:"Set & Map",permalink:"/titanShoulders/docs/JavaScript/javascript_set-and-map"}},l={},p=[{value:"\u5ba3\u544a",id:"\u5ba3\u544a",level:2},{value:"\u7269\u4ef6\u5be6\u5b57 (Object Literals)",id:"\u7269\u4ef6\u5be6\u5b57-object-literals",level:3},{value:"\u5efa\u69cb\u5f0f",id:"\u5efa\u69cb\u5f0f",level:3},{value:"\u522a\u9664",id:"\u522a\u9664",level:2},{value:"Reference",id:"reference",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"object"},"Object"),(0,a.kt)("h2",{id:"\u5ba3\u544a"},"\u5ba3\u544a"),(0,a.kt)("h3",{id:"\u7269\u4ef6\u5be6\u5b57-object-literals"},"\u7269\u4ef6\u5be6\u5b57 (Object Literals)"),(0,a.kt)("p",null,"\u7d66\u4e88\u4e00\u500b\u7a7a\u7269\u4ef6\u76f4\u63a5\u5ba3\u544a\u70ba\u7269\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {};\n")),(0,a.kt)("h3",{id:"\u5efa\u69cb\u5f0f"},"\u5efa\u69cb\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const data = {};\nconst obj = new Object(data);\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u5efa\u69cb\u5f0f\u9700\u8981\u6ce8\u610f\u3002",(0,a.kt)("br",null),"\u5982\u679c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"new Object(1)")," \u7684\u8a71\uff0c\u6703\u7522\u751f\u4e00\u500b\u6578\u5b57\u7684\u5305\u88f9\u7269\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Number\xa0{1}"),"\u3002",(0,a.kt)("br",null),"\u5982\u679c\u662f\u5b57\u4e32\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"new Object('1')")," \u7684\u8a71\uff0c\u6703\u7522\u751f\u4e00\u500b\u6578\u5b57\u7684\u5305\u88f9\u7269\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"String\xa0{1}"),"\u3002")),(0,a.kt)("p",null,"\u7d14\u503c\u7121\u6cd5\u518d\u88ab\u8ce6\u4e88\u5c6c\u6027\uff0c\u800c\u7576\u7528\u5efa\u69cb\u5f0f\u7522\u751f\u7684\u7269\u4ef6\uff0c\u5373\u4fbf\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"\uff0c\u662f\u53ef\u4ee5\u518d\u6307\u5b9a\u5c6c\u6027\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const text = "\u7d14\u6587\u5b57";\ntext.name = "\u7d14\u503c";\nconsole.log(text); // \u7d14\u6587\u5b57\n\nconst num = new Object(1);\nnum.name = "\u6578\u5b57";\nconsole.log(num); // Number\xa0{1, name: \'\u6578\u5b57\'}\n\nconst str = new Object("1");\nstr.name = "\u5b57\u4e32";\nconsole.log(str); // String\xa0{\'1\', name: \'\u5b57\u4e32\'}\n')),(0,a.kt)("h2",{id:"\u522a\u9664"},"\u522a\u9664"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," \u4f86\u522a\u9664\u7269\u4ef6\u88e1\u7684\u4e00\u500b\u5c6c\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const data = {\n  name: "\u540d\u7a31",\n};\ndelete data.name; // true\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5c6c\u6027\u624d\u53ef\u4ee5\u522a\u9664\uff0c\u8b8a\u6578\u4e0d\u884c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var abc = 123; // \u7576\u4f7f\u7528 var \uff0c\u6703\u88ab\u8a3b\u518a\u5230 window \u7684\u7269\u4ef6\u88e1\ndef = 456; // \u672a\u5ba3\u544a\uff0c\u6703\u88ab\u7576\u6210\u662f\u5c6c\u6027\uff0c\u7b49\u540c\u65bc window.def = 456;\ndelete def; // true\uff0cwindow \u7269\u4ef6\u5df2\u522a\u9664\ndelete abc; // false\uff0c\u8b8a\u6578\u4e0d\u80fd\u88ab\u522a\u9664\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.udemy.com/course/javascript-adv/"},"JavaScript \u6838\u5fc3\u7bc7 - \u516d\u89d2\u5b78\u9662"))))}d.isMDXComponent=!0}}]);