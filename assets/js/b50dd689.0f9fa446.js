"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[823],{4048:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=i(4848),s=i(8453);const r={sidebar_position:23,description:"Angular binding"},l="\u7e6b\u7d50",d={id:"Angular/angular_binding",title:"\u7e6b\u7d50",description:"Angular binding",source:"@site/docs/Angular/angular_binding.md",sourceDirName:"Angular",slug:"/Angular/angular_binding",permalink:"/titan-shoulders/docs/Angular/angular_binding",draft:!1,unlisted:!1,editUrl:"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/Angular/angular_binding.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,description:"Angular binding"},sidebar:"tutorialSidebar",previous:{title:"Directives (\u6307\u4ee4)",permalink:"/titan-shoulders/docs/Angular/angular_directives"},next:{title:"\u7bc4\u672c\u53c3\u8003\u8b8a\u6578\u53ca\u9801\u9762\u7bc4\u672c",permalink:"/titan-shoulders/docs/Angular/angular_template-reference"}},c={},a=[{value:"\u55ae\u5411\u7e6b\u7d50 (One-way Binding)",id:"\u55ae\u5411\u7e6b\u7d50-one-way-binding",level:2},{value:"\u5167\u5d4c\u7e6b\u7d50 (Interpolation)",id:"\u5167\u5d4c\u7e6b\u7d50-interpolation",level:3},{value:"\u5c6c\u6027\u7e6b\u7d50 (Property Binding)",id:"\u5c6c\u6027\u7e6b\u7d50-property-binding",level:3},{value:"\u5c6c\u6027\u7e6b\u7d50 (Attribute Binding)",id:"\u5c6c\u6027\u7e6b\u7d50-attribute-binding",level:3},{value:"\u985e\u5225\u7e6b\u7d50 (Class Binding)",id:"\u985e\u5225\u7e6b\u7d50-class-binding",level:3},{value:"\u6a23\u5f0f\u7e6b\u7d50 (Style Binding)",id:"\u6a23\u5f0f\u7e6b\u7d50-style-binding",level:3},{value:"\u4e8b\u4ef6\u7e6b\u7d50 (Event Binding)",id:"\u4e8b\u4ef6\u7e6b\u7d50-event-binding",level:3},{value:"\u96d9\u5411\u7e6b\u7d50 (Two-way Binding)",id:"\u96d9\u5411\u7e6b\u7d50-two-way-binding",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"Reference",id:"reference",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u7e6b\u7d50",children:"\u7e6b\u7d50"})}),"\n",(0,t.jsx)(n.h2,{id:"\u55ae\u5411\u7e6b\u7d50-one-way-binding",children:"\u55ae\u5411\u7e6b\u7d50 (One-way Binding)"}),"\n",(0,t.jsx)(n.h3,{id:"\u5167\u5d4c\u7e6b\u7d50-interpolation",children:"\u5167\u5d4c\u7e6b\u7d50 (Interpolation)"}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u5229\u7528 ",(0,t.jsx)(n.code,{children:"{{ }}"})," \u5c07\u8cc7\u6599\u986f\u793a\u51fa\u4f86"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'title: string = "Hello World";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<h1>{{ title }}</h1>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u96d6\u7136\u5728 ",(0,t.jsx)(n.code,{children:"{{ }}"})," \u5167\u53ef\u4ee5\u505a\u904b\u7b97\uff0c\u4f46\u5efa\u8b70\u9084\u662f\u5beb\u5728 ",(0,t.jsx)(n.code,{children:"ts"})," \u5167\u3002\u8b93 code \u5206\u96e2\u8f03\u7c21\u6f54\u4e5f\u65b9\u4fbf\u7dad\u8b77\u3002"]})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["\u7576\u7136\u4f60\u4e5f\u53ef\u4ee5\u7528\u5728 html \u6a19\u7c64\u88e1\u7684 attribute\uff0c\u4e0d\u904e\u9019\u7528",(0,t.jsx)(n.strong,{children:"\u5c6c\u6027\u7e6b\u7d50"}),"\u4f86\u7d81\u5b9a\u6703\u66f4\u597d\u7dad\u8b77\u548c\u7ba1\u7406\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<h1 title="{{ title }}">{{ title }}</h1>\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u5c6c\u6027\u7e6b\u7d50-property-binding",children:"\u5c6c\u6027\u7e6b\u7d50 (Property Binding)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5 a \u6a19\u7c64\u70ba\u4f8b\uff0c\u5728 DOM \u7269\u4ef6\u4e2d\uff0c\u6709\u4e00\u500b href \u5c6c\u6027\uff0c\u8a72\u5c6c\u6027\u7684\u539f\u6587\u70ba Property",(0,t.jsx)("br",{}),"\n\u53ef\u4ee5\u958b\u555f\u958b\u767c\u8005\u5de5\u5177\uff0c\u5074\u908a\u6b04\u7684\u9801\u7c64\u6307\u5230 ",(0,t.jsx)(n.code,{children:"Properties"})," \uff0c\u5247\u53ef\u4ee5\u770b\u5230\u8a72 ",(0,t.jsx)(n.code,{children:"tag"})," \u7684 ",(0,t.jsx)(n.code,{children:"Properties"})," \u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'url = "https://www.google.com/";\ntext = "This is link.";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<a [href]="url" [textContent]="text"></a>\n\x3c!-- \u8f38\u51fa\u70ba\n<a href="https://www.google.com/">This is link.</a>\n--\x3e\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5c6c\u6027\u7e6b\u7d50-attribute-binding",children:"\u5c6c\u6027\u7e6b\u7d50 (Attribute Binding)"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 HTML \u898f\u683c\u4e2d\uff0c\u6a19\u7c64\u5167\u5c6c\u6027\u7684\u539f\u6587\u70ba Attribute",(0,t.jsx)("br",{}),"\n\u800c\u7576\u985e\u4f3c W3C \u898f\u7bc4\u7684\u53ef\u4ee5\u81ea\u7531\u64f4\u5145\u7684 Attribute ",(0,t.jsx)(n.code,{children:"data-*"})," \uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'title = "This is title.";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<a href="https://www.google.com/" [attr.data-title]="title">This is link.</a>\n\x3c!-- \u8f38\u51fa\u70ba\n<a href="https://www.google.com/" data-title="This is title.">This is link.</a>\n--\x3e\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u8981\u7528 ",(0,t.jsx)(n.code,{children:"Attribute Binding"})," \u4f86\u63a7\u5236 HTML \u6a19\u7c64\u7684 ",(0,t.jsx)(n.code,{children:"disabled"})," \u5c6c\u6027\uff0c\u5176\u8a2d\u5b9a\u503c\u70ba ",(0,t.jsx)(n.code,{children:"null"})," \u8ddf ",(0,t.jsx)(n.code,{children:"disabled"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<button type="button" [attr.disabled]="condition ? \'disabled\': null"></button>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u985e\u5225\u7e6b\u7d50-class-binding",children:"\u985e\u5225\u7e6b\u7d50 (Class Binding)"}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u55ae\u500b\u8a2d\u5b9a\uff0c\u6216\u662f\u50b3\u5165\u4e00\u7d44 object \u3002",(0,t.jsx)("br",{}),"\n\u53ef\u7528\u4e09\u5143\u5224\u65b7\uff0c\u6216\u8005\u50b3\u5165\u8b8a\u6578 (boolean) \u4f86\u63a7\u5236 class \u7684\u986f\u793a / \u96b1\u85cf\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"isTrue = true;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<div [ngClass]=\"{'true-style': isTrue, 'false-style': !isTrue}\"></div>\n<div [class]=\"{'true-style': isTrue, 'false-style': !isTrue}\"></div>\n<div [class.true-style]=\"isTrue\" [class.false-style]=\"!isTrue\"></div>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6a23\u5f0f\u7e6b\u7d50-style-binding",children:"\u6a23\u5f0f\u7e6b\u7d50 (Style Binding)"}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u55ae\u500b\u8a2d\u5b9a\uff0c\u6216\u662f\u50b3\u5165\u4e00\u7d44 object \u3002",(0,t.jsx)("br",{}),"\n\u53ef\u7528\u4e09\u5143\u5224\u65b7\uff0c\u6216\u8005\u50b3\u5165\u503c\u4f86\u63a7\u5236 style \u7684\u6578\u503c\u6216\u986f\u793a / \u96b1\u85cf\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"isTrue = true;\nfontSize = 12;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<div\n  [ngStyle]=\"{'backgroundColor': isTrue ? 'green' : 'red', 'fontSize.px': fontSize}\"\n></div>\n<div\n  [style]=\"{'background-color': isTrue ? 'green' : 'red', 'font-size.px': fontSize}\"\n></div>\n<div\n  [style.background-color]=\"isTrue ? 'green' : 'red'\"\n  [style.font-size.px]=\"fontSize\"\n></div>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e8b\u4ef6\u7e6b\u7d50-event-binding",children:"\u4e8b\u4ef6\u7e6b\u7d50 (Event Binding)"}),"\n",(0,t.jsx)(n.p,{children:"\u5c07\u4e8b\u4ef6\u7d81\u5b9a\u5728 html \u4e0a\uff0c\u7576\u89f8\u767c\u4e8b\u4ef6\uff0c\u5c31\u547c\u53eb ts \u5167\u7684 method\u3002\u4e5f\u53ef\u4ee5\u5c07\u4e8b\u4ef6\u6216\u503c\u50b3\u905e\u9032\u53bb\u7d66 method \u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!--\n\u53e6\u4e00\u7a2e\u5beb\u6cd5\uff0c\u4f46\u8f03\u4e0d\u6613\u95b1\u8b80\uff0c\u4e0d\u63a8\u85a6\u3002\n<button type="button" on-click="onClick($event)">Button</button>\n--\x3e\n<button type="button" (click)="onClick($event)">Button</button>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"onClick(event) {\n  console.log(event);\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"Class"})," \u88e1\u7684\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"function"})," \u800c\u662f ",(0,t.jsx)(n.code,{children:"method"})," \u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u96d9\u5411\u7e6b\u7d50-two-way-binding",children:"\u96d9\u5411\u7e6b\u7d50 (Two-way Binding)"}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u5728\u5efa\u7f6e\u9801\u9762\u7684\u6642\u5019\uff0c\u6709\u6642\u9700\u6c42\u662f\u5728 ",(0,t.jsx)(n.code,{children:"input"})," \u8f38\u5165\u503c\u6642\uff0c\u8981\u7acb\u523b\u8655\u7406\u4e26\u4e14\u986f\u793a\u5728\u7db2\u9801\u4e0a\u3002\u9019\u6642\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u96d9\u5411\u7e6b\u7d50\u4f86\u8655\u7406\u9019\u500b\u9700\u6c42\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,t.jsxs)(n.p,{children:["\u8a9e\u6cd5\u70ba",(0,t.jsx)(n.strong,{children:"\u5c6c\u6027\u7e6b\u7d50"}),"\u8ddf",(0,t.jsx)(n.strong,{children:"\u4e8b\u4ef6\u7e6b\u7d50"}),"\u7684\u7d50\u5408\u3002",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.code,{children:"[()]"})," ",(0,t.jsx)(n.em,{children:"\u5728\u76d2\u5b50\u88e1\u7684\u6709\u6839\u9999\u8549"}),"\uff0c\u800c\u7d81\u5b9a\u4e00\u500b ",(0,t.jsx)(n.code,{children:"Property"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'keyword = "";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<input type="search" [(ngModel)]="keyword" />\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u9700\u8981\u5f15\u5165 ",(0,t.jsx)(n.code,{children:"FormsModule"})]})}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://angular.tw/guide/property-binding",children:"\u7e6b\u7d50 - Angular"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.udemy.com/course/angular-zero/",children:"Angular \u958b\u767c\u5be6\u6230\uff1a\u5f9e\u96f6\u958b\u59cb"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/playlist?list=PLneJIGUTIItu6QrNxEBAUgTXZaHIpO8D9",children:"Angular \u5165\u9580\u6559\u5b78 - \u51f1\u54e5\u5beb\u7a0b\u5f0f"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.tenlong.com.tw/products/9789864349821",children:"\u5716\u50cf Angular \u958b\u767c\u5165\u9580\uff1a\u6253\u9020\u9ad8\u9748\u6d3b\u5ea6\u7684\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f (iT\u90a6\u5e6b\u5fd9\u9435\u4eba\u8cfd\u7cfb\u5217\u66f8)"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);