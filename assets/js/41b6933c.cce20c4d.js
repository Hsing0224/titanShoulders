"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[562],{3905:(e,r,a)=>{a.d(r,{Zo:()=>N,kt:()=>b});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),c=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},N=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,N=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?t.createElement(b,s(s({ref:r},N),{},{components:a})):t.createElement(b,s({ref:r},N))}));function b(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5610:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=a(7462),n=(a(7294),a(3905));const i={sidebar_position:31},s="isNaN() vs Number.isNaN()",o={unversionedId:"JavaScript/javascript_isnan-vs-number-isnan",id:"JavaScript/javascript_isnan-vs-number-isnan",title:"isNaN() vs Number.isNaN()",description:"isNaN()",source:"@site/docs/JavaScript/javascript_isnan-vs-number-isnan.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_isnan-vs-number-isnan",permalink:"/titanShoulders/doc/docs/JavaScript/javascript_isnan-vs-number-isnan",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/docs/JavaScript/javascript_isnan-vs-number-isnan.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"\u6dfa\u62f7\u8c9d vs \u6df1\u62f7\u8c9d",permalink:"/titanShoulders/doc/docs/JavaScript/javascript_shallow-copy-and-deep-copy"},next:{title:"GeneratorFunction",permalink:"/titanShoulders/doc/docs/JavaScript/javascript_generator"}},l={},c=[{value:"isNaN()",id:"isnan",level:2},{value:"Number.isNaN()",id:"numberisnan",level:2},{value:"Reference",id:"reference",level:2}],N={toc:c},p="wrapper";function u(e){let{components:r,...a}=e;return(0,n.kt)(p,(0,t.Z)({},N,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"isnan-vs-numberisnan"},"isNaN() vs Number.isNaN()"),(0,n.kt)("h2",{id:"isnan"},"isNaN()"),(0,n.kt)("p",null,"\u5224\u65b7\u503c\u662f\u5426\u70baNaN(Not a Number)\uff0cjs\u6703\u8f49\u578b\u4f86\u5224\u65b7\uff0c\u5982\u679c\u7121\u6cd5\u8f49\u6210\u6578\u5b57\uff0c\u90a3\u5c07\u6703",(0,n.kt)("inlineCode",{parentName:"p"},"return true"),(0,n.kt)("br",null),"\nexample:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"isNaN(NaN) // true\nisNaN('abc') // true\nisNaN('123') // false\nisNaN('') // false\nisNaN([]) // false\nisNaN(true) // false\nisNaN(false) // false\n")),(0,n.kt)("h2",{id:"numberisnan"},"Number.isNaN()"),(0,n.kt)("p",null,"ES6\u5f8c\u6240\u65b0\u589e\uff0c\u4e0d\u6703\u5f37\u5236\u8f49\u63db\u975e\u6578\u5b57\u7684\u503c\uff0c\u5b83\u53ea\u70ba\u5728\u503c\u672c\u8eab\u70baNaN\u6642\u5019\u624d\u6703",(0,n.kt)("inlineCode",{parentName:"p"},"return true"),(0,n.kt)("br",null),"\n\u6703\u51fa\u73feNaN\u7684\u72c0\u6cc1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'Math.sqrt(-1);     // NaN\uff0c\u7121\u6cd5\u5c0d\u8ca0\u6578\u9032\u884c\u5e73\u65b9\u6839\u904b\u7b97\n0 / 0;             // NaN\uff0c\u96f6\u9664\u4ee5\u96f6\nInfinity - Infinity;  // NaN\uff0c\u7121\u7aae\u6e1b\u53bb\u7121\u7aae\nparseInt("Hello");  // NaN\uff0c\u7121\u6cd5\u5c07\u975e\u6578\u5b57\u5b57\u7b26\u4e32\u8f49\u63db\u70ba\u6578\u5b57\nNumber("123abc");   // NaN\uff0c\u7121\u6cd5\u5c07\u5305\u542b\u975e\u6578\u5b57\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\u8f49\u63db\u70ba\u6578\u5b57\nparseFloat("NaN");  // NaN\uff0cparseFloat \u89e3\u6790 "NaN" \u5b57\u7b26\u4e32\u6703\u8fd4\u56de NaN\n')),(0,n.kt)("p",null,"example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Number.isNaN(NaN) // true\nNumber.isNaN('abc') // false\nNumber.isNaN('123') // false\nNumber.isNaN('') // false\nNumber.isNaN([]) // false\nNumber.isNaN(true) // false\nNumber.isNaN(false) // false\n")),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN"},"MDN - isNAN()"),(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"},"MDN - Number.isNaN"))))}u.isMDXComponent=!0}}]);