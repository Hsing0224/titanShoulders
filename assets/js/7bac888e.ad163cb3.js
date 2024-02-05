"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[326],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:9,description:"Angular Router"},l="Router",i={unversionedId:"Angular/angular_router",id:"Angular/angular_router",title:"Router",description:"Angular Router",source:"@site/docs/Angular/angular_router.md",sourceDirName:"Angular",slug:"/Angular/angular_router",permalink:"/titanShoulders/docs/Angular/angular_router",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/Angular/angular_router.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Angular Router"},sidebar:"tutorialSidebar",previous:{title:"\u8868\u55ae",permalink:"/titanShoulders/docs/Angular/angular_form"},next:{title:"config",permalink:"/titanShoulders/docs/TypeScript/config"}},p={},u=[{value:"\u5b50\u8def\u7531\u8a2d\u5b9a",id:"\u5b50\u8def\u7531\u8a2d\u5b9a",level:2},{value:"\u5ef6\u9072\u8f09\u5165",id:"\u5ef6\u9072\u8f09\u5165",level:2},{value:"\u9810\u5148\u8f09\u5165",id:"\u9810\u5148\u8f09\u5165",level:2}],c={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"router"},"Router"),(0,o.kt)("h2",{id:"\u5b50\u8def\u7531\u8a2d\u5b9a"},"\u5b50\u8def\u7531\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," \u5c6c\u6027\u5b9a\u7fa9\u4e0b\u4e00\u5c64\u7684\u8def\u7531\u8cc7\u8a0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"{\n  path: 'pokemon',\n  children: [\n    {\n      path: 'list',\n      component: PokemonListComponent\n    },\n    {\n      path: 'info',\n      component: PokemonInfoComponent\n    }\n  ],\n}\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"pokemon")," \u9019\u5c64\u8def\u7531\u6c92\u6709\u6307\u5b9a\u5c0d\u61c9\u7684\u5143\u4ef6\u6642\uff0c\u90a3\u8a72\u9801\u9762\u5c31\u9700\u8981\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"<router-outlet></router-outlet>")," \u6307\u4ee4\u4f86\u986f\u793a\u4e0b\u5c64\u8def\u7531\u7684\u9801\u9762\u3002"),(0,o.kt)("h2",{id:"\u5ef6\u9072\u8f09\u5165"},"\u5ef6\u9072\u8f09\u5165"),(0,o.kt)("p",null,"\u70ba\u63d0\u5347\u6548\u80fd\uff0c\u53ef\u5229\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," \u7684\u5ef6\u9072\u8f09\u5165\u6a5f\u5236\uff0c\u5728\u4f7f\u7528\u8005\u9ede\u9078\u9801\u9762\u6642\uff0c\u624d\u8f09\u5165\u5c0d\u61c9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u6a94\u6848\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"{\n  path: 'pokemon',\n  children: [\n    {\n      path: 'list',\n      loadChildren: () => import('./pokemon-list.module').then(m => m.PokemonListModule)\n    },\n    {\n      path: 'info',\n      component: PokemonInfoComponent\n    }\n  ],\n}\n")),(0,o.kt)("h2",{id:"\u9810\u5148\u8f09\u5165"},"\u9810\u5148\u8f09\u5165"),(0,o.kt)("p",null,"\u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5ef6\u9072\u8f09\u5165")," \u76f8\u53cd\uff0c\u4e5f\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," \u8a2d\u5b9a\uff0c\u5c07\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," \u5148\u90fd\u8f09\u9032\u4f86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"@NgModule({\n  imports: [\n    RouterModule.forRoot(routes, {\n      preloadingStrategy: PreloadAllModule\n    })\n  ],\n  exports: [RouterModule]\n})\n")))}d.isMDXComponent=!0}}]);