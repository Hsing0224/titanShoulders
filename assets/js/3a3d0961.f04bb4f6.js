"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[625],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>m});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=r.createContext({}),c=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),k=t,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||l;return n?r.createElement(m,o(o({ref:a},s),{},{components:n})):r.createElement(m,o({ref:a},s))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[u]="string"==typeof e?e:t,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5314:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),t=(n(7294),n(3905));const l={sidebar_position:11},o="Array",p={unversionedId:"JavaScript/javascript_array",id:"JavaScript/javascript_array",title:"Array",description:"\u5f71\u97ff\u5230\u539f\u672c\u9663\u5217\u7684methods",source:"@site/docs/JavaScript/javascript_array.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_array",permalink:"/titanShoulders/docs/JavaScript/javascript_array",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/JavaScript/javascript_array.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50",permalink:"/titanShoulders/docs/JavaScript/javascript_expressions-and-operators"},next:{title:"\u6dfa\u62f7\u8c9d vs \u6df1\u62f7\u8c9d",permalink:"/titanShoulders/docs/JavaScript/javascript_shallow-copy-and-deep-copy"}},i={},c=[{value:"\u5f71\u97ff\u5230\u539f\u672c\u9663\u5217\u7684methods",id:"\u5f71\u97ff\u5230\u539f\u672c\u9663\u5217\u7684methods",level:2},{value:"\u56de\u50b3\u4e00\u500b\u65b0\u7684\u9663\u5217\u7684methods",id:"\u56de\u50b3\u4e00\u500b\u65b0\u7684\u9663\u5217\u7684methods",level:2},{value:"Array()",id:"array-1",level:2},{value:".at()",id:"at",level:2},{value:".concat()",id:"concat",level:2},{value:".every()",id:"every",level:2},{value:".fill()",id:"fill",level:2},{value:".filter()",id:"filter",level:2},{value:".find()",id:"find",level:2},{value:".findIndex()",id:"findindex",level:2},{value:".findLast()",id:"findlast",level:2},{value:".indexOf()",id:"indexof",level:2},{value:".isArray()",id:"isarray",level:2},{value:".join()",id:"join",level:2},{value:".splice()",id:"splice",level:2},{value:".unshift()",id:"unshift",level:2},{value:".with()",id:"with",level:2},{value:"Reference",id:"reference",level:2}],s={toc:c},u="wrapper";function d(e){let{components:a,...n}=e;return(0,t.kt)(u,(0,r.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"array"},"Array"),(0,t.kt)("h2",{id:"\u5f71\u97ff\u5230\u539f\u672c\u9663\u5217\u7684methods"},"\u5f71\u97ff\u5230\u539f\u672c\u9663\u5217\u7684methods"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},".fill()"),(0,t.kt)("li",{parentName:"ul"},".forEach()"),(0,t.kt)("li",{parentName:"ul"},".shift()"),(0,t.kt)("li",{parentName:"ul"},".pop()"),(0,t.kt)("li",{parentName:"ul"},".push()"),(0,t.kt)("li",{parentName:"ul"},".reverse()"),(0,t.kt)("li",{parentName:"ul"},".sort()")),(0,t.kt)("h2",{id:"\u56de\u50b3\u4e00\u500b\u65b0\u7684\u9663\u5217\u7684methods"},"\u56de\u50b3\u4e00\u500b\u65b0\u7684\u9663\u5217\u7684methods"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},".concat()"),(0,t.kt)("li",{parentName:"ul"},".filter()"),(0,t.kt)("li",{parentName:"ul"},".flat()"),(0,t.kt)("li",{parentName:"ul"},".map()"),(0,t.kt)("li",{parentName:"ul"},"Array.from()"),(0,t.kt)("li",{parentName:"ul"},".reduce()"),(0,t.kt)("li",{parentName:"ul"},".with()")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"array-1"},"Array()"),(0,t.kt)("p",null,"\u5efa\u7acb\u4e00\u500b\u9663\u5217\uff0c\u5fc5\u9808\u6ce8\u610f\u7684\u662f\u7576\u53ea\u6709\u4e00\u500b\u662fNumber\u7684\u503c\u8f38\u5165\uff0c\u6703\u7522\u751f\u70ba\u9663\u5217\u7684\u9577\u5ea6"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = new Array(3); // [empty \xd7 3]\nconsole.log(arr[0]); // undefined\n\nconst arr2 = new Array('3'); // ['3']\nconsole.log(arr2[0]); // '3'\n")),(0,t.kt)("p",null,"\u9700\u7522\u751f\u9663\u5217\u53ef\u4ee5\u53c3\u8003\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"[3]"),"\u6216",(0,t.kt)("inlineCode",{parentName:"p"},"Array.of(3)"),"\u4f86\u5efa\u7acb"),(0,t.kt)("h2",{id:"at"},".at()"),(0,t.kt)("p",null,"\u985e\u4f3carr","[index]","\u9019\u6a23\u53d6\u503c\uff0c\u4f46bracket notation\u65b9\u5f0f\u4e0d\u5141\u8a31\u8ca0\u6578\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},".at()"),"\u53ef\u4ee5\u5141\u8a31\u662f\u8ca0\u6578\uff0c\u5b83\u6703\u5f9e\u5f8c\u9762\u6578"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [0, 1, 2, 3];\narr[arr.length - 1]; // 3\narr.at(-1); // 3\n")),(0,t.kt)("h2",{id:"concat"},".concat()"),(0,t.kt)("p",null,"\u5c07\u591a\u7d44Array\u5408\u4f75"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = [1, 2, 3];\nconst b = [4, 5, 6];\nconst c = [7, 8, 9];\nconst result = a.concat(b, c); // [1, 2, 3, 4, 5, 6, 7, 8, 9]\n// \u4e5f\u53ef\u4ee5\u4f7f\u7528\u5c55\u958b\u904b\u7b97\u5b50\n// const result = [...a, ...b, ...c];\n")),(0,t.kt)("h2",{id:"every"},".every()"),(0,t.kt)("p",null,"\u6aa2\u67e5Array\u7684\u503c\uff0c\u5982\u679c\u5168\u7b26\u5408\u624d\u6703",(0,t.kt)("inlineCode",{parentName:"p"},"true")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [0, 1, 2, 3];\narr.every(value => value < 10); // true\n/*\n  arr.every(function(value){\n    return value < 10;\n  });\n*/\n")),(0,t.kt)("h2",{id:"fill"},".fill()"),(0,t.kt)("p",null,"\u586b\u6eff\u7d66\u4e88\u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u8a2d\u5b9a\u8981\u586b\u6eff\u7bc4\u570d(\u53ef\u63a5\u53d7\u8ca0\u6578)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  fill\u7684\u53c3\u6578\n  - value \u9663\u5217\u8981\u586b\u6eff\u7684\u503c\n  - [start] \u53ef\u63a5\u53d7\u8ca0\u503c\uff0c\u8ca0\u503c\u70ba\u5f9e\u9663\u5217\u5f80\u5f8c\u6578\n  - [end] \u53ef\u4ee5\u63a5\u53d7\u8ca0\u503c\uff0c\u6307\u5b9a\u7684\u4f4d\u7f6e\u9700\u5728start\u5f80\u5f8c\u7684\u7d22\u5f15\u624d\u6709\u4f5c\u7528\n*/\nconst arr = Array(3).fill(true); // [true, true, true]\narr.fill(false, -2, -1); // [true, false, true]\n")),(0,t.kt)("h2",{id:"filter"},".filter()"),(0,t.kt)("p",null,"\u7be9\u9078\u7b26\u5408\u689d\u4ef6\u7684\u503c\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"\u6703\u8fd4\u56de\u4e00\u500b\u65b0\u7684Array")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  filter\u7684\u53c3\u6578\n  - callbackFn\n    - element \u7576\u524d\u7684\u503c\n    - index \u7576\u524d\u503c\u7684\u7d22\u5f15\n    - array \u50b3\u5165\u7684array\u672c\u8eab\n  - [thisArg]\n*/\nconst arr = [10, 90, 20, 80, 30, 70, 40, 60, 50];\nconst result = arr.filter(value => value > 55); //[90, 80, 70, 60]\n")),(0,t.kt)("h2",{id:"find"},".find()"),(0,t.kt)("p",null,"\u8fd4\u56de\u7b26\u5408\u689d\u4ef6\u7684\u7b2c\u4e00\u500b\u503c\uff0c\u5982\u679c\u6c92\u627e\u5230\u6703\u8fd4\u56de",(0,t.kt)("inlineCode",{parentName:"p"},"undefined")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  find\u7684\u53c3\u6578\n  - callbackFn\n    - element \u7576\u524d\u7684\u503c\n    - index \u7576\u524d\u503c\u7684\u7d22\u5f15\n    - array \u50b3\u5165\u7684array\u672c\u8eab\n  - [thisArg]\n*/\nconst arr = [0, 1, 2, 3, 4];\nconst result = arr.find(value => value > 2); // 3\n")),(0,t.kt)("h2",{id:"findindex"},".findIndex()"),(0,t.kt)("p",null,"\u8fd4\u56de\u7b26\u5408\u689d\u4ef6\u7684\u7b2c\u4e00\u500b\u503c\u7684\u7d22\u5f15\u503c\uff0c\u5982\u679c\u6c92\u627e\u5230\u6703\u56de\u50b3",(0,t.kt)("inlineCode",{parentName:"p"},"-1")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  findIndex\u7684\u53c3\u6578\n  - callbackFn\n    - element \u7576\u524d\u7684\u503c\n    - index \u7576\u524d\u503c\u7684\u7d22\u5f15\n    - array \u50b3\u5165\u7684array\u672c\u8eab\n  - [thisArg]\n*/\nconst arr = [10, 20, 30, 40, 50];\nconst result = arr.findIndex(value => value > 35); // 3\n")),(0,t.kt)("h2",{id:"findlast"},".findLast()"),(0,t.kt)("p",null,"\u985e\u4f3c",(0,t.kt)("inlineCode",{parentName:"p"},".find()"),"\uff0c\u5b83\u662f\u5f9e\u6700\u5f8c\u958b\u59cb\u627e\uff0c\u6545\u56de\u50b3\u662f\u5f9e\u6700\u5f8c\u958b\u59cb\u627e\u7684\u7b2c\u4e00\u500b\u7b26\u5408\u7684\u503c\uff0c\u5982\u679c\u6c92\u6709\u627e\u5230\u6703\u8fd4\u56de",(0,t.kt)("inlineCode",{parentName:"p"},"undefined")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  findLast\u7684\u53c3\u6578\n  - callbackFn\n    - element \u7576\u524d\u7684\u503c\n    - index \u7576\u524d\u503c\u7684\u7d22\u5f15\n    - array \u50b3\u5165\u7684array\u672c\u8eab\n  - [thisArg]\n*/\nconst arr = [0, 1, 2, 3, 4];\nconst result = arr.findLast(value => value > 2); // 4\n")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u8ddf.indexOf()\u7684\u5dee\u7570\u5728indexOf()\u662f\u50b3\u5165\u4e00\u500b\u503c\uff0c\u800c.findIndex()\u662f\u50b3\u5165\u689d\u4ef6"),(0,t.kt)("h2",{parentName:"blockquote",id:"findlastindex"},".findLastIndex()"),(0,t.kt)("p",{parentName:"blockquote"},"\u985e\u4f3c",(0,t.kt)("inlineCode",{parentName:"p"},".findIndex()"),"\uff0c\u5f9e\u6700\u5f8c\u958b\u59cb\u627e\uff0c\u56de\u50b3\u7b2c\u4e00\u500b\u7b26\u5408\u7684\u7d22\u5f15\u503c\uff0c\u5982\u679c\u6c92\u627e\u5230\u6703\u56de\u50b3",(0,t.kt)("inlineCode",{parentName:"p"},"-1")),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  findLastIndex\u7684\u53c3\u6578\n  - callbackFn\n    - element \u7576\u524d\u7684\u503c\n    - index \u7576\u524d\u503c\u7684\u7d22\u5f15\n    - array \u50b3\u5165\u7684array\u672c\u8eab\n  - [thisArg]\n*/\nconst arr = [10, 20, 30, 40, 50];\nconst result = arr.findLastIndex(value => value > 35); // 4\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"flat"},".flat()"),(0,t.kt)("p",{parentName:"blockquote"},"\u6241\u5e73\u5316\u9663\u5217\uff0c\u53ef\u586b\u5165\u6df1\u5ea6\uff0c\u9810\u8a2d\u70ba",(0,t.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"\u6703\u8fd4\u56de\u4e00\u500b\u65b0\u7684Array")),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  flat\u7684\u53c3\u6578\n  - [depth] \u6307\u5b9a\u8981\u6241\u5e73\u5316\u7684\u6df1\u5ea6\uff0c\u9810\u8a2d\u70ba1\n*/\nconst arr = [0, 1, 2, [3, [4]]];\nconst result = arr.flat(2); // [0, 1, 2, 3, 4]\n/*\n  \u8f38\u51fa\u540c\u6a23\u7684\u7d50\u679c\uff1a\n  const result = arr.flat().flat();\n  const result = arr.flat(Infinity);\n*/\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"foreach"},".forEach()"),(0,t.kt)("p",{parentName:"blockquote"},"\u70ba\u9663\u5217\u6bcf\u500b\u5143\u7d20\u505a\u8655\u7406"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  forEach\u7684\u53c3\u6578\n  - callbackFn\n    - element \u7576\u524d\u7684\u503c\n    - index \u7576\u524d\u503c\u7684\u7d22\u5f15\n    - array \u50b3\u5165\u7684array\u672c\u8eab\n  - [thisArg]\n*/\nconst arr = [0, 1, 'a', 'b'];\narr.forEach(element => console.log(element));\n// 0\n// 1\n// 'a'\n// 'b'\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"arrayfrom"},"Array.from()"),(0,t.kt)("p",{parentName:"blockquote"},"\u53ef\u5c07arrayLike\u8f49\u70baArray\u4f86\u4f7f\u7528\uff0c\u6216\u662f\u5c0d\u65bcArray\u7684\u6bcf\u500b\u5143\u7d20\u9084\u505a\u8655\u7406\narrayLike\uff0c\u985e\u4f3carray\uff0c\u4f46\u7121array\u7684\u65b9\u6cd5"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  from\u7684\u53c3\u6578\n  - arrayLike \u60f3\u8f49\u63db\u6210\u9663\u5217\u7684\u503c\n  - [mapFn]\n    - element \u7576\u524d\u7684\u503c\n    - index \u7576\u524d\u503c\u7684\u7d22\u5f15\n  - [thisArg]\n*/\nconst links = document.querySelectorAll('a'); // NodeList[...]\nconst linkArr = Array.from(links); // [...]\n"))),(0,t.kt)("p",null,"Array.from(","[1, 2, 3]",", x => x + x); // ","[2, 4, 6]","\nArray.from(Array(4), (num, i) => i); // ","[0, 1, 2, 3]"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"## .includes()\n\u5224\u65b7\u9663\u5217\u88e1\u662f\u5426\u6709\u5305\u542b\u7684\u503c\u4f86\u56de\u50b3`true` or `false`\n```javascript\n/*\n  includes\u7684\u53c3\u6578\n  - searchElement \u8981\u67e5\u8a62\u7684\u503c\n  - [fromIndex] \u53ef\u586b\u5165\u8ca0\u503c\uff0c\u5f9e\u6307\u5b9a\u7684\u4f4d\u7f6e\u5f80\u5f8c\u627e\n*/\nconst arr = ['abc', 123, 'def'];\narr.includes(12); // false\narr.includes('123'); // false\narr.includes(123); // true\n")),(0,t.kt)("h2",{id:"indexof"},".indexOf()"),(0,t.kt)("p",null,"\u5224\u65b7\u9663\u5217\u88e1\u662f\u5426\u6709\u6307\u5b9a\u7684\u503c\uff0c\u6c92\u6709\u5c31\u56de\u50b3",(0,t.kt)("inlineCode",{parentName:"p"},"-1")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  indexOf\u7684\u53c3\u6578\n  - searchElement \u8981\u67e5\u8a62\u7684\u503c\n  - [fromIndex] \u53ef\u586b\u5165\u8ca0\u503c\uff0c\u5f9e\u6307\u5b9a\u7684\u4f4d\u7f6e\u5f80\u5f8c\u627e\n*/\nconst arr = [0, 1, 2, 3, 4, '5', 6];\narr.indexOf(5); // -1\n")),(0,t.kt)("h2",{id:"isarray"},".isArray()"),(0,t.kt)("p",null,"\u6aa2\u67e5\u662f\u5426\u70baarray\uff0c\u4e26\u56de\u50b3",(0,t.kt)("inlineCode",{parentName:"p"},"true"),"\u6216",(0,t.kt)("inlineCode",{parentName:"p"},"false")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  isArray\u7684\u53c3\u6578\n  - value \u8981\u5224\u65b7\u7684\u503c\n*/\nArray.isArray([]); // true\nArray.isArray(Array.prototype); // true\n")),(0,t.kt)("h2",{id:"join"},".join()"),(0,t.kt)("p",null,"\u5c07\u9663\u5217\u8f49\u6210\u5b57\u4e32(\u4e00\u7dad)\uff0c\u4e26\u5728\u6bcf\u500belement\u4e2d\u9593\u63d2\u5165\u4e00\u500b\u5340\u9694\u7684\u7b26\u865f(\u9810\u8a2d\u70ba",(0,t.kt)("inlineCode",{parentName:"p"},","),")"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  join\u7684\u53c3\u6578\n  - [separator] \u66ff\u63db\u5206\u9694\u7684\u5b57\u7b26\n*/\nconst arr = [0, 1, 2, 3];\narr.join('-'); // '0-1-2-3'\n\n// join\u6703\u5c07\u6709\u4e8c\u7dad\u4ee5\u4e0a\u7684\u9663\u5217\u6241\u5e73\u5316\u7684\u7279\u6027\nconst deepArr = [0, 1, [2, 3, [4, 5, [6, 7]]]];\ndeepArr.join(); // '0,1,2,3,4,5,6,7'\n")),(0,t.kt)("p",null,(0,t.kt)("del",{parentName:"p"},"\u5947\u6deb\u6280\u5de7"),(0,t.kt)("br",null),"\n\u5982\u679c\u642d\u914d\u5b57\u4e32\u7684.split()\uff0c\u53ef\u4ee5\u9054\u5230\u6241\u5e73\u5316\u9663\u5217\u7684\u6548\u679c\uff0c\u4f46\u6709\u500b\u554f\u984c\u662f\u88e1\u9762\u7684\u503c\u4e0d\u80fd\u6709",(0,t.kt)("inlineCode",{parentName:"p"},","),"\uff0c\u907f\u514d\u8f38\u51fa\u932f\u8aa4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const deepArr = [0, 1, [2, 3, [4, 5, [6, 7]]]];\ndeepArr.join().split(','); // ['0', '1', '2', '3', '4', '5', '6', '7']\n")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u7d50\u8ad6:\u9084\u662f\u4e56\u4e56\u7528.flat()"),(0,t.kt)("h2",{parentName:"blockquote",id:"lastindexof"},".lastIndexOf()"),(0,t.kt)("p",{parentName:"blockquote"},"\u8207",(0,t.kt)("inlineCode",{parentName:"p"},".indexOf"),"\u76f8\u540c\uff0c\u4f46\u5b83\u662f\u7531\u5f8c\u9762\u5f80\u524d\u627e\uff0c\u6703\u56de\u50b3\u7b26\u5408\u7684\u7b2c\u4e00\u500b\u7d22\u5f15\uff0c",(0,t.kt)("em",{parentName:"p"},"\u610f\u5473\u70ba\u9663\u5217\u88e1\u6700\u5f8c\u4e00\u500b"),"\uff0c\u7576\u90fd\u6c92\u6709\u7b26\u5408\u5247\u56de\u50b3",(0,t.kt)("inlineCode",{parentName:"p"},"-1")),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  lastIndexOf\u7684\u53c3\u6578\n  - searchElement \u8981\u67e5\u8a62\u7684\u503c\n  - [fromIndex] \u53ef\u586b\u5165\u8ca0\u503c\uff0c\u5f9e\u6307\u5b9a\u7684\u4f4d\u7f6e\u5f80\u5f8c\u627e\n*/\nconst arr = [0, 1, 2, 2, 1, 0];\narr.lastIndexOf(1); // 4\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"map"},".map()"),(0,t.kt)("p",{parentName:"blockquote"},"\u6703\u56de\u50b3\u4e00\u7d44\u65b0\u7684\u9663\u5217\uff0c\u8a72\u9663\u5217\u70ba\u56de\u50b3\u7684\u503c\u7d44\u6210"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  map\u7684\u53c3\u6578\n  - callbackFn\n    - element \u7576\u524d\u7684\u503c\n    - index \u7576\u524d\u503c\u7684\u7d22\u5f15\n    - array \u50b3\u5165\u7684array\u672c\u8eab\n  - [thisArg]\n*/\nconst arr = [1, 2, 3, 4];\narr.map(value => value * 2); // [2, 4, 6, 8]\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"arrayof"},"Array.of()"),(0,t.kt)("p",{parentName:"blockquote"},"\u4ee5\u8f38\u5165\u7684\u5f15\u6578\u4f86\u5efa\u7acb\u4e00\u500bArray"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  of\u7684\u53c3\u6578\n  - element1, ..., elementN\n*/\nconst arr = Array.of(5); // [5]\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"pop"},".pop()"),(0,t.kt)("p",{parentName:"blockquote"},"\u4e1f\u51fa\u9663\u5217\u6700\u5f8c\u4e00\u500b\u503c\uff0c\u6703\u56de\u50b3\u4e1f\u51fa\u7684\u503c"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = ['a', 'b', 'c'];\narr.pop(); // 'c'\nconsole.log(arr); // ['a', 'b']\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"push"},".push()"),(0,t.kt)("p",{parentName:"blockquote"},"\u5c07\u5f15\u6578\u52a0\u5165\u9663\u5217\u7684\u6700\u5f8c\uff0c\u6703\u56de\u50b3\u9663\u5217\u7684\u9577\u5ea6"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  push\u7684\u53c3\u6578\n  - [element1, ..., elementN]\n*/\nconst arr = ['a', 'b', 'c'];\narr.push('d', 'e', 'f'); // 6\nconsole.log(arr); // ['a', 'b', 'c', 'd', 'e', 'f']\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"reduce"},".reduce()"),(0,t.kt)("p",{parentName:"blockquote"},"\u5c0d\u9663\u5217\u6bcf\u500b\u503c\u505a\u8655\u7406\u4e4b\u5916\uff0c\u9084\u6709\u4e00\u500b\u503c\u4f86\u8a18\u9304\u4e0a\u6b21\u7684\u7d50\u679c\uff0c\u53ef\u9054\u6210\u7d2f\u9032\u7684\u904b\u7b97"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 2, 3, 4, 5];\nconst sum = arr.reduce((acc, current)=>acc+current, 0); // 15\n/*\n  reduce\u7684\u53c3\u6578\n  - callbackFn\n    - accumulator \u4e0a\u4e00\u6b21\u8a08\u7b97\n    - currentValue \u7576\u524d\u7684\u503c\n    - array \u50b3\u5165\u7684array\u672c\u8eab\n  - initialValue \u7576\u7b2c\u4e00\u6b21\u57f7\u884c\u6642\uff0c\u505a\u70baaccumulator\u7684\u503c\u7528\n*/\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"reverse"},".reverse()"),(0,t.kt)("p",{parentName:"blockquote"},"\u5c07\u9663\u5217\u7684\u503c\u53cd\u8f49\uff0c\u6703\u5f71\u97ff\u5230\u539f\u672c\u7684\u9663\u5217\uff0c\u5982\u679c\u4e0d\u60f3\u8981\u5f71\u97ff\u539f\u672c\u7684\u9663\u5217\uff0c\u53ef\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},".toReversed()")),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [0, 1, 2];\narr.reverse(); // [2, 1, 0]\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"shift"},".shift()"),(0,t.kt)("p",{parentName:"blockquote"},"\u6703\u5f9e\u9663\u5217\u7684\u7b2c0\u500b\u4e1f\u51fa\uff0c\u6703\u56de\u50b3\u4e1f\u51fa\u7684\u503c"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = ['a', 'b', 'c'];\narr.shift(); // 'a'\nconsole.log(arr); // [1, 2, 3]\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"slice"},".slice()"),(0,t.kt)("p",{parentName:"blockquote"},"\u6703\u56de\u50b3\u5207\u5272\u7684\u9663\u5217\u5340\u9593(start\u4f5c\u70ba\u8d77\u59cb\u9ede\u5f80\u5f8c\u6578)\uff0c\u4e0d\u5f71\u97ff\u539f\u672c\u7684\u9663\u5217"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [0, 1, 2, 3];\narr.slice(2, 3); // [2];\n/*\n  slice\u7684\u53c3\u6578\n  - [start] \u7d22\u5f15\u503c\uff0c\u53ef\u70ba\u8ca0\u6578(\u5f80\u5f8c\u6578)\n  - [end] \u7d50\u675f\u7684\u7d22\u5f15\u503c(\u4e0d\u5305\u542b)\uff0c\u5982start\u662f\u8ca0\u6578\uff0c\u5982\u679c\u7d50\u675f\u503c\u5c0f\u65bc\u8d77\u59cb\u503c\u7684\u7d22\u5f15\u503c\uff0c\u5247\u56de\u50b3[]\n*/\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"some"},".some()"),(0,t.kt)("p",{parentName:"blockquote"},"\u9663\u5217\u88e1\u662f\u5426\u81f3\u5c11\u4e00\u500b\u7b26\u5408\u5224\u65b7\uff0c\u56de\u50b3",(0,t.kt)("inlineCode",{parentName:"p"},"true"),"\u6216",(0,t.kt)("inlineCode",{parentName:"p"},"false")),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [0, 1, 2, 3];\narr.some(element => element % 2 === 0); // true\narr.some(element => element > 5); // false\n")),(0,t.kt)("h2",{parentName:"blockquote",id:"sort"},".sort()"),(0,t.kt)("p",{parentName:"blockquote"},"\u9ed8\u8a8d\u6392\u5e8f\u662f\u5c07\u5143\u7d20\u8f49\u70ba\u5b57\u7b26\uff0c\u6309\u7167UTF-16\u78bc\u4ee5\u5347\u51aa\u6392\u5e8f\u3002",(0,t.kt)("br",null),"\n\u5169\u8005\u4ee5 ",(0,t.kt)("inlineCode",{parentName:"p"},"-1"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"1"),"\u4f86\u6c7a\u5b9a\u6392\u5e8f\n| ",(0,t.kt)("inlineCode",{parentName:"p"},"compareFn(a, b)"),"\u56de\u50b3\u503c | \u9806\u5e8f                   |\n| :---------------------: | ---------------------- |\n|           -1            | ",(0,t.kt)("inlineCode",{parentName:"p"},"a"),"\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"b"),"\u524d\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"[a, b]"),"   |\n|            0            | \u4fdd\u6301\u539f\u4f86\u9806\u5e8f           |\n|            1            | ",(0,t.kt)("inlineCode",{parentName:"p"},"a"),"\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"b"),"\u4e4b\u5f8c\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"[b, a]")," |")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},".sort()"),"\u6703\u5f71\u97ff\u539f\u672c\u7684\u9663\u5217\uff0c\u5982\u679c\u4e0d\u60f3\u8981\u5f71\u97ff\u539f\u672c\u7684\u9663\u5217\uff0c\u53ef\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},".toSorted()")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  sort\u7684\u53c3\u6578\n  - [compareFn] \u50b3\u5165\u6bd4\u8f03\u7684\u51fd\u5f0f\uff0c\u56de\u50b3\u503c\u5fc5\u9808\u662f-1, 0 , 1\n*/\nconst arr = [40, 1, 5, 200];\narr.sort(); // [1, 200, 40, 5]\n\nfunction compareNumbers(a, b) {\n  return a - b;\n}\narr.sort(compareNumbers); // [1, 5, 40, 200]\n")),(0,t.kt)("h2",{id:"splice"},".splice()"),(0,t.kt)("p",null,"\u5728\u6307\u5b9a\u7684\u4f4d\u7f6e\uff0c\u79fb\u9664/\u66ff\u63db/\u65b0\u589e\u65b0\u7684\u5143\u7d20",(0,t.kt)("br",null),"\n",(0,t.kt)("inlineCode",{parentName:"p"},".splice()"),"\u6703\u5f71\u97ff\u539f\u672c\u7684\u9663\u5217\uff0c\u5982\u679c\u4e0d\u60f3\u8981\u5f71\u97ff\u539f\u672c\u7684\u9663\u5217\uff0c\u53ef\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},".toSpliced()")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  splice\u7684\u53c3\u6578\n  - start \u7d22\u5f15\u503c\uff0c\u53ef\u70ba\u8ca0\u6578(\u5f80\u5f8c\u6578)\n  - [deleteCount] \u522a\u9664\u7684\u500b\u6578\uff0c\u6578\u503c\u70ba\u7d22\u5f15\u503c\u5f80\u5f8cn\u500b\n  - [item, ..., itemN] \u5728start\u4f4d\u7f6e\u585e\u5165\n*/\n\nconst arr = ['a', 'b', 'c', 'd'];\narr.splice(0, 0, 'e'); // ['e', 'a', 'b', 'c', 'd']\narr.splice(-1, 1, 'f'); // ['e', 'a', 'b', 'c', 'f']\narr.splice(2, 0, 'g'); // ['e', 'a', 'g', 'b', 'c', 'f']\n")),(0,t.kt)("h2",{id:"unshift"},".unshift()"),(0,t.kt)("p",null,"\u5c07\u5143\u7d20\u52a0\u5165\u9663\u5217\u88e1\uff0c\u4e26\u56de\u50b3\u9663\u5217\u7684\u9577\u5ea6"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  unshift\u7684\u53c3\u6578\n  - [element1, ..., elementN]\n*/\nconst arr = [1, 2, 3];\narr.unshift(4, 5); // 5\nconsole.log(arr); // [4, 5, 1, 2, 3]\n")),(0,t.kt)("h2",{id:"with"},".with()"),(0,t.kt)("p",null,"\u53ef\u6307\u5b9a\u66ff\u63db\u9663\u5217\u88e1\u7684\u5143\u7d20\u4e26\u56de\u50b3\u4e00\u500b\u65b0\u7684\u9663\u5217"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\n  with\u7684\u53c3\u6578\n  - index \u7d22\u5f15\u503c\uff0c\u53ef\u70ba\u8ca0\u6578(\u5f80\u5f8c\u6578)\n  - value \u8981\u66ff\u63db\u7684\u503c\n*/\n\nconst arr = [0, 1, 2, 3];\narr.with(-1, 4); // [0, 1, 2, 4]\n")),(0,t.kt)("h2",{id:"reference"},"Reference"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array"},"MDN - Array"))))}d.isMDXComponent=!0}}]);