"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:13,description:"I watch you"},a="IntersectionObserver",l={unversionedId:"JavaScript/javascript_intersection-observer",id:"JavaScript/javascript_intersection-observer",title:"IntersectionObserver",description:"I watch you",source:"@site/docs/JavaScript/javascript_intersection-observer.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_intersection-observer",permalink:"/titanShoulders/docs/JavaScript/javascript_intersection-observer",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/JavaScript/javascript_intersection-observer.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"I watch you"},sidebar:"tutorialSidebar",previous:{title:"Set & Map",permalink:"/titanShoulders/docs/JavaScript/javascript_set-and-map"},next:{title:"\u6dfa\u62f7\u8c9d vs \u6df1\u62f7\u8c9d",permalink:"/titanShoulders/docs/JavaScript/javascript_shallow-copy-and-deep-copy"}},p={},s=[{value:"options",id:"options",level:2},{value:"root",id:"root",level:3},{value:"rootMargin",id:"rootmargin",level:3},{value:"threshold",id:"threshold",level:3},{value:"methods",id:"methods",level:2},{value:"observe",id:"observe",level:3},{value:"unobserve",id:"unobserve",level:3},{value:"disconnect",id:"disconnect",level:3},{value:"IntersectionObserverEntry",id:"intersectionobserverentry",level:2},{value:"target",id:"target",level:3},{value:"isIntersecting",id:"isintersecting",level:3},{value:"boundingClientRect",id:"boundingclientrect",level:3},{value:"intersectionRect",id:"intersectionrect",level:3},{value:"intersectionRatio",id:"intersectionratio",level:3},{value:"rootBounds",id:"rootbounds",level:3},{value:"\u984d\u5916\u601d\u8003",id:"\u984d\u5916\u601d\u8003",level:2},{value:"Reference",id:"reference",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intersectionobserver"},"IntersectionObserver"),(0,o.kt)("p",null,"\u9019\u500bAPI\u4e3b\u8981\u662f\u5e6b\u6211\u5011\u89c0\u5bdf\uff0c\u7576\u6211\u5011\u89c0\u5bdf\u7684\u5c0d\u8c61\u662f\u5426\u8207 (\u9810\u8a2d\u70ba\u8996\u7a97\u7684 viewport ) \u4ea4\u758a\uff0c\u53ef\u4ee5\u505a\u5f8c\u7e8c\u7684\u52d5\u4f5c\u3002 ",(0,o.kt)("br",null),"\n\u9019\u5c0d\u4e00\u500b\u66fe\u7d93\u5728\u4e00\u500b\u9801\u9762\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"offsetTop")," \u4f86\u5224\u65b7\u76ee\u524d\u4f7f\u7528\u8005\u6ed1\u5230\u54ea\u500b\u5340\u584a\uff0c\u518d\u5e6b\u5074\u908a\u5c0e\u89bd\u5217\u52a0\u4e0a\u5c0d\u61c9\u7684\u72c0\u614b\u7684\u4eba\u4f86\u8aaa\uff0c\u5be6\u5728\u592a\u5e78\u798f\u4e86"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u56e0\u70ba\u4ed6\u662f\u5efa\u69cb\u5f0f\uff0c\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," \u4f86\u7522\u751f IntersectionObserver \u5be6\u9ad4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const observer = new IntersectionObserver((entries, observer)=>{\n  console.log(entries); // [IntersectionObserverEntry]\n  console.log(observer); // [object IntersectionObserver] \n}, {\n  // options\n  root: null,\n  rootMargin: '0px',\n  thresholds: 1.0\n});\n")),(0,o.kt)("h2",{id:"options"},"options"),(0,o.kt)("h3",{id:"root"},"root"),(0,o.kt)("p",null,"\u9810\u8a2d\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," \uff0c\u5247\u70ba viewport (\u8996\u7a97)\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  root: document.querySelector('.box')\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},".box \u81ea\u5df1\u672c\u8eab\u9700\u8981\u6709 scroll \uff0c\u9019\u6a23\u624d\u6709\u6548\u679c")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," \uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"rootMargin")," \u7121\u4f5c\u7528")),(0,o.kt)("h3",{id:"rootmargin"},"rootMargin"),(0,o.kt)("p",null,"\u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"margin")," \u4e00\u6a23\u53ef\u4ee5\u5beb\u6210 1 \u5230 4 \u500b\u503c\u4f86\u63a7\u5236\u500b\u908a\u754c"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u53ef\u63a5\u53d7\u6b63\u503c\u6216\u8ca0\u503c\uff0c\u6b63\u503c\u70ba\u64f4\u5927\uff0c\u8ca0\u503c\u70ba\u7e2e\u5c0f")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u503c\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," \uff0c\u9700\u8981\u5beb\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"0px"))),(0,o.kt)("h3",{id:"threshold"},"threshold"),(0,o.kt)("p",null,"\u53ef\u8a2d\u5b9a\u4e00\u500b\u503c ",(0,o.kt)("inlineCode",{parentName:"p"},"0~1")," \uff0c\u6216\u662f\u9663\u5217 ",(0,o.kt)("inlineCode",{parentName:"p"},"[0, 0.1, 0.5, 0.7, 1]")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u9019\u4e9b\u6578\u5b57\u4ee3\u8868\u7684\u662f\u5bb9\u5668\u7684\u95be\u503c\uff0c\u4ed6\u6703\u843d\u5728\u5bb9\u5668\u7684\u591a\u5c11\u767e\u5206\u6bd4\u3002",(0,o.kt)("br",null),"\n\u4ee5\u4e0a\u8ff0\u9663\u5217\u70ba\u4f8b\uff0c\u5047\u8a2d\u5bb9\u5668\u70ba 1000px \uff0c\u90a3\u9ebc\u95be\u503c\u5206\u5225\u843d\u5728 0px \u3001 100px \u3001 500px \u3001 700px \u3001 1000px\u3002",(0,o.kt)("br",null),"\n\u4e0d\u904e\u5be6\u969b\u4e0a\u4e26\u4e0d\u662f\u6bcf\u500b\u95be\u503c\u90fd\u6703\u89f8\u767c\uff0c\u800c\u662f\u5728\u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u6709",(0,o.kt)("strong",{parentName:"p"},"\u4ea4\u758a"),"\u7684\u60c5\u6cc1\u4e0b\u624d\u6703\u89f8\u767c\u3002")),(0,o.kt)("h2",{id:"methods"},"methods"),(0,o.kt)("h3",{id:"observe"},"observe"),(0,o.kt)("p",null,"\u8a3b\u518a\u5c0d\u8c61\u7d66\u89c0\u5bdf\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const items = document.querySelectorAll('.item');\nitems.forEach(item => observer.observe(item));\n")),(0,o.kt)("h3",{id:"unobserve"},"unobserve"),(0,o.kt)("p",null,"\u8a3b\u92b7\u89c0\u5bdf\u7684\u67d0\u500b\u5c0d\u8c61\uff0c\u53ef\u518d\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observe")," \u4f86\u8a3b\u518a\u89c0\u5bdf\u7684\u5c0d\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"observer.unobserve(item);\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8a3b\u518a\u6216\u8a3b\u92b7\u89c0\u5bdf\uff0c\u662f\u50b3\u5165 element")),(0,o.kt)("h3",{id:"disconnect"},"disconnect"),(0,o.kt)("p",null,"\u5c07\u8a3b\u518a\u7684\u5c0d\u8c61\u5168\u90e8\u79fb\u9664\uff0c\u4f46\u5be6\u9ad4\u9084\u5b58\u5728\uff0c\u6545\u53ef\u518d\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observe")," \u4f86\u8a3b\u518a\u89c0\u5bdf\u7684\u5c0d\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"observer.disconnect();\n")),(0,o.kt)("h2",{id:"intersectionobserverentry"},"IntersectionObserverEntry"),(0,o.kt)("h3",{id:"target"},"target"),(0,o.kt)("p",null,"\u89c0\u5bdf\u5c0d\u8c61"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u89c0\u5bdf\u5c0d\u8c61\u7684\u6a23\u5f0f\u5982\u6709 margin \u6216 padding \uff0c\u6703\u5f71\u97ff\u89f8\u767c\u7684\u95be\u503c\u3002")),(0,o.kt)("h3",{id:"isintersecting"},"isIntersecting"),(0,o.kt)("p",null,"\u89c0\u5bdf\u5c0d\u8c61\u662f\u5426\u5df2\u88ab\u89c0\u5bdf\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," || ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7576\u756b\u9762\u7b2c\u4e00\u6b21\u8f09\u5165\u6642\u6703\u5148\u89f8\u767c\u4e00\u6b21\uff0c\u518d\u4f86\u53ea\u6709\u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u4ea4\u758a\u6642\u624d\u6703\u89f8\u767c ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," \uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"isIntersecting")," \u4e0d\u4e00\u5b9a\u6703\u9700\u8981\u7528\u5230")),(0,o.kt)("h3",{id:"boundingclientrect"},"boundingClientRect"),(0,o.kt)("p",null,"\u89c0\u5bdf\u5c0d\u8c61\u7684\u8cc7\u8a0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// {\n//   width: ,\n//   height: ,\n//   top: ,\n//   left: ,\n//   right: ,\n//   bottom: ,\n//   x: ,\n//   y: \n// }\n")),(0,o.kt)("h3",{id:"intersectionrect"},"intersectionRect"),(0,o.kt)("p",null,"\u89c0\u5bdf\u5c0d\u8c61\u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u7684\u4ea4\u96c6\u8cc7\u8a0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// {\n//   width: ,\n//   height: ,\n//   top: ,\n//   left: ,\n//   right: ,\n//   bottom: ,\n//   x: ,\n//   y: \n// }\n")),(0,o.kt)("p",null,"\u5047\u5b9a\u89c0\u5bdf\u5c0d\u8c61\u7684\u6574\u9ad4\u9ad8\u5ea6\u5927\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \uff0c \u95be\u503c\u662f ","[0, 0.25, 5, 0.75, 1]"," \uff0c\u5728\u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u4ea4\u758a\uff0c\u57fa\u672c\u4e0a\u6703\u6709\u5169\u6bb5\u88ab\u89f8\u767c\uff1a",(0,o.kt)("br",null)),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u89c0\u5bdf\u5c0d\u8c61\u4e0a\u90e8\u8207 ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," \u7684\u4ea4\u758a\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u89c0\u5bdf\u5c0d\u8c61\u4e0b\u90e8\u8207 ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," \u7684\u4ea4\u758a\u3002")),(0,o.kt)("p",null,"\u9019\u5176\u4e2d\u5dee\u7570\u53ef\u4ee5\u5f9e ",(0,o.kt)("inlineCode",{parentName:"p"},"intersectionRect")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"top"),"\uff0c\u4f86\u53bb\u5224\u65b7\u89c0\u5bdf\u5c0d\u8c61\u5728\u54ea\u500b\u5224\u65b7\u3002",(0,o.kt)("br",null),"\n\u2757\u7576 ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," \u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," \u6642\uff0c\u89c0\u5bdf\u5c0d\u8c61\u6b63\u8cbc\u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u9802\u7aef\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"top + height = window.innerHeight")),(0,o.kt)("h3",{id:"intersectionratio"},"intersectionRatio"),(0,o.kt)("p",null,"\u89c0\u5bdf\u5c0d\u8c61\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u7684\u4ea4\u758a\u6bd4\u4f8b"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"$$\nintersectionRatio = \\frac{intersectionRect's area}{target element's area}\n$$"),(0,o.kt)("br",null),"\u89c0\u5bdf\u5c0d\u8c61\u8207 `root` \u4ea4\u758a\u7684 `height` / \u89c0\u5bdf\u5c0d\u8c61\u6574\u9ad4\u7684 `height`"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u7c97\u7b97 ",(0,o.kt)("inlineCode",{parentName:"p"},"intersectionRatio"),"\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u6240\u8a2d\u5b9a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"threshold"),"\u3002",(0,o.kt)("br",null),"\n\u7576\u89f8\u767c\u662f\u5728\u89c0\u5bdf\u5c0d\u8c61\u7684\u4e0b\u534a\u90e8\u6642\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"intersectionRatio")," \u70ba 1 - ",(0,o.kt)("inlineCode",{parentName:"p"},"intersectionRatio")," \u503c")),(0,o.kt)("h3",{id:"rootbounds"},"rootBounds"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u70ba\u8996\u7a97(null)\uff0c\u9019\u908a\u7684\u503c\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ",(0,o.kt)("br",null),"\n\u7576\u6709\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u6642\uff0c\u5247\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u7684\u76f8\u95dc\u8cc7\u8a0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// {\n//   width: ,\n//   height: ,\n//   top: ,\n//   left: ,\n//   right: ,\n//   bottom: ,\n//   x: ,\n//   y: \n// }\n")),(0,o.kt)("h2",{id:"\u984d\u5916\u601d\u8003"},"\u984d\u5916\u601d\u8003"),(0,o.kt)("p",null,"\u56e0",(0,o.kt)("inlineCode",{parentName:"p"},"IntersectionObserver"),"\u662f\u756b\u9762\u9032\u5165\u8996\u7a97(\u6211\u5011\u9019\u908a\u5047\u5b9aroot:null)\u5c31\u89f8\u767c\u3002",(0,o.kt)("br",null),"\n\u5c31\u4ee5\u5f80\u7d93\u9a57\u662f\u6703\u5728\u8996\u7a97\u7684\u53ef\u80fd25%\u300130%\u7b49\u4f86\u505a\u5340\u584a\u7684fadeIn\u3002\u5982\u679c\u53ea\u55ae\u7d14\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"threshold"),"\uff0c\u9019\u662f\u4f9d\u7167\u89c0\u5bdf\u8005\u81ea\u5df1\u9032\u5165\u8996\u7a97\u7684\u767e\u5206\u6bd4\u4f86\u89f8\u767c\uff0c\u4e5f\u4e0d\u592a\u7b26\u5408\u9700\u6c42\u3002",(0,o.kt)("br",null),"\n\u7d93\u904e\u601d\u8003\u5f8c\uff0c\u6211\u8a8d\u70ba\u53ef\u4ee5\u642d\u914d",(0,o.kt)("inlineCode",{parentName:"p"},"threshold"),"\u4f86\u8b93\u89c0\u5bdf\u8005\u5728\u4e00\u500b\u6bd4\u4f8b\u6642\u89f8\u767c\uff0c\u6211\u662f\u4ee5\u89c0\u5bdf\u5c0d\u8c61\u7684\u6bcf10%\u505a\u4e00\u500b\u89f8\u767c\uff0c\u5229\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"IntersectionObserver"),"\u63d0\u4f9b\u7684method\u4f86\u5224\u65b7\u4ed6\u662f\u5426\u5df2\u5728\u8996\u7a97\u8a2d\u5b9a\u7684\u89f8\u767c\u503c\uff0c\u9032\u800c\u9054\u6210\u9700\u6c42\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const toggle = false; // \u662f\u5426\u8b93.show\u53ef\u4ee5\u4f86\u56de\u89f8\u767c\nconst triggerPoint = 0.25; // \u756b\u9762\u591a\u5c11\u767e\u5206\u6bd4\u4f86\u89f8\u767c\nconst thresholdPoint = length => {\n  const thresholdArray = [];\n  for (let i = 0; i <= length; i++) {\n    thresholdArray.push(i / length);\n  }\n  return thresholdArray;\n}\n\nconst callback = (entries) => {\n  entries.forEach(entry => {\n    // \u89f8\u767c\u503c = \u8996\u7a97\u9ad8 * \u6bd4\u4f8b\n    const triggerValue = window.innerHeight * triggerPoint;\n    // \u5982\u679c\u4ea4\u758a\u7684\u9ad8 \u5927\u65bc\u7b49\u65bc \u89f8\u767c\u503c\uff0c\u6216\u662f\u89c0\u5bdf\u5c0d\u8c61\u5df2\u5b8c\u5168\u9032\u5165\u756b\u9762(\u9ad8\u5ea6\u4e0d\u5920\u89f8\u767c\u503c)\n    if (!entry.target.classList.contains('show') && entry.intersectionRect.height >= triggerValue || entry.intersectionRatio === 1) {\n      entry.target.classList.add('show');\n      if (toggle === false) {\n        observer.unobserve(entry.target);\n      }\n    } else if (toggle) {\n      entry.target.classList.remove('show');\n    }\n  })\n};\nconst options = {\n  threshold: thresholdPoint(10)\n};\n\nconst observer = new IntersectionObserver(callback, options);\n")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10279046"},"MaxLeeBK - \u90a3\u4e9b\u88ab\u5ffd\u7565\u4f46\u5f88\u597d\u7528\u7684 Web API / IntersectionObserver"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"hhttps://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"MDN - Intersection Observer API"))))}m.isMDXComponent=!0}}]);