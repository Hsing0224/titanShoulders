"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[368],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>v});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var a=n.createContext({}),u=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(i),k=l,v=c["".concat(a,".").concat(k)]||c[k]||s[k]||r;return i?n.createElement(v,o(o({ref:t},d),{},{components:i})):n.createElement(v,o({ref:t},d))}));function v(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,o=new Array(r);o[0]=k;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[c]="string"==typeof e?e:l,o[1]=p;for(var u=2;u<r;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},1485:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=i(7462),l=(i(7294),i(3905));const r={sidebar_position:2},o="Design Pattern & Design Principle",p={unversionedId:"Other/design_pattern",id:"Other/design_pattern",title:"Design Pattern & Design Principle",description:"\u8a2d\u8a08\u539f\u5247 (Design Principle)",source:"@site/docs/Other/design_pattern.md",sourceDirName:"Other",slug:"/Other/design_pattern",permalink:"/titan-shoulders/docs/Other/design_pattern",draft:!1,editUrl:"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/Other/design_pattern.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u9019\u500b\u7db2\u7ad9\u7684\u8a95\u751f",permalink:"/titan-shoulders/docs/Other/website_create"},next:{title:"Docusaurus\u5c0f\u5e6b\u624b",permalink:"/titan-shoulders/docs/Other/docusaurus_tip"}},a={},u=[{value:"\u8a2d\u8a08\u539f\u5247 (Design Principle)",id:"\u8a2d\u8a08\u539f\u5247-design-principle",level:2},{value:"YNGNI (You aren&#39;t gonna need it)",id:"yngni-you-arent-gonna-need-it",level:3},{value:"SOLID",id:"solid",level:3},{value:"\u55ae\u4e00\u8077\u8cac\u539f\u5247(Single Responsibility Principle)",id:"\u55ae\u4e00\u8077\u8cac\u539f\u5247single-responsibility-principle",level:4},{value:"\u958b\u653e\u5c01\u9589\u539f\u5247(Open Closed Principle)",id:"\u958b\u653e\u5c01\u9589\u539f\u5247open-closed-principle",level:4},{value:"\u4ecb\u9762\u9694\u96e2\u539f\u5247(Interface Segregation Principle)",id:"\u4ecb\u9762\u9694\u96e2\u539f\u5247interface-segregation-principle",level:4},{value:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247(Liskov Substitution Principle)",id:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247liskov-substitution-principle",level:4},{value:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247(Dependency Inversion Principle)",id:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247dependency-inversion-principle",level:4},{value:"KISS (Keep It Simple, Stupid)",id:"kiss-keep-it-simple-stupid",level:3},{value:"DRY (Don&#39;t repeat yourself)",id:"dry-dont-repeat-yourself",level:3},{value:"\u5f37\u52a0\u7684\u91cd\u8907(Imposed duplication)",id:"\u5f37\u52a0\u7684\u91cd\u8907imposed-duplication",level:4},{value:"\u7121\u610f\u7684\u91cd\u8907(inadvertent duplication)",id:"\u7121\u610f\u7684\u91cd\u8907inadvertent-duplication",level:4},{value:"\u61f6\u60f0\u7684\u91cd\u8907(impatient duplication)",id:"\u61f6\u60f0\u7684\u91cd\u8907impatient-duplication",level:4},{value:"\u958b\u767c\u8005\u9593\u7684\u91cd\u8907(inter-developer duplication)",id:"\u958b\u767c\u8005\u9593\u7684\u91cd\u8907inter-developer-duplication",level:4},{value:"WET (Write everything twice\u3001We enjoy typing)",id:"wet-write-everything-twicewe-enjoy-typing",level:3},{value:"ROT (Rule of Three)",id:"rot-rule-of-three",level:3},{value:"LoD (Law of Demeter)",id:"lod-law-of-demeter",level:3},{value:"CRP (Common Reuse Principle)",id:"crp-common-reuse-principle",level:3},{value:"CCP (Common Closure Principle)",id:"ccp-common-closure-principle",level:3},{value:"REP (Reuse/Release Equivalence Principle)",id:"rep-reuserelease-equivalence-principle",level:3},{value:"CUPID",id:"cupid",level:3},{value:"Composable",id:"composable",level:4},{value:"Unix philosophy",id:"unix-philosophy",level:4},{value:"Predictable",id:"predictable",level:4},{value:"Idiomatic",id:"idiomatic",level:4},{value:"Domain-based",id:"domain-based",level:4},{value:"\u95dc\u6ce8\u9ede\u5206\u96e2",id:"\u95dc\u6ce8\u9ede\u5206\u96e2",level:3},{value:"\u9ad8\u5167\u805a\uff06\u4f4e\u8026\u5408",id:"\u9ad8\u5167\u805a\u4f4e\u8026\u5408",level:3},{value:"\u8a2d\u8a08\u6a21\u5f0f (Design Pattern)",id:"\u8a2d\u8a08\u6a21\u5f0f-design-pattern",level:2},{value:"\u5efa\u7acb\u7bc4\u4f8b",id:"\u5efa\u7acb\u7bc4\u4f8b",level:3},{value:"\u7d50\u69cb\u7bc4\u4f8b",id:"\u7d50\u69cb\u7bc4\u4f8b",level:3},{value:"\u884c\u70ba\u7bc4\u4f8b",id:"\u884c\u70ba\u7bc4\u4f8b",level:3},{value:"reference",id:"reference",level:2}],d={toc:u},c="wrapper";function s(e){let{components:t,...i}=e;return(0,l.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"design-pattern--design-principle"},"Design Pattern & Design Principle"),(0,l.kt)("h2",{id:"\u8a2d\u8a08\u539f\u5247-design-principle"},"\u8a2d\u8a08\u539f\u5247 (Design Principle)"),(0,l.kt)("p",null,"\u5728\u64b0\u5beb\u7a0b\u5f0f\u53ef\u53c3\u8003\u7684\u5927\u65b9\u5411\uff0c\u5229\u65bc\u672a\u4f86\u7dad\u8b77\u3002"),(0,l.kt)("h3",{id:"yngni-you-arent-gonna-need-it"},"YNGNI (You aren't gonna need it)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c08\u6ce8\u5be6\u73fe\u76ee\u524d\u5c08\u6848\u9700\u6c42\u7684\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u904e\u65e9\u512a\u5316\u7a0b\u5f0f\u78bc"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5148\u66ff\u672a\u4f86\u9810\u8a2d\u7acb\u5834\u800c\u64b0\u5beb\u76ee\u524d\u7528\u4e0d\u5230\u7684\u529f\u80fd")),(0,l.kt)("h3",{id:"solid"},"SOLID"),(0,l.kt)("p",null,"\u4e94\u500b\u539f\u5247\u6240\u7d44\u6210\u7684\u7e2e\u5beb\u5b57\uff0c\u539f\u5247\u8ddf\u539f\u5247\u4e4b\u9593\u5f7c\u6b64\u6709\u95dc\u4fc2\uff0c\u5728\u5be6\u4f5c\u548c\u61c9\u7528\u4e0a\u662f\u6709\u95dc\u7684\u3002"),(0,l.kt)("h4",{id:"\u55ae\u4e00\u8077\u8cac\u539f\u5247single-responsibility-principle"},"\u55ae\u4e00\u8077\u8cac\u539f\u5247(Single Responsibility Principle)"),(0,l.kt)("h4",{id:"\u958b\u653e\u5c01\u9589\u539f\u5247open-closed-principle"},"\u958b\u653e\u5c01\u9589\u539f\u5247(Open Closed Principle)"),(0,l.kt)("h4",{id:"\u4ecb\u9762\u9694\u96e2\u539f\u5247interface-segregation-principle"},"\u4ecb\u9762\u9694\u96e2\u539f\u5247(Interface Segregation Principle)"),(0,l.kt)("h4",{id:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247liskov-substitution-principle"},"\u91cc\u6c0f\u66ff\u63db\u539f\u5247(Liskov Substitution Principle)"),(0,l.kt)("h4",{id:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247dependency-inversion-principle"},"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247(Dependency Inversion Principle)"),(0,l.kt)("h3",{id:"kiss-keep-it-simple-stupid"},"KISS (Keep It Simple, Stupid)"),(0,l.kt)("p",null,"\u6838\u5fc3\u89c0\u5ff5\u70ba",(0,l.kt)("strong",{parentName:"p"},"\u7c21\u55ae\u5373\u662f\u7f8e"),(0,l.kt)("br",null),"\u5f37\u8abf\u7c21\u55ae\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8907\u96dc\u6027\u3002"),(0,l.kt)("h3",{id:"dry-dont-repeat-yourself"},"DRY (Don't repeat yourself)"),(0,l.kt)("p",null,"\u53c8\u7a31 OAOO(Once and only once)\uff0c\u904e\u5ea6\u7684\u62bd\u8c61\u5316\u548c\u53ef\u8b80\u6027\u662f\u4e92\u76f8\u885d\u7a81\u7684\uff0c\u6240\u4ee5\u5728\u9075\u5faa DRY \u539f\u5247\uff0c\u9700\u8981\u62ff\u634f\u9075\u5faa\u7684\u6bd4\u4f8b\u3002",(0,l.kt)("br",null),"\n\u907f\u514d\u91cd\u8907\u7684\u539f\u5247\uff0c\u53ef\u5206\u70ba\u56db\u500b\u90e8\u5206\u3002"),(0,l.kt)("h4",{id:"\u5f37\u52a0\u7684\u91cd\u8907imposed-duplication"},"\u5f37\u52a0\u7684\u91cd\u8907(Imposed duplication)"),(0,l.kt)("p",null,"\u958b\u767c\u8005\u8a8d\u70ba\u662f\u958b\u767c\u74b0\u5883\u9700\u8981\u7684\u3001\u88ab\u5f37\u8feb\u9700\u8981\u7684\uff1b\u50cf\u662f\u4e0d\u5fc5\u8981\u7684\u8a3b\u89e3\u6216\u662f\u958b\u767c\u6587\u4ef6\u3002\n\u5982\u679c\u53ef\u4ee5\u5728\u51fd\u5f0f\u540d\u7a31\u5c31\u53ef\u4ee5\u77e5\u9053\u9019\u500b\u51fd\u5f0f\u7684\u8077\u8cac\uff0c\u5c31\u4e0d\u9700\u8981\u7279\u5225\u7684\u8a3b\u89e3\u3002",(0,l.kt)("br",null),"\n\u6216\u662f\u8a3b\u89e3\u5beb\u5b8c\u4f46\u53c8\u4fee\u6539\u4e86\u7a0b\u5f0f\u7684\u908f\u8f2f\u800c\u6c92\u66f4\u65b0\u8a3b\u89e3\u3002"),(0,l.kt)("h4",{id:"\u7121\u610f\u7684\u91cd\u8907inadvertent-duplication"},"\u7121\u610f\u7684\u91cd\u8907(inadvertent duplication)"),(0,l.kt)("p",null,"\u4e00\u822c\u662f\u6703\u767c\u751f\u5728\u958b\u767c\u8005\u6c92\u6709\u610f\u8b58\u5230\u5167\u5bb9\u7684\u91cd\u8907\uff0c\u901a\u5e38\u767c\u751f\u5728\u908f\u8f2f\u8a2d\u8a08\u4e0a\u7684\u5167\u5bb9\uff0c",(0,l.kt)("br",null),"\u8209\u4f8b\u4f86\u8aaa\u5c31\u662f\u7576\u51fd\u5f0f\u53ef\u5f9e A \u53c3\u6578\u5c31\u53ef\u4ee5\u63a8\u5c0e\u5230 B \u53c3\u6578\uff0c\u90a3 B \u53c3\u6578\u7684\u8a2d\u7f6e\u5c31\u662f\u91cd\u8907\u7684\u3002"),(0,l.kt)("h4",{id:"\u61f6\u60f0\u7684\u91cd\u8907impatient-duplication"},"\u61f6\u60f0\u7684\u91cd\u8907(impatient duplication)"),(0,l.kt)("p",null,"\u767c\u751f\u5728\u70ba\u4e86\u7bc0\u7701\u6642\u9593\u800c\u8907\u88fd\u7a0b\u5f0f\u78bc\uff0c\u9020\u6210\u7a0b\u5f0f\u78bc\u4e0a\u7684\u91cd\u8907\u3002"),(0,l.kt)("h4",{id:"\u958b\u767c\u8005\u9593\u7684\u91cd\u8907inter-developer-duplication"},"\u958b\u767c\u8005\u9593\u7684\u91cd\u8907(inter-developer duplication)"),(0,l.kt)("p",null,"\u5728\u591a\u4eba\u5354\u4f5c\u958b\u767c\u6642\uff0c\u540c\u500b\u5c08\u6848\u6642\u5e38\u6703\u6709\u5171\u540c\u7684\u9700\u6c42\uff0c\u800c\u6c92\u5354\u8abf\u597d\u6216\u662f\u5c0d\u65bc\u5c08\u6848\u67b6\u69cb\u4e0d\u6e05\u695a\uff0c\u5c0e\u81f4\u5beb\u4e86\u91cd\u8907\u6216\u985e\u4f3c\u7684\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"wet-write-everything-twicewe-enjoy-typing"},"WET (Write everything twice\u3001We enjoy typing)"),(0,l.kt)("p",null,"\u8b93\u958b\u767c\u8005\u4e0d\u8981\u904e\u5ea6\u7684\u8ffd\u6c42 DRY \u539f\u5247\u800c\u767c\u5c55\u51fa\u7684\u7406\u5ff5\u3002",(0,l.kt)("br",null),"\n\u5b83\u4e0d\u662f\u9f13\u52f5\u53ef\u4ee5\u5728\u64b0\u5beb\u7a0b\u5f0f\u78bc\u6642\u7121\u9650\u7684\u91cd\u8907\uff0c\u800c\u662f\u8981\u5728 DRY \u548c WET \u9593\u53d6\u5f97\u5e73\u8861\u3002"),(0,l.kt)("h3",{id:"rot-rule-of-three"},"ROT (Rule of Three)"),(0,l.kt)("p",null,"\u6b64\u8a2d\u8a08\u539f\u5247\u8a66\u5716\u70ba DRY \u548c WET \u4e4b\u9593\u627e\u5230\u4e00\u500b\u5e73\u8861\u9ede\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b21\u76f4\u63a5\u5beb\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u6b21\u9047\u5230\u5dee\u4e0d\u591a\u7684\u908f\u8f2f\uff0c\u53ef\u4ee5\u8907\u88fd\u4e14\u7a0d\u4f5c\u4fee\u6539\u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7576\u9047\u5230\u7b2c\u4e09\u6b21\u5dee\u4e0d\u591a\u7684\u908f\u8f2f\u6642\uff0c\u5c31\u53ef\u4ee5\u8003\u616e\u91cd\u69cb\u3002")),(0,l.kt)("h3",{id:"lod-law-of-demeter"},"LoD (Law of Demeter)"),(0,l.kt)("p",null,"\u8fea\u7c73\u7279\u6cd5\u5247\uff0c\u53c8\u88ab\u7a31\u70ba\u6700\u5c11\u77e5\u8b58\u539f\u5247 LKP (Least Knowledge Principle)",(0,l.kt)("br",null),"\n\u4e3b\u8981\u5f37\u8abf",(0,l.kt)("strong",{parentName:"p"},"\u4f4e\u8026\u5408"),"\uff0c\u6e1b\u5c11\u7a0b\u5f0f\u9593\u76f8\u4e92\u4f9d\u8cf4\uff0c\u4ee5\u63d0\u9ad8\u7dad\u8b77\u6027\u548c\u7a69\u5b9a\u6027\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53ea\u8207\u76f4\u63a5\u76f8\u95dc\u7684\u7a0b\u5f0f\u505a\u8026\u5408"),(0,l.kt)("li",{parentName:"ol"},"\u9650\u5236\u93c8\u7d50\u7684\u9577\u5ea6"),(0,l.kt)("li",{parentName:"ol"},"\u95dc\u6ce8\u5c40\u90e8\u7684\u77e5\u8b58")),(0,l.kt)("h3",{id:"crp-common-reuse-principle"},"CRP (Common Reuse Principle)"),(0,l.kt)("p",null,"\u5171\u540c\u91cd\u7528\u539f\u5247",(0,l.kt)("br",null),"\n\u5f37\u8abf\u7d93\u5e38\u4e00\u8d77\u88ab\u4f7f\u7528\u7684\u985e\u5225\u9700\u6253\u5305\u5728\u4e00\u8d77\u3002\u907f\u514d\u628a\u4e0d\u5e38\u4f7f\u7528\u4e5f\u4e00\u8d77\u5305\u4e00\u8d77\u800c\u884d\u4f38\u8f09\u5165\u5f15\u5165\u4e86\u4e0d\u5fc5\u8981\u7684\u4f9d\u8cf4\u3002"),(0,l.kt)("h3",{id:"ccp-common-closure-principle"},"CCP (Common Closure Principle)"),(0,l.kt)("p",null,"\u5171\u540c\u5c01\u9589\u539f\u5247",(0,l.kt)("br",null),"\n\u5f37\u8abf\u5c0d\u65bc\u540c\u4e00\u7a2e\u985e\u578b\u7684\u8b8a\u66f4\uff0c\u61c9\u8a72\u53ea\u5f71\u97ff\u540c\u4e00\u500b\u6a21\u7d44\u3002"),(0,l.kt)("h3",{id:"rep-reuserelease-equivalence-principle"},"REP (Reuse/Release Equivalence Principle)"),(0,l.kt)("p",null,"\u91cd\u7528/\u91cb\u653e\u7b49\u50f9\u539f\u5247",(0,l.kt)("br",null),"\n\u7576\u4f7f\u7528\u7684\u5143\u4ef6\u90fd\u662f\u9700\u8981\u5148\u767c\u5e03\u904e\u7684\uff0c\u6709\u5c6c\u65bc\u81ea\u5df1\u7684\u6587\u4ef6\u548c\u7248\u672c\u865f\u3002\u5229\u65bc\u672a\u4f86\u7684\u8ffd\u8e64\u548c\u7dad\u8b77\u3002"),(0,l.kt)("p",null,"\u7d44\u5408\u512a\u65bc\u7e7c\u627f"),(0,l.kt)("h3",{id:"cupid"},"CUPID"),(0,l.kt)("p",null,"\u65e8\u5728\u63d0\u5347\u7a0b\u5f0f\u78bc\u54c1\u8cea\u548c\u958b\u767c\u8005\u9ad4\u9a57\u7684\u8a2d\u8a08\u539f\u5247\uff0c\u5f37\u8abf\u4e86\u7a0b\u5f0f\u78bc\u7684\u53ef\u7d44\u5408\u6027\u3001\u9075\u5faa Unix \u54f2\u5b78\u3001\u53ef\u9810\u6e2c\u6027\u3001\u7b26\u5408\u8a9e\u8a00\u6163\u4f8b\u4ee5\u53ca\u8207\u9818\u57df\u6a21\u578b\u7684\u7dca\u5bc6\u7d50\u5408\u3002"),(0,l.kt)("h4",{id:"composable"},"Composable"),(0,l.kt)("p",null,"\u6613\u65bc\u7406\u89e3\u3002",(0,l.kt)("br",null),"\n\u8981\u6709\u597d\u7684\u7a0b\u5f0f\u67b6\u69cb\u53ca\u547d\u540d\u4e4b\u5916\uff0c\u9084\u5305\u542b\u6e05\u695a\u7684\u6587\u4ef6\u3001\u8a3b\u89e3\uff0c\u548c\u4fdd\u6301\u7a0b\u5f0f\u78bc\u98a8\u683c\u7684\u4e00\u81f4\u6027\u3002"),(0,l.kt)("h4",{id:"unix-philosophy"},"Unix philosophy"),(0,l.kt)("p",null,"Unix \u54f2\u5b78",(0,l.kt)("br",null),"\n\u505a\u597d\u4e00\u4ef6\u4e8b\u3001\u5c07\u8907\u96dc\u4efb\u52d9\u62c6\u89e3\u6210\u4e00\u500b\u500b\u5c0f\u90e8\u5206\u3002"),(0,l.kt)("h4",{id:"predictable"},"Predictable"),(0,l.kt)("p",null,"\u53ef\u9810\u6e2c\u6027",(0,l.kt)("br",null),"\n\u7576\u8f38\u5165\u53c3\u6578\u6642\uff0c\u53ef\u4ee5\u5148\u9810\u6e2c\u5230\u76f8\u540c\u7684\u7d50\u679c"),(0,l.kt)("h4",{id:"idiomatic"},"Idiomatic"),(0,l.kt)("p",null,"\u7b26\u5408\u8a9e\u8a00\u7fd2\u6163",(0,l.kt)("br",null),"\n\u6bcf\u7a2e\u8a9e\u8a00\u90fd\u6709\u5167\u5efa\u53ef\u4f7f\u7528\u7684\u51fd\u5f0f\uff0c\u53ef\u8b93\u7a0b\u5f0f\u78bc\u7dad\u6301\u53ef\u8b80\u6027\u3002"),(0,l.kt)("h4",{id:"domain-based"},"Domain-based"),(0,l.kt)("p",null,"\u57fa\u65bc\u9818\u57df",(0,l.kt)("br",null),"\n\u7a0b\u5f0f\u958b\u767c\u61c9\u8cbc\u8fd1\u696d\u52d9\u9700\u6c42\uff0c\u76f4\u63a5\u89e3\u6c7a\u696d\u52d9\u4e0a\u7684\u554f\u984c\u3002\u907f\u514d\u904e\u591a\u7684\u62bd\u8c61\u548c\u8907\u96dc\u6027\u3002"),(0,l.kt)("h3",{id:"\u95dc\u6ce8\u9ede\u5206\u96e2"},"\u95dc\u6ce8\u9ede\u5206\u96e2"),(0,l.kt)("h3",{id:"\u9ad8\u5167\u805a\u4f4e\u8026\u5408"},"\u9ad8\u5167\u805a\uff06\u4f4e\u8026\u5408"),(0,l.kt)("h2",{id:"\u8a2d\u8a08\u6a21\u5f0f-design-pattern"},"\u8a2d\u8a08\u6a21\u5f0f (Design Pattern)"),(0,l.kt)("p",null,"\u6bd4\u8f03\u504f\u5be6\u4f5c\u9762\uff0c\u7576\u8981\u505a\u67d0\u4e9b\u4e8b\u60c5\u53ef\u4ee5\u53c3\u8003\u67d0\u4e9b\u65b9\u6cd5\u3002\u7576\u9047\u5230\u554f\u984c\u6642\uff0c\u53ef\u4ee5\u5f9e\u9019\u4e9b\u65b9\u6cd5\u4e2d\u627e\u5230\u89e3\u6c7a\u65b9\u6848\u3002"),(0,l.kt)("h3",{id:"\u5efa\u7acb\u7bc4\u4f8b"},"\u5efa\u7acb\u7bc4\u4f8b"),(0,l.kt)("p",null,"\u7269\u4ef6\u7684\u5efa\u7acb"),(0,l.kt)("h3",{id:"\u7d50\u69cb\u7bc4\u4f8b"},"\u7d50\u69cb\u7bc4\u4f8b"),(0,l.kt)("p",null,"\u7269\u4ef6\u8207\u7269\u4ef6\u7684\u5408\u4f5c\u95dc\u4fc2"),(0,l.kt)("h3",{id:"\u884c\u70ba\u7bc4\u4f8b"},"\u884c\u70ba\u7bc4\u4f8b"),(0,l.kt)("p",null,"\u7269\u4ef6\u8207\u7269\u4ef6\u7684\u50b3\u905e\u95dc\u4fc2"),(0,l.kt)("h2",{id:"reference"},"reference"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2wbX-ZoetF0&list=PLEfh-m_KG4dbCJl3uks6DzLzdkOdmiZpT"},"Alex \u5b85\u5e79\u561b - \u6dfa\u8ac7 Javascript \u8a2d\u8a08\u6a21\u5f0f")," ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"p",href:"https://shawnlin0201.github.io/Methodology/Methodology-003-YAGNI-principle/"},"\u7487\u4e4b\u53c8\u7487\u7684\u7db2\u8def\u4e16\u754c - YAGNI \u539f\u5247")," ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"p",href:"https://dannorth.net/cupid-for-joyful-coding/"},"CUPID\u2014for joyful coding")," ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"p",href:"https://devs.tw/post/438"},"\u5143\u4ef6\u5982\u4f55\u6b63\u78ba\u6b78\u985e ? | \u5143\u4ef6\u5167\u805a\u6027\u4e09\u5927\u539f\u5247 : REP\u3001CCP\u3001CRP - Enoxs"))))}s.isMDXComponent=!0}}]);