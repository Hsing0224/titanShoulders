"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[64],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(i,".").concat(d)]||c[d]||g[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,description:"Angular JSON"},l="angular.json",s={unversionedId:"Angular/angular_setting",id:"Angular/angular_setting",title:"angular.json",description:"Angular JSON",source:"@site/docs/Angular/angular_setting.md",sourceDirName:"Angular",slug:"/Angular/angular_setting",permalink:"/titanShoulders/docs/Angular/angular_setting",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/Angular/angular_setting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Angular JSON"},sidebar:"tutorialSidebar",previous:{title:"angular \u82f1\u6587\u5c0f\u6559\u5ba4",permalink:"/titanShoulders/docs/Angular/angular_proper-noun"},next:{title:"Decorator(\u88dd\u98fe\u5668)",permalink:"/titanShoulders/docs/Angular/angular_ng-module"}},i={},u=[{value:"prefix",id:"prefix",level:2},{value:"stylePreprocessorOptions",id:"stylepreprocessoroptions",level:2},{value:"assets",id:"assets",level:2},{value:"Reference",id:"reference",level:2}],p={toc:u},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"angularjson"},"angular.json"),(0,a.kt)("p",null,"\u5728 angular \u5c08\u6848\u88e1\u90fd\u6709\u4e00\u500b angular.json \u6a94\u6848\u3002\u53ef\u4f9d\u7167\u9700\u6c42\u53bb\u8a2d\u5b9a"),(0,a.kt)("h2",{id:"prefix"},"prefix"),(0,a.kt)("p",null,"\u9810\u8a2d\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," \uff0c\u5176\u8a2d\u5b9a\u662f\u5c07 component\u3001service \u7b49\u524d\u7db4\u6539\u70ba\u81ea\u5df1\u60f3\u8981\u7684"),(0,a.kt)("h2",{id:"stylepreprocessoroptions"},"stylePreprocessorOptions"),(0,a.kt)("p",null,"\u5728 scss \u6642\uff0c\u53ef\u4ee5\u5229\u7528 stylePreprocessorOptions \u4f86\u8f09\u5165\u5168\u57df\u6a23\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"stylePreprocessorOptions": {\n  "includePaths": [\n    "src/style-paths"\n  ]\n}\n')),(0,a.kt)("h2",{id:"assets"},"assets"),(0,a.kt)("p",null,"\u5c07\u975c\u614b\u8cc7\u6e90\u8f09\u5165\u5230 angular \u5c08\u6848\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 glob \u4f86\u5c07\u5916\u90e8\u8cc7\u6e90\u8f09\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"assets": [\n  {\n    "glob": "**/*",\n    "input": "./node_modules/some-package/images",\n    "output": "/some-package/"\n  }\n]\n')),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLneJIGUTIItu6QrNxEBAUgTXZaHIpO8D9"},"\u51f1\u54e5 - angular \u5165\u9580\u6559\u5b78"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/workspace-config"},"\u5b98\u65b9\u6587\u4ef6")))}g.isMDXComponent=!0}}]);