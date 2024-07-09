"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,d=u["".concat(p,".").concat(m)]||u[m]||k[m]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:11,description:"Event loop"},l="Event loop (\u4e8b\u4ef6\u5faa\u74b0)",r={unversionedId:"JavaScript/javascript_event-loop",id:"JavaScript/javascript_event-loop",title:"Event loop (\u4e8b\u4ef6\u5faa\u74b0)",description:"Event loop",source:"@site/docs/JavaScript/javascript_event-loop.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_event-loop",permalink:"/titanShoulders/docs/JavaScript/javascript_event-loop",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/JavaScript/javascript_event-loop.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"Event loop"},sidebar:"tutorialSidebar",previous:{title:"JavaScript \u7684\u90a3\u4e9b\u89c0\u5ff5",permalink:"/titanShoulders/docs/JavaScript/javascript_tip"},next:{title:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50",permalink:"/titanShoulders/docs/JavaScript/javascript_expressions-and-operators"}},p={},s=[{value:"\u6d41\u7a0b\u63cf\u8ff0",id:"\u6d41\u7a0b\u63cf\u8ff0",level:2},{value:"\u5404\u4f5c\u7528\u89e3\u91cb",id:"\u5404\u4f5c\u7528\u89e3\u91cb",level:2},{value:"\u55ae\u4e00\u57f7\u884c\u7dd2 (single-threaded)",id:"\u55ae\u4e00\u57f7\u884c\u7dd2-single-threaded",level:3},{value:"\u5806\u758a (Stack)",id:"\u5806\u758a-stack",level:3},{value:"Web APIs",id:"web-apis",level:3},{value:"\u4f47\u5217 (Queue)",id:"\u4f47\u5217-queue",level:3},{value:"\u963b\u585e (blocking)",id:"\u963b\u585e-blocking",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"\u5716\u89e3",id:"\u5716\u89e3",level:3},{value:"Reference",id:"reference",level:2}],c={toc:s},u="wrapper";function k(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-loop-\u4e8b\u4ef6\u5faa\u74b0"},"Event loop (\u4e8b\u4ef6\u5faa\u74b0)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://latentflip.com/loupe/"},"Event Loop \u7684\u8996\u89ba\u5316\u5448\u73fe")),(0,i.kt)("p",null,"Event Loop \u7684\u4efb\u52d9\u662f\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u662f\u7a7a\u7684\uff0c\u5c31\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," \u4e2d\u7684 frame \u653e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u4e2d\uff0c\u76f4\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," \u90fd\u662f\u7a7a\u7684\u70ba\u6b62\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event Loop \u5de5\u4f5c\u6d41\u7a0b\u5716",src:n(6073).Z,width:"380",height:"355"})),(0,i.kt)("h2",{id:"\u6d41\u7a0b\u63cf\u8ff0"},"\u6d41\u7a0b\u63cf\u8ff0"),(0,i.kt)("p",null,"\u7576\u9801\u9762\u8f09\u5165\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript Runtime")," \u6642\uff0c\u6703\u4f9d\u7167\u64b0\u5beb\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript")," \uff0c\u7531\u4e0a\u5230\u4e0b\u4f9d\u5e8f\u57f7\u884c\u4e0b\u4f86\uff0c\u4e00\u500b\u7a0b\u5f0f\u78bc\u7247\u6bb5\u8996\u70ba\u4e00\u500b frame\uff0c\u6703\u5148\u653e\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"Call Stack"),"\u3002",(0,i.kt)("br",null),"\n\u5982\u679c\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Timer"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Event Listener"),"\uff0c\u5247\u9019\u4e9b frame \u6703\u5f9e ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u5148\u79fb\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web APIs")," \uff0c\u4e26\u7e7c\u7e8c\u57f7\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u88e1\u7684\u7a0b\u5f0f\u78bc\u7247\u6bb5\u3002",(0,i.kt)("br",null),"\n\u7136\u800c\u5982\u679c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u88e1\u7684\u7a0b\u5f0f\u78bc\u56e0\u70ba\u7b49\u5f85\u6642\u9593\u904e\u4e45\uff0c\u5247\u6703\u9020\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"blocking"),"\u3002",(0,i.kt)("br",null),"\n\u7576 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u6e05\u7a7a\u5f8c\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"Event loop")," \u6703\u5c07 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web APIs")," \u8655\u7406\u5b8c\uff0c\u653e\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," \u7684 frame \u79fb\u81f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u88e1\u53bb\u57f7\u884c\u3002",(0,i.kt)("br",null),"\n\u76f4\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," \u90fd\u70ba\u7a7a\u3002"),(0,i.kt)("h2",{id:"\u5404\u4f5c\u7528\u89e3\u91cb"},"\u5404\u4f5c\u7528\u89e3\u91cb"),(0,i.kt)("h3",{id:"\u55ae\u4e00\u57f7\u884c\u7dd2-single-threaded"},"\u55ae\u4e00\u57f7\u884c\u7dd2 (single-threaded)"),(0,i.kt)("p",null,"JavaScript \u662f\u55ae\u4e00\u57f7\u884c\u7dd2\uff0c\u9867\u540d\u601d\u7fa9\u5c31\u662f\u4e00\u500b\u6642\u9593\u9ede\u53ea\u80fd\u505a\u4e00\u4ef6\u4e8b\u3002"),(0,i.kt)("h3",{id:"\u5806\u758a-stack"},"\u5806\u758a (Stack)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f8c\u9032\u5148\u51fa (Last In, First Out\uff0cLIFO)"),(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u547c\u53eb\u4e00\u500b\u51fd\u5f0f\uff0c\u8a72\u51fd\u5f0f\u6703\u88ab\u5806\u758a\u5230\u6700\u9802\u7aef\uff1b\u7576\u57f7\u884c\u5b8c\u7562\u6642\uff0c\u8a72\u51fd\u5f0f\u6703\u5f9e\u5806\u758a\u4e2d\u79fb\u51fa\u3002")),(0,i.kt)("h3",{id:"web-apis"},"Web APIs"),(0,i.kt)("p",null,"\u7576 Web APIs \u6709\u4e8b\u4ef6\u5b8c\u6210\u5f8c\uff0c\u5247\u6703\u5c07 frame \u79fb\u81f3 Queue\u3002",(0,i.kt)("br",null),"\n\u4e3b\u8981\u4efb\u52d9\u6709\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u767c\u9001\u7db2\u8def\u8acb\u6c42 (XMLHttpRequest)"),(0,i.kt)("li",{parentName:"ol"},"\u8a08\u6642\u5668 (Timer)"),(0,i.kt)("li",{parentName:"ol"},"\u4e8b\u4ef6\u8655\u7406 (Event Listener)")),(0,i.kt)("h3",{id:"\u4f47\u5217-queue"},"\u4f47\u5217 (Queue)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5148\u9032\u5148\u51fa (First In, First Out\uff0cFIFO)"),(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u975e\u540c\u6b65\u4efb\u52d9\u3002\u4f8b\u5982\uff1a setTimeout \u3001 ajax")),(0,i.kt)("p",null,"\u524d\u9762\u6709\u63d0\u5230\uff0c\u7576 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u6c92\u6709 frame \u6642\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"Event loop")," \u6703\u5f9e ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," \u7684 frame \u79fb\u81f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u57f7\u884c\u3002",(0,i.kt)("br",null),"\n\u7531\u6b64\u6211\u5011\u77e5\u9053\uff0c\u4f8b\u5982\u7576 Web APIs \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u6240\u8a2d\u5b9a\u7684\u79d2\u6578\u5f8c\uff0c\u5c07\u5176\u5167\u5bb9\u653e\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue"),"\u3002\u4e0d\u662f\u79d2\u6578\u5230\u5c31",(0,i.kt)("strong",{parentName:"p"},"\u7acb\u5373\u57f7\u884c"),"\uff0c\u800c\u662f",(0,i.kt)("strong",{parentName:"p"},"\u5373\u5c07\u88ab\u57f7\u884c")),(0,i.kt)("h3",{id:"\u963b\u585e-blocking"},"\u963b\u585e (blocking)"),(0,i.kt)("p",null,"\u963b\u585e\u901a\u5e38\u767c\u751f\u5728",(0,i.kt)("strong",{parentName:"p"},"\u540c\u6b65"),"\u7684\u64cd\u4f5c\u4e0a\u3002",(0,i.kt)("br",null),"\n\u7576 ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript Runtime")," \u6642\uff0c\u6703\u57f7\u884c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u88e1\u7684\u7a0b\u5f0f\u78bc\u7247\u6bb5\u3002",(0,i.kt)("br",null),"\n\u800c\u842c\u4e00\u7a0b\u5f0f\u78bc\u7247\u6bb5\u57f7\u884c\u6642\u9593\u904e\u4e45\uff0c\u5176\u4ed6\u4efb\u52d9\u7121\u6cd5\u88ab\u57f7\u884c\uff0c\u9032\u800c\u9020\u6210\u700f\u89bd\u5668\u505c\u6b62\u6e32\u67d3\uff0c\u4f7f\u7528\u8005\u611f\u53d7\u5230\u5361\u9813\u6216\u51cd\u7d50\u3002\u9020\u6210\u700f\u89bd\u9ad4\u9a57\u4e0d\u4f73\u3002"),(0,i.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,i.kt)("p",null,"\u7576\u9801\u9762\u8f09\u5165\uff0c\u700f\u89bd\u5668\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u5f15\u64ce\u6703\u4f9d\u7167\u64b0\u5beb\u7684\u7a0b\u5f0f\u78bc\uff0c\u7531\u4e0a\u5230\u4e0b\u4f9d\u5e8f\u57f7\u884c\u4e0b\u4f86\u3002",(0,i.kt)("br",null),"\n\u4e00\u500b\u7a0b\u5f0f\u78bc\u7247\u6bb5\u8996\u70ba\u4e00\u500b frame\uff0c\u6703\u5148\u653e\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"Call Stack")," \u505a\u57f7\u884c\u3002",(0,i.kt)("br",null),"\n\u7576 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u9047\u5230\u50cf\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Timer"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Event Listener"),"\uff0c\u9019\u4e9b frame \u6703\u5f9e ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u5148\u79fb\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web APIs")," \uff0c\u4e26\u7e7c\u7e8c\u57f7\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u88e1\u7684\u7a0b\u5f0f\u78bc\u7247\u6bb5\u3002",(0,i.kt)("br",null),"\n\u842c\u4e00\u6709 frame \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u88e1\u56e0\u7a0b\u5f0f\u78bc\u908f\u8f2f\u5c0e\u81f4\u57f7\u884c\u904e\u4e45\uff0c\u5247\u6703\u9020\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"blocking")," \u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"\u7576 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Stack")," \u6e05\u7a7a\u5f8c\uff0c ",(0,i.kt)("inlineCode",{parentName:"strong"},"Event loop")," \u6703\u5c07 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Web APIs")," \u8655\u7406\u5b8c\uff0c\u653e\u5165 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Queue")," \u7684 frame \u79fb\u81f3 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Stack")," \u88e1\u53bb\u57f7\u884c"),"\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"\u76f4\u5230 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Stack")," \u548c ",(0,i.kt)("inlineCode",{parentName:"strong"},"Queue")," \u90fd\u70ba\u7a7a"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log("Start");\n\nfunction blockForAWhile() {\n  const startTime = new Date().getTime();\n  while (new Date().getTime() - startTime < 5000) {}\n}\n\ndocument.querySelector("button").addEventListener("click", function onClick() {\n  setTimeout(function () {\n    console.log("button click");\n  }, 1000);\n});\n\nblockForAWhile();\n// \u57f7\u884c blockForAWhile() \u6642\uff0c\u6309\u4e0b button\n\nsetTimeout(function setTimeout2s() {\n  console.log("setTimeout 2s");\n}, 2000);\n\nsetTimeout(function setTimeoutZero() {\n  console.log("setTimeout 0");\n}, 0);\n\nconsole.log("End");\n\n/* \u6700\u5f8c\u8f38\u51fa\u7684 log\nStart\nEnd\nsetTimeout 0\nbutton click\nsetTimeout 2s\n*/\n')),(0,i.kt)("h3",{id:"\u5716\u89e3"},"\u5716\u89e3"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5370\u51fa Start\n",(0,i.kt)("img",{alt:"\u5370\u51fa Start",src:n(4919).Z,width:"1116",height:"509"}),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"button \u76e3\u807d\u4e8b\u4ef6\u8f49\u4ea4 Web APIs\n",(0,i.kt)("img",{alt:"button \u76e3\u807d\u4e8b\u4ef6\u8f49\u4ea4 Web APIs",src:n(7148).Z,width:"1116",height:"505"}),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"\u57f7\u884c blockForWhile()\n",(0,i.kt)("img",{alt:"\u57f7\u884c blockForWhile()",src:n(2648).Z,width:"1116",height:"505"}),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"\u6a21\u64ec blocking\uff0c\u4e26\u6309\u4e0b button \u89f8\u767c\u4e8b\u4ef6\n",(0,i.kt)("img",{alt:"\u6a21\u64ec blocking\uff0c\u4e26\u6309\u4e0b button \u89f8\u767c\u4e8b\u4ef6",src:n(9533).Z,width:"1127",height:"505"}),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"\u9047\u5230 setTimeout\uff0c\u8f49\u4ea4 Web APIs\n",(0,i.kt)("img",{alt:"\u9047\u5230 setTimeout\uff0c\u8f49\u4ea4 Web APIs",src:n(2589).Z,width:"1116",height:"505"}),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"\u6a21\u64ec\u9047\u5230\u79d2\u6578\u70ba 0 \u7684 setTimeout\n",(0,i.kt)("img",{alt:"\u6a21\u64ec\u9047\u5230\u79d2\u6578\u70ba 0 \u7684 setTimeout",src:n(9673).Z,width:"1116",height:"505"}),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"\u5370\u51fa End\n",(0,i.kt)("img",{alt:"\u5370\u51fa End",src:n(1967).Z,width:"1116",height:"509"}),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"Stack \u7121 frame\uff0c\u5f9e Queue \u62ff frame \u4f86\u57f7\u884c\n",(0,i.kt)("img",{alt:"Stack \u7121 frame\uff0c\u5f9e Queue \u62ff frame \u4f86\u57f7\u884c",src:n(3805).Z,width:"1116",height:"505"}),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},"setTimeout \u8dd1\u5b8c\u4e1f\u5230 Queue\uff0c\u518d\u88ab Event Loop \u62c9\u81f3 Stack \u57f7\u884c\n",(0,i.kt)("img",{alt:"setTimeout \u8dd1\u5b8c\u4e1f\u5230 Queue\uff0c\u518d\u88ab Event Loop \u62c9\u81f3 Stack \u57f7\u884c",src:n(6839).Z,width:"1116",height:"505"}),(0,i.kt)("img",{alt:"setTimeout \u8dd1\u5b8c\u4e1f\u5230 Queue\uff0c\u518d\u88ab Event Loop \u62c9\u81f3 Stack \u57f7\u884c",src:n(7288).Z,width:"1116",height:"505"}),(0,i.kt)("img",{alt:"setTimeout \u8dd1\u5b8c\u4e1f\u5230 Queue\uff0c\u518d\u88ab Event Loop \u62c9\u81f3 Stack \u57f7\u884c",src:n(9851).Z,width:"1116",height:"505"}))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"http://latentflip.com/loupe/"},"event loop - loupe"),(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif"},"JavaScript Visualized: Event Loop - Lydia Hallie"),(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.javascripttutorial.net/javascript-event-loop/"},"JavaScript Event Loop - JavaScript Tutorial Website"))))}k.isMDXComponent=!0},4919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_1-404690f89acb9962e48064014f99c0e1.png"},7288:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_10-22456e57a01931f2b089940f555a3a8a.png"},9851:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_11-9cb2acd11248a11f0c4532b5a230be67.png"},7148:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_2-eed0a30131211ef7930401be861fd36b.png"},2648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_3-9545775e654e5233e219913a0d47cc7d.png"},9533:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_4-9f3e1ce13e909a731aafe8043d6af4b3.png"},2589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_5-5f700b3aea3076836762cf157fd7d80a.png"},9673:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_6-e7ce0f3fb502a4fe0c000f38031e4be4.png"},1967:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_7-4f954d7aa036a1e694f455c50354e50a.png"},3805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_8-f067ef07c14e66a92e8d73a182e6199e.png"},6839:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_9-fd6d04c4834202e8dddf5bcd02ed59ae.png"},6073:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-loop_flow_view-3a56a949934dfbdcf6f75f3d205c9b10.jpg"}}]);