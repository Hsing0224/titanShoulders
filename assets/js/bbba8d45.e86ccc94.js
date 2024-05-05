"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(p,".").concat(d)]||g[d]||s[d]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3,description:"Angular CLI"},o="Angular CLI",i={unversionedId:"Angular/angular_cli",id:"Angular/angular_cli",title:"Angular CLI",description:"Angular CLI",source:"@site/docs/Angular/angular_cli.md",sourceDirName:"Angular",slug:"/Angular/angular_cli",permalink:"/titanShoulders/docs/Angular/angular_cli",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/Angular/angular_cli.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Angular CLI"},sidebar:"tutorialSidebar",previous:{title:"angular.json",permalink:"/titanShoulders/docs/Angular/angular_setting"},next:{title:"Decorator (\u88dd\u98fe\u5668)",permalink:"/titanShoulders/docs/Angular/angular_decorator"}},p={},c=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"ng serve",id:"ng-serve",level:3},{value:"ng generate",id:"ng-generate",level:3},{value:"Component",id:"component",level:4},{value:"Reference",id:"reference",level:2}],u={toc:c},g="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"angular-cli"},"Angular CLI"),(0,a.kt)("p",null,"Angular \u7684\u547d\u4ee4\u5217\u5de5\u5177\u4ecb\u9762"),(0,a.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"\u4f86\u5b89\u88dd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"npm install -g @angular/cli\n")),(0,a.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u547d\u4ee4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ng help"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u958b\u555f CLI \u7684\u5404\u9805\u6307\u4ee4\u8aaa\u660e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ng ","[command name]"," --help"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u8a72\u9805\u6307\u4ee4\u7684\u8aaa\u660e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ng new ","[project-name]"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5efa\u7acb\u4e00\u500b angular \u61c9\u7528\u7a0b\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ng serve"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u555f\u52d5 angular \u4e26\u6aa2\u8996")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ng build"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5c07 angular \u7a0b\u5f0f\u6253\u5305\u5230\u8f38\u51fa\u76ee\u9304\u88e1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ng lint"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u7528\u4f86\u6aa2\u67e5\u7a0b\u5f0f\u98a8\u683c\u662f\u5426\u7b26\u5408\u5718\u968a\u898f\u7bc4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ng update"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Angular \u6838\u5fc3\u7686\u63d0\u4f9b Schematics \u5b9a\u7fa9\uff0c \u5957\u4ef6\u521d\u59cb\u5316\u6216\u7248\u672c\u66f4\u65b0\u66f4\u65b9\u4fbf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ng generate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u7522\u751f angular components, services, pipes, directives")))),(0,a.kt)("h3",{id:"ng-serve"},"ng serve"),(0,a.kt)("p",null,"serve \u5b8c\u6210\u5f8c\u99ac\u4e0a\u958b\u555f\u9801\u9762"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ng serve --open\n")),(0,a.kt)("p",null,"\u6307\u5b9a\u4f60\u7684 ip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ng serve --host [your ip]\n")),(0,a.kt)("h3",{id:"ng-generate"},"ng generate"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5beb\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"ng g")),(0,a.kt)("h4",{id:"component"},"Component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ng generate component [component-name]\nng g c [component-name]\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://angular.tw/cli"},"https://angular.tw/cli"))))}s.isMDXComponent=!0}}]);