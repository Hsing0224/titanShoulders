"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[1],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,g=s["".concat(i,".").concat(d)]||s[d]||c[d]||l;return n?o.createElement(g,a(a({ref:t},m),{},{components:n})):o.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:r,a[1]=p;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,description:"Decorator"},a="Decorator (\u88dd\u98fe\u5668)",p={unversionedId:"Angular/angular_decorator",id:"Angular/angular_decorator",title:"Decorator (\u88dd\u98fe\u5668)",description:"Decorator",source:"@site/docs/Angular/angular_decorator.md",sourceDirName:"Angular",slug:"/Angular/angular_decorator",permalink:"/titanShoulders/docs/Angular/angular_decorator",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/Angular/angular_decorator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Decorator"},sidebar:"tutorialSidebar",previous:{title:"Angular CLI",permalink:"/titanShoulders/docs/Angular/angular_cli"},next:{title:"Directives (\u6307\u4ee4)",permalink:"/titanShoulders/docs/Angular/angular_directives"}},i={},u=[{value:"@ngModule",id:"ngmodule",level:2},{value:"declarations",id:"declarations",level:3},{value:"imports",id:"imports",level:3},{value:"exports",id:"exports",level:3},{value:"providers",id:"providers",level:3},{value:"bootstrap",id:"bootstrap",level:3},{value:"BrowserModule &amp; CommonModule",id:"browsermodule--commonmodule",level:3},{value:"@Component",id:"component",level:2},{value:"selector",id:"selector",level:3},{value:"templateUrl",id:"templateurl",level:3},{value:"styleUrls",id:"styleurls",level:3},{value:"encapsulation",id:"encapsulation",level:3},{value:"@Input",id:"input",level:2},{value:"\u53ef\u4ee5\u5229\u7528 getter \u548c setter \u4f86\u8b93\u503c\u50b3\u5165\u6642\u53ef\u4ee5\u505a\u8655\u7406",id:"\u53ef\u4ee5\u5229\u7528-getter-\u548c-setter-\u4f86\u8b93\u503c\u50b3\u5165\u6642\u53ef\u4ee5\u505a\u8655\u7406",level:3},{value:"@Attribute",id:"attribute",level:2},{value:"@Output",id:"output",level:2},{value:"Reference",id:"reference",level:2}],m={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decorator-\u88dd\u98fe\u5668"},"Decorator (\u88dd\u98fe\u5668)"),(0,r.kt)("p",null,"\u8b93\u958b\u767c\u8005\u80fd\u5920\u4f7f\u7528\u5143\u6578\u64da\u4f86\u5b9a\u7fa9\u548c\u914d\u7f6e Angular \u4e2d\u7684 Module\u3001Directives\u3001Service \u548c Component\uff0c\u5f9e\u800c\u5be6\u73fe\u66f4\u597d\u7684\u6a21\u7d44\u5316\u548c\u53ef\u7dad\u8b77\u6027"),(0,r.kt)("h2",{id:"ngmodule"},"@ngModule"),(0,r.kt)("p",null,"\u7576\u5efa\u597d\u4e00\u500b angular app\uff0c\u5176\u6700\u4e3b\u8981\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.module")," \u6a94\u6848\u9810\u8a2d\u914d\u7f6e\u662f\u9019\u6a23\u3002",(0,r.kt)("br",null),"\n\u6216\u662f\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," \u5c01\u88dd\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," \u6642\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"*.module.ts")," \u6703\u6709\u5c0d\u61c9\u7684\u8a2d\u5b9a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"app.module.ts","app.module.ts":!0},'import { NgModule } from "@angular/core";\nimport { BrowserModule } from "@angular/platform-browser";\nimport { AppRoutingModule } from "./app-routing.module";\nimport { AppComponent } from "./app.component";\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, AppRoutingModule],\n  exports: [],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"custom.module.ts","custom.module.ts":!0},'import { NgModule } from "@angular/core";\nimport { CommonModule } from "@angular/common";\nimport { CustomComponent } from "./custom.component";\n\n@NgModule({\n  declarations: [CustomComponent],\n  imports: [CommonModule],\n  exports: [],\n})\nexport class CustomModule {}\n')),(0,r.kt)("h3",{id:"declarations"},"declarations"),(0,r.kt)("p",null,"\u5c6c\u65bc\u8a72\u6a21\u7d44\u7684\u4e00\u7d44\u5143\u4ef6(components)\u3001\u547d\u4ee4(directives)\u6216\u7ba1\u9053(pipes)\u3002",(0,r.kt)("br",null),"\n\u5728 Angular \u88e1\uff0c\u90fd\u9700\u8981\u5ba3\u544a\u5728\u7279\u5b9a\u4e14\u552f\u4e00\u7684\u6a21\u7d44\u5167\u3002\u9019\u500b\u5c6c\u6027\u662f\u7528\u4f86\u5b9a\u7fa9\u8a72\u6a21\u7d44\u5167\u64c1\u6709\u7684\u5143\u4ef6\u6e05\u55ae"),(0,r.kt)("h3",{id:"imports"},"imports"),(0,r.kt)("p",null,"\u628a\u5176\u4ed6\u6a21\u7d44\u532f\u5165\u81f3\u8a72\u6a21\u7d44\u4f7f\u7528"),(0,r.kt)("h3",{id:"exports"},"exports"),(0,r.kt)("p",null,"\u5b9a\u7fa9\u6a21\u7d44\u5167\u54ea\u4e9b\u5143\u4ef6\u53ef\u4ee5\u5c0d\u5916\u516c\u958b\u7d66\u5176\u4ed6\u6a21\u7d44\u4f7f\u7528\u3002",(0,r.kt)("br",null),"\n\u53e6\u5916\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6\u6a21\u7d44\uff0c\u7576\u532f\u5165\u8a72\u6a21\u7d44\u6642\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6b64\u5c6c\u6027\u6307\u5b9a\u7684\u5143\u4ef6"),(0,r.kt)("h3",{id:"providers"},"providers"),(0,r.kt)("p",null,"\u5b9a\u7fa9\u6a21\u7d44\u5167\u7684\u5404\u7a2e\u4ee4\u724c(token)\uff0c\u4e5f\u65b9\u4fbf\u6a21\u7d44\u4f9d\u7167\u4e0d\u540c\u72c0\u6cc1\u800c\u53ef\u4ee5\u505a\u4e0d\u540c\u7684\u66ff\u63db"),(0,r.kt)("h3",{id:"bootstrap"},"bootstrap"),(0,r.kt)("p",null,"\u555f\u52d5\u6642\u7684\u6839\u5143\u4ef6\uff0c\u6307\u5b9a\u7684\u5143\u4ef6\u6703\u5728\u7a0b\u5f0f\u555f\u52d5\u5f8c\uff0c\u66ff\u63db\u6389 index.html \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"<app-root>")),(0,r.kt)("h3",{id:"browsermodule--commonmodule"},"BrowserModule & CommonModule"),(0,r.kt)("p",null,"BrowserModule \u63d0\u4f9b\u4e86\u555f\u52d5\u548c\u57f7\u884c\u700f\u89bd\u5668\u61c9\u7528\u6642\u5fc5\u9808\u7684\u670d\u52d9(\u4e5f\u5305\u542b CommonModule)\uff0c\u53ea\u9069\u7528\u65bc\u6839\u5143\u7d20\u3002",(0,r.kt)("br",null),"\nCommonModule \u5305\u542b\u901a\u7528\u6307\u4ee4(ngIf\u3001ngFor)"),(0,r.kt)("h2",{id:"component"},"@Component"),(0,r.kt)("p",null,"\u5229\u7528 Angular CLI \u5efa\u7acb ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," \u6642\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"*.component.ts")," \u6703\u5ba3\u544a\u8a72 ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," \u7684\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\n@Component({\n  selector: 'app-custom',\n  templateUrl: './custom.component.html',\n  styleUrls: ['./custom.component.scss']\n})\n")),(0,r.kt)("h3",{id:"selector"},"selector"),(0,r.kt)("p",null,"\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"CSS")," \u7684\u9078\u64c7\u5668\u89c0\u5ff5\u53bb\u5b9a\u7fa9 ",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u3002\u9019\u908a\u4e5f\u53ef\u4ee5\u6539\u6210\u5176\u4ed6 CSS \u9078\u53d6\u5668\uff0c\u4f8b\u5982\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"[app-custom]"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u9810\u8a2d\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"app-*")," \uff0c\u5982\u679c\u8981\u4fee\u6539\u524d\u7db4\u53ef\u4ee5\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"angular.json")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},'"prefix"')," \u8a2d\u5b9a\u3002")),(0,r.kt)("h3",{id:"templateurl"},"templateUrl"),(0,r.kt)("p",null,"\u4e00\u822c\u8a2d\u5b9a\u70ba\u9023\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"HTML"),"\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"templateUrl")," \u6539\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"template"),"\uff0c\u4e26\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u7684\u5b57\u4e32\u6a21\u677f\u4f86\u5beb ",(0,r.kt)("inlineCode",{parentName:"p"},"HTML"),"\u3002"),(0,r.kt)("h3",{id:"styleurls"},"styleUrls"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"styleUrls")," \u70ba\u4e00\u500b\u9663\u5217\u4f86\u505a\u5ba3\u544a\uff0c\u6545\u53ef\u4ee5\u5f15\u5165\u591a\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"CSS")," \u4f86\u7d66\u8a72 Component \u5957\u7528\u6a23\u5f0f\u3002"),(0,r.kt)("h3",{id:"encapsulation"},"encapsulation"),(0,r.kt)("p",null,"\u8a2d\u7f6e Component \u7684\u5c01\u88dd\u6a21\u5f0f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ViewEncapsulation.None")," \uff1a\u4e0d\u6703\u5c0d Component \u9032\u884c\u5c01\u88dd\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ViewEncapsulation.Emulated")," \uff1a\u9ed8\u8a8d\u7684\u5c01\u88dd\u6a21\u5f0f\uff0c\u53ea\u6703\u5c0d\u8a72 Component \u6709\u6548\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ViewEncapsulation.ShadowDom")," \uff1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Web Components")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Shadow DOM")," \u6280\u8853\uff0c\u7576\u7136\u524d\u63d0\u662f\u700f\u89bd\u5668\u8981\u652f\u63f4 ",(0,r.kt)("inlineCode",{parentName:"li"},"Shadow DOM"),"\u3002")),(0,r.kt)("h2",{id:"input"},"@Input"),(0,r.kt)("p",null,"\u5728\u5143\u4ef6\u5167\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Input")," \u5b9a\u7fa9\u597d\u8b8a\u6578\uff0c\u7528\u4f86\u63a5\u6536\u7236\u5143\u4ef6\u7684\u8cc7\u6599\u3002\u56e0\u61c9\u5404\u7a2e\u4e0d\u540c\u7684\u9700\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"child.component.ts","child.component.ts":!0},"export class ChildComponent {\n  @Input() fontSize: number = 16; // \u53ef\u4ee5\u7d66\u4e88\u9810\u8a2d\u503c\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"parent.component.html","parent.component.html":!0},'<app-child [fontSize]="30"></app-child>\n')),(0,r.kt)("h3",{id:"\u53ef\u4ee5\u5229\u7528-getter-\u548c-setter-\u4f86\u8b93\u503c\u50b3\u5165\u6642\u53ef\u4ee5\u505a\u8655\u7406"},"\u53ef\u4ee5\u5229\u7528 getter \u548c setter \u4f86\u8b93\u503c\u50b3\u5165\u6642\u53ef\u4ee5\u505a\u8655\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"child.component.ts","child.component.ts":!0},"export class ChildComponent {\n  private _fontSize: number = 16;\n  @Input()\n  set fontSize(value: number) {\n    this._fontSize = value;\n    console.log(`fonSize \u8a2d\u5b9a\u503c\u70ba ${value}`);\n  }\n  get fontSize(): number {\n    return this._fontSize;\n  }\n}\n")),(0,r.kt)("h2",{id:"attribute"},"@Attribute"),(0,r.kt)("p",null,"\u5982\u679c\u5b50\u5143\u4ef6\u9700\u8981\u5f9e\u7236\u5c64\u8a2d\u5b9a\u5c6c\u6027\u503c\uff0c\u9664\u4e86 @Input \u4e4b\u5916\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 @Attribute \u4f86\u63a5\u6536\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"child.component.ts","child.component.ts":!0},'export class ChildComponent {\n  constructor(@Attribute("fontSize") fontSize: number) {\n    this.fontSize = fontSize || 16; // \u53ef\u4ee5\u7d66\u4e88\u9810\u8a2d\u503c\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"parent.component.html","parent.component.html":!0},'<app-child fontSize="30"></app-child>\n')),(0,r.kt)("h2",{id:"output"},"@Output"),(0,r.kt)("p",null,"\u5b50\u5143\u4ef6\u53ef\u4ee5\u900f\u904e @Output \u81ea\u5b9a\u7fa9\uff0c\u4f86\u8b93\u8cc7\u6599\u50b3\u905e\u5230 \u7236\u5143\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"child.component.ts","child.component.ts":!0},"export class ChildComponent {\n  @Output() sizeChange = new EventEmmiter<number>();\n\n  sizeChangeHandler(value: number) {\n    this.size = value;\n    this.sizeChange.emit(this.size); // \u767c\u51fa\u8a0a\u865f\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"parent.component.html","parent.component.html":!0},'\x3c!-- \u7576\u5b50\u5143\u4ef6 emit \u8a0a\u865f\u6642\u89f8\u767c\uff0c$event \u70ba\u5b50\u5143\u4ef6 emit \u7684 this.size --\x3e\n<app-child (sizeChange)="onChildSizeChange($event)"></app-child>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"parent.component.ts","parent.component.ts":!0},"export class ParentComponent {\n  onChildSizeChange(value: number) {\n    console.log(value);\n  }\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.udemy.com/course/angular-zero/"},"Angular \u958b\u767c\u5be6\u6230\uff1a\u5f9e\u96f6\u958b\u59cb"))))}c.isMDXComponent=!0}}]);