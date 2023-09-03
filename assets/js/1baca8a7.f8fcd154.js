"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:12,description:"\u597d\u7528\u7684 Set & Map"},s="\u597d\u7528\u7684 Set & Map",l={unversionedId:"JavaScript/javascript_map-and-set",id:"JavaScript/javascript_map-and-set",title:"\u597d\u7528\u7684 Set & Map",description:"\u597d\u7528\u7684 Set & Map",source:"@site/docs/JavaScript/javascript_map-and-set.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_map-and-set",permalink:"/titanShoulders/docs/JavaScript/javascript_map-and-set",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/JavaScript/javascript_map-and-set.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"\u597d\u7528\u7684 Set & Map"},sidebar:"tutorialSidebar",previous:{title:"Array",permalink:"/titanShoulders/docs/JavaScript/javascript_array"},next:{title:"\u6dfa\u62f7\u8c9d vs \u6df1\u62f7\u8c9d",permalink:"/titanShoulders/docs/JavaScript/javascript_shallow-copy-and-deep-copy"}},p={},i=[{value:"Set",id:"set",level:2},{value:"\u552f\u4e00\u503c",id:"\u552f\u4e00\u503c",level:3},{value:"\u8f49\u9663\u5217",id:"\u8f49\u9663\u5217",level:3},{value:"\u8fed\u4ee3\u5668",id:"\u8fed\u4ee3\u5668",level:3},{value:"Map",id:"map",level:2},{value:"\u8f49\u9663\u5217",id:"\u8f49\u9663\u5217-1",level:3},{value:"clone",id:"clone",level:3},{value:"Object\uff0c\u65b0\u589e\u8cc7\u6599\u5f8c\u7684\u9806\u5e8f",id:"object\u65b0\u589e\u8cc7\u6599\u5f8c\u7684\u9806\u5e8f",level:3}],c={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u597d\u7528\u7684-set--map"},"\u597d\u7528\u7684 Set & Map"),(0,r.kt)("h2",{id:"set"},"Set"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"\u53ef\u4ee5\u8996\u70ba\u662f\u4e00\u500b\u5167\u5bb9\u53ea\u6709\u552f\u4e00\u503c\u7684Array(\u4f46\u4ed6\u4e0d\u662fArray)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const testSet = new Set();\n\n// add\ntestSet.add(1); // Set(1)\xa0{1}\ntestSet.add('Hello'); // Set(2)\xa0{1, 'Hello'}\ntestSet.add({name: 'Hsing', sex: 'male'}); // Set(3)\xa0{1, 'Hello', {\u2026}}\n\n// \u56e0\u88e1\u9762\u6709\u503c\u4e86\u6240\u4ee5\u4e0d\u6703\u65b0\u589e\ntestSet.add(1); // Set(3)\xa0{1, 'Hello', {\u2026}}\n// NaN\u8ddfundefined\u4e5f\u88ab\u8996\u70ba\u552f\u4e00\u503c\uff0c\u5373\u4f7f NaN !== NaN\n\n// \u4e0d\u904earray\u8ddfobject\u662f\u53ef\u4ee5\u6210\u529f\u7684\ntestSet.add({name: 'Hsing', sex: 'male'}); // Set(4)\xa0{1, 'Hello', {\u2026}, {\u2026}}\n\n// delete\ntestSet.delete(1); // true\ntestSet.delete(1); // \u56e0\u70ba1\u5df2\u88ab\u522a\u6389\uff0c\u5982\u679c\u6c92\u9019\u500b\u503c\u5247\u8fd4\u56defalse\ntestSet.delete({name: 'Hsing', sex: 'male'}); // false\uff0c\u9019\u6a23\u662f\u522a\u4e0d\u6389\u7684\n\n// has\ntestSet.has(1); // false\ntestSet.has('Hello'); // true\ntestSet.has({name: 'Hsing', sex: 'male'}); // false\n\n// size\ntestSet.size; // 3\n\n// clear\ntestSet.clear(); // Set(0)\xa0{size: 0}\n")),(0,r.kt)("p",null,"\u4ee5\u525b\u525b\u7bc4\u4f8b\uff0c\u7576\u50b3\u5165\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"array"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"has"),"\u90fd\u5931\u6548\u3002",(0,r.kt)("br",null),"\n\u8070\u660e\u7684\u4f60\u4e00\u5b9a\u767c\u73fe\uff0c\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"call by reference"),"\u6240\u5f71\u97ff\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {name: 'Hsing', sex: 'male'};\nconst testSet = new Set();\n\ntestSet.add(obj); // Set(1)\xa0{{\u2026}}\ntestSet.has(obj); // true\ntestSet.delete(obj); // true\n")),(0,r.kt)("h3",{id:"\u552f\u4e00\u503c"},"\u552f\u4e00\u503c"),(0,r.kt)("p",null,"\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"\u552f\u4e00\u503c\u7684\u7279\u6027\uff0c\u4f86\u53bb\u9664\u6389\u91cd\u8907\u7684\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 1, 2, 3, 4, 5, 4];\nconst testSet = new Set(arr); // Set(5)\xa0{1, 2, 3, 4, 5}\nconst uniqueArr = [...testSet]; // [1, 2, 3, 4, 5]\n")),(0,r.kt)("p",null,"\u7576\u5982\u679c\u5df2\u7d93\u90fd\u5b58\u5728\uff0c\u4e5f\u53ef\u4ee5\u7528\u8ff4\u5708\u65b9\u5f0f\u4f86\u5c07\u503c\u4e00\u4e00\u4e1f\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"\u88e1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const testSet = new Set();\nconst arr = [1, 1, 2, 3, 4, 5, 4];\n\nfor(value of arr) {\n  testSet.add(value);\n} // Set(5)\xa0{1, 2, 3, 4, 5}\nconst uniqueArr = [...testSet]; // [1, 2, 3, 4, 5]\n")),(0,r.kt)("h3",{id:"\u8f49\u9663\u5217"},"\u8f49\u9663\u5217"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const testSet = new Set([1, 2, 3, 4, 5]);\n\n// \u4f7f\u7528Array.from()\nconst fromArray = Array.from(testSet); // (5)\xa0[1, 2, 3, 4, 5]\n\n// \u5229\u7528\u5c55\u958b\u904b\u7b97\u5b50\nconst spreadArray = [...testSet]; // (5)\xa0[1, 2, 3, 4, 5]\n")),(0,r.kt)("h3",{id:"\u8fed\u4ee3\u5668"},"\u8fed\u4ee3\u5668"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"\u4e2d\uff0ckey\u548cvalue\u90fd\u662f\u540c\u4e00\u500b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const testSet = new Set([1, 2, 3, 4, 5]);\ntestSet.keys(); // SetIterator\xa0{1, 2, 3, 4, 5}\ntestSet.values(); // SetIterator\xa0{1, 2, 3, 4, 5}\n\n// \u53ef\u4ee5\u7528entries()\u4f86\u770bkey => value\ntestSet.entries(); // SetIterator\xa0{1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5}\n")),(0,r.kt)("h2",{id:"map"},"Map"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"key\u7684\u9748\u6d3b\u6027\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"),"\u7684Key\u53ef\u4ee5\u662f\u6578\u5b57\u3001\u5b57\u4e32\u3001\u7269\u4ef6\u3001\u51fd\u5f0f\u3001 symbol",(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u822cObject\u7684key\u53ea\u80fd",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"symbol")))),(0,r.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u63d2\u5165\u7684\u9806\u5e8f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const testMap = new Map();\n\n// set(key, value)\ntestMap.set(123, 'number key\\'s value');\ntestMap.set('stringKey', 'string key\\'s value');\n\n// has(key)\ntestMap.has(123); // true\n\n// \u5982\u679c\u518d\u7d66\u4e00\u6b21\uff0c\u503c\u6703\u8986\u84cb\ntestMap.set(123, 'number key\\'s value change');\n\nconst obj = {name: 'Hsing', sex: 'male'};\ntestMap.set(obj, 'object key\\'s value');\n\nconst funcKey = () => 'functionKey';\ntestMap.set(funcKey, 'function key\\'s value');\n\nconst symbolKey = Symbol('symbolKey');\ntestMap.set(symbolKey, 'symbol key\\'s value');\n\n// size\ntestMap.size; // 5\n\n// get(key)\ntestMap.get(123); // number key's value change\ntestMap.get('stringKey'); // string key's value\ntestMap.get(obj); // object key's value\ntestMap.get(funcKey); // function key's value\ntestMap.get(symbolKey); // symbol key's value\n\n// delete(key)\ntestMap.delete(123); // true(\u5982\u679c\u6c92\u6709\u8a72key\u5247\u8fd4\u56defalse)\n\n// clear\ntestMap.clear(); // Map(0)\xa0{size: 0}\n\ntestMap.set(0, 'zeroValue');\ntestMap.set('one', 'oneValue');\ntestMap.set(2, 'twoValue');\ntestMap.set('three', 'threeValue');\ntestMap.set(4, 'fourValue');\n\n// forEach\ntestMap.forEach((value, key)=>{\n  console.log(`${key} => ${value}`);\n});\n/*\n0 => zeroValue\none => oneValue\n2 => twoValue\nthree => threeValue\n4 => fourValue\n*/\n\n// keys()\uff0c\u8fd4\u56de\u4e00\u500bkey\u7684\u8fed\u4ee3\u5668\nconst keysIterator\xa0= testMap.keys(); // MapIterator\xa0{0, 'one', 2, 'three', 4}\nfor(const key of keysIterator) {\n  console.log(key);\n}\n/*\n0\none\n2\nthree\n4\n*/\n\n// values()\uff0c\u8fd4\u56de\u4e00\u500bvalue\u7684\u8fed\u4ee3\u5668\nconst valuesIterator\xa0= testMap.values(); // MapIterator\xa0{'zero value', ... , 'four value'}\nfor(const value of valuesIterator) {\n  console.log(value);\n}\n/*\nzeroValue\noneValue\ntwoValue\nthreeValue\nfourValue\n*/\n\n// entries()\uff0c\u8fd4\u56deMap\u6240\u6709\u5167\u5bb9\u7684\u8fed\u4ee3\u5668\nconst entriesIterator\xa0= testMap.entries(); // MapIterator {0 => 'zero value', ... , 4 => 'four value'}\nfor(const [key, value] of entriesIterator) {\n  console.log(`${key} => ${value}`);\n}\n/*\n0 => zeroValue\none => oneValue\n2 => twoValue\nthree => threeValue\n4 => fourValue\n*/\n")),(0,r.kt)("h3",{id:"\u8f49\u9663\u5217-1"},"\u8f49\u9663\u5217"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u7528\u9019\u65b9\u6cd5\u53ef\u4ee5\u5feb\u901f\u5efa\u7acbMap\u7684\u8cc7\u6599\nconst testMap = new Map([\n  [0, 'zero'],\n  [1, 'one'],\n  [2, 'two']\n]); // Map(3)\xa0{0 => 'zero', 1 => 'one', 2 => 'two'}\n\n// keys() & values()\nconst mapArray = [...testMap.values()]; // ['zero', 'one', 'two']\n\n// entries()\nconst entriesArray = [...testMap.entries()]; // [Array(2), Array(2), Array(2)]\nconsole.log(entriesArray[0]); // [0, 'zero']\n")),(0,r.kt)("h3",{id:"clone"},"clone"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const originMap = new Map([\n  [0, 'zero'],\n  [1, 'one'],\n  [2, 'two']\n]); // Map(3)\xa0{0 => 'zero', 1 => 'one', 2 => 'two'}\nconst newMap = new Map(originMap); // Map(3)\xa0{0 => 'zero', 1 => 'one', 2 => 'two'}\n\noriginMap.set(0, 'zero change'); // Map(3)\xa0{0 => 'zero change', 1 => 'one', 2 => 'two'}\nnewMap.set(1, 'one change'); // Map(3)\xa0{0 => 'zero', 1 => 'one change', 2 => 'two'}\n")),(0,r.kt)("h3",{id:"object\u65b0\u589e\u8cc7\u6599\u5f8c\u7684\u9806\u5e8f"},"Object\uff0c\u65b0\u589e\u8cc7\u6599\u5f8c\u7684\u9806\u5e8f"),(0,r.kt)("p",null,"\u7576Object\u65b0\u589e\u8cc7\u6599\uff0ckey\u70ba\u6578\u5b57\u7684\u6642\u5019\uff0c\u5176\u5be6\u6578\u5b57\u6703\u8f49\u63db\u6210\u5b57\u4e32\u3002\u800c\u4e5f\u6703\u5c0e\u81f4\u8cc7\u6599\u9806\u5e8f\u4e0a\u7684\u4e0d\u4e00\u81f4",(0,r.kt)("br",null),"\n\u5982\u679c\u6709\u8003\u91cf\u5230\u9806\u5e8f\u53ca\u6578\u5b57\uff0c\u53ef\u9078\u64c7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Map")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {\n  0: 'zeroValue',\n  'one': 'oneValue',\n  2: 'twoValue',\n  'three': 'threeValue',\n  4: 'fourValue'\n}; // {0: 'zeroValue', 2: 'twoValue', 4: 'fourValue', one: 'oneValue', three: 'threeValue'}\n\nobj[0] === obj['0']; // true\n\nfor(const key in obj) {\n  console.log(key);\n}\n/*\n\u9019\u908a\u4e5f\u662f\u5b57\u4e32\u76840\u30012\u30014\n0\n2\n4\n'one'\n'three'\n*/\n\n// \u5229\u7528Object.entries()\u4f86\u53d6\u503c\nObject.entries(obj)[1]; // ['2', 'twoValue']\n")))}d.isMDXComponent=!0}}]);