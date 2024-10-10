"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[778],{116:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=o(4848),r=o(8453);const l={sidebar_position:21,description:"Decorator"},s="Decorator (\u88dd\u98fe\u5668)",i={id:"Angular/angular_decorator",title:"Decorator (\u88dd\u98fe\u5668)",description:"Decorator",source:"@site/docs/Angular/angular_decorator.md",sourceDirName:"Angular",slug:"/Angular/angular_decorator",permalink:"/titan-shoulders/docs/Angular/angular_decorator",draft:!1,unlisted:!1,editUrl:"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/Angular/angular_decorator.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,description:"Decorator"},sidebar:"tutorialSidebar",previous:{title:"Angular Core",permalink:"/titan-shoulders/docs/Angular/angular_core"},next:{title:"Directives (\u6307\u4ee4)",permalink:"/titan-shoulders/docs/Angular/angular_directives"}},d={},c=[{value:"@ngModule",id:"ngmodule",level:2},{value:"declarations",id:"declarations",level:3},{value:"imports",id:"imports",level:3},{value:"exports",id:"exports",level:3},{value:"providers",id:"providers",level:3},{value:"bootstrap",id:"bootstrap",level:3},{value:"BrowserModule &amp; CommonModule",id:"browsermodule--commonmodule",level:3},{value:"@Component",id:"component",level:2},{value:"selector",id:"selector",level:3},{value:"templateUrl",id:"templateurl",level:3},{value:"styleUrls",id:"styleurls",level:3},{value:"encapsulation",id:"encapsulation",level:3},{value:"standalone",id:"standalone",level:3},{value:"import",id:"import",level:3},{value:"@Input",id:"input",level:2},{value:"\u53ef\u4ee5\u5229\u7528 getter \u548c setter \u4f86\u8b93\u503c\u50b3\u5165\u6642\u53ef\u4ee5\u505a\u8655\u7406",id:"\u53ef\u4ee5\u5229\u7528-getter-\u548c-setter-\u4f86\u8b93\u503c\u50b3\u5165\u6642\u53ef\u4ee5\u505a\u8655\u7406",level:3},{value:"@Attribute",id:"attribute",level:2},{value:"@Output",id:"output",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"decorator-\u88dd\u98fe\u5668",children:"Decorator (\u88dd\u98fe\u5668)"})}),"\n",(0,t.jsx)(n.p,{children:"\u8b93\u958b\u767c\u8005\u80fd\u5920\u4f7f\u7528\u5143\u6578\u64da\u4f86\u5b9a\u7fa9\u548c\u914d\u7f6e Angular \u4e2d\u7684 Module\u3001Directives\u3001Service \u548c Component\uff0c\u5f9e\u800c\u5be6\u73fe\u66f4\u597d\u7684\u6a21\u7d44\u5316\u548c\u53ef\u7dad\u8b77\u6027"}),"\n",(0,t.jsx)(n.h2,{id:"ngmodule",children:"@ngModule"}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u5efa\u597d\u4e00\u500b angular app\uff0c\u5176\u6700\u4e3b\u8981\u7684 ",(0,t.jsx)(n.code,{children:"app.module"})," \u6a94\u6848\u9810\u8a2d\u914d\u7f6e\u662f\u9019\u6a23\u3002",(0,t.jsx)("br",{}),"\n\u6216\u662f\u5c07 ",(0,t.jsx)(n.code,{children:"Component"})," \u5c01\u88dd\u6210 ",(0,t.jsx)(n.code,{children:"Module"})," \u6642\uff0c ",(0,t.jsx)(n.code,{children:"*.module.ts"})," \u6703\u6709\u5c0d\u61c9\u7684\u8a2d\u5b9a\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["::: tip\nAngular 15 \u5f8c\uff0c\u53ef\u5c07  ",(0,t.jsx)(n.code,{children:"Component"})," \u8a2d\u5b9a ",(0,t.jsx)(n.code,{children:"standalone: true"}),"\uff0c\u5373\u53ef\u76f4\u63a5\u5728 ",(0,t.jsx)(n.code,{children:"Component"})," import \u6240\u9700\u7684 ",(0,t.jsx)(n.code,{children:"Component"})," \u4f86\u4f7f\u7528\u3002\n:::"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"app.module.ts",children:'import { NgModule } from "@angular/core";\nimport { BrowserModule } from "@angular/platform-browser";\nimport { AppRoutingModule } from "./app-routing.module";\nimport { AppComponent } from "./app.component";\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, AppRoutingModule],\n  exports: [],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"custom.module.ts",children:'import { NgModule } from "@angular/core";\nimport { CommonModule } from "@angular/common";\nimport { CustomComponent } from "./custom.component";\n\n@NgModule({\n  declarations: [CustomComponent],\n  imports: [CommonModule],\n  exports: [],\n})\nexport class CustomModule {}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"declarations",children:"declarations"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c6c\u65bc\u8a72\u6a21\u7d44\u7684\u4e00\u7d44\u5143\u4ef6(components)\u3001\u547d\u4ee4(directives)\u6216\u7ba1\u9053(pipes)\u3002",(0,t.jsx)("br",{}),"\n\u5728 Angular \u88e1\uff0c\u90fd\u9700\u8981\u5ba3\u544a\u5728\u7279\u5b9a\u4e14\u552f\u4e00\u7684\u6a21\u7d44\u5167\u3002\u9019\u500b\u5c6c\u6027\u662f\u7528\u4f86\u5b9a\u7fa9\u8a72\u6a21\u7d44\u5167\u64c1\u6709\u7684\u5143\u4ef6\u6e05\u55ae"]}),"\n",(0,t.jsx)(n.h3,{id:"imports",children:"imports"}),"\n",(0,t.jsx)(n.p,{children:"\u628a\u5176\u4ed6\u6a21\u7d44\u532f\u5165\u81f3\u8a72\u6a21\u7d44\u4f7f\u7528"}),"\n",(0,t.jsx)(n.h3,{id:"exports",children:"exports"}),"\n",(0,t.jsxs)(n.p,{children:["\u5b9a\u7fa9\u6a21\u7d44\u5167\u54ea\u4e9b\u5143\u4ef6\u53ef\u4ee5\u5c0d\u5916\u516c\u958b\u7d66\u5176\u4ed6\u6a21\u7d44\u4f7f\u7528\u3002",(0,t.jsx)("br",{}),"\n\u53e6\u5916\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6\u6a21\u7d44\uff0c\u7576\u532f\u5165\u8a72\u6a21\u7d44\u6642\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6b64\u5c6c\u6027\u6307\u5b9a\u7684\u5143\u4ef6"]}),"\n",(0,t.jsx)(n.h3,{id:"providers",children:"providers"}),"\n",(0,t.jsx)(n.p,{children:"\u5b9a\u7fa9\u6a21\u7d44\u5167\u7684\u5404\u7a2e\u4ee4\u724c(token)\uff0c\u4e5f\u65b9\u4fbf\u6a21\u7d44\u4f9d\u7167\u4e0d\u540c\u72c0\u6cc1\u800c\u53ef\u4ee5\u505a\u4e0d\u540c\u7684\u66ff\u63db"}),"\n",(0,t.jsx)(n.h3,{id:"bootstrap",children:"bootstrap"}),"\n",(0,t.jsxs)(n.p,{children:["\u555f\u52d5\u6642\u7684\u6839\u5143\u4ef6\uff0c\u6307\u5b9a\u7684\u5143\u4ef6\u6703\u5728\u7a0b\u5f0f\u555f\u52d5\u5f8c\uff0c\u66ff\u63db\u6389 index.html \u7684",(0,t.jsx)(n.code,{children:"<app-root>"})]}),"\n",(0,t.jsx)(n.h3,{id:"browsermodule--commonmodule",children:"BrowserModule & CommonModule"}),"\n",(0,t.jsxs)(n.p,{children:["BrowserModule \u63d0\u4f9b\u4e86\u555f\u52d5\u548c\u57f7\u884c\u700f\u89bd\u5668\u61c9\u7528\u6642\u5fc5\u9808\u7684\u670d\u52d9(\u4e5f\u5305\u542b CommonModule)\uff0c\u53ea\u9069\u7528\u65bc\u6839\u5143\u7d20\u3002",(0,t.jsx)("br",{}),"\nCommonModule \u5305\u542b\u901a\u7528\u6307\u4ee4(ngIf\u3001ngFor)"]}),"\n",(0,t.jsx)(n.h2,{id:"component",children:"@Component"}),"\n",(0,t.jsxs)(n.p,{children:["\u5229\u7528 Angular CLI \u5efa\u7acb ",(0,t.jsx)(n.code,{children:"Component"})," \u6642\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"*.component.ts"})," \u6703\u5ba3\u544a\u8a72 ",(0,t.jsx)(n.code,{children:"Component"})," \u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Component } from '@angular/core';\n@Component({\n  selector: 'app-custom',\n  templateUrl: './custom.component.html',\n  styleUrls: ['./custom.component.scss']\n})\n"})}),"\n",(0,t.jsx)(n.h3,{id:"selector",children:"selector"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5 ",(0,t.jsx)(n.code,{children:"CSS"})," \u7684\u9078\u64c7\u5668\u89c0\u5ff5\u53bb\u5b9a\u7fa9 ",(0,t.jsx)(n.code,{children:"selector"}),"\u3002\u9019\u908a\u4e5f\u53ef\u4ee5\u6539\u6210\u5176\u4ed6 CSS \u9078\u53d6\u5668\uff0c\u4f8b\u5982\uff1a ",(0,t.jsx)(n.code,{children:"[app-custom]"}),"\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u9810\u8a2d\u70ba ",(0,t.jsx)(n.code,{children:"app-*"})," \uff0c\u5982\u679c\u8981\u4fee\u6539\u524d\u7db4\u53ef\u4ee5\u7531 ",(0,t.jsx)(n.code,{children:"angular.json"})," \u7684 ",(0,t.jsx)(n.code,{children:'"prefix"'})," \u8a2d\u5b9a\u3002"]})}),"\n",(0,t.jsx)(n.h3,{id:"templateurl",children:"templateUrl"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u822c\u8a2d\u5b9a\u70ba\u9023\u81f3 ",(0,t.jsx)(n.code,{children:"HTML"}),"\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5c07 ",(0,t.jsx)(n.code,{children:"templateUrl"})," \u6539\u7528 ",(0,t.jsx)(n.code,{children:"template"}),"\uff0c\u4e26\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"JavaScript"})," \u7684\u5b57\u4e32\u6a21\u677f\u4f86\u5beb ",(0,t.jsx)(n.code,{children:"HTML"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"styleurls",children:"styleUrls"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"styleUrls"})," \u70ba\u4e00\u500b\u9663\u5217\u4f86\u505a\u5ba3\u544a\uff0c\u6545\u53ef\u4ee5\u5f15\u5165\u591a\u500b ",(0,t.jsx)(n.code,{children:"CSS"})," \u4f86\u7d66\u8a72 Component \u5957\u7528\u6a23\u5f0f\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"encapsulation",children:"encapsulation"}),"\n",(0,t.jsx)(n.p,{children:"\u8a2d\u7f6e Component \u7684\u5c01\u88dd\u6a21\u5f0f\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ViewEncapsulation.None"})," \uff1a\u4e0d\u6703\u5c0d Component \u9032\u884c\u5c01\u88dd\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ViewEncapsulation.Emulated"})," \uff1a\u9ed8\u8a8d\u7684\u5c01\u88dd\u6a21\u5f0f\uff0c\u53ea\u6703\u5c0d\u8a72 Component \u6709\u6548\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ViewEncapsulation.ShadowDom"})," \uff1a\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Web Components"})," \u7684 ",(0,t.jsx)(n.code,{children:"Shadow DOM"})," \u6280\u8853\uff0c\u7576\u7136\u524d\u63d0\u662f\u700f\u89bd\u5668\u8981\u652f\u63f4 ",(0,t.jsx)(n.code,{children:"Shadow DOM"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"standalone\u3001import \u70ba Angular 15 \u5f8c\u7684\u8a2d\u5b9a"})}),"\n",(0,t.jsx)(n.h3,{id:"standalone",children:"standalone"}),"\n",(0,t.jsx)(n.p,{children:"\u5c07 Component \u76f4\u63a5 export \u7d66\u5176\u4ed6 Component \u80fd\u5920\u4f7f\u7528\uff0c\u6e1b\u5c11\u5c0d\u65bc ngModule \u7684\u4f9d\u8cf4\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"import",children:"import"}),"\n",(0,t.jsx)(n.p,{children:"\u53ef import \u5176\u4ed6 Component \u4f86\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"input",children:"@Input"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5143\u4ef6\u5167\u7528 ",(0,t.jsx)(n.code,{children:"@Input"})," \u5b9a\u7fa9\u597d\u8b8a\u6578\uff0c\u7528\u4f86\u63a5\u6536\u7236\u5143\u4ef6\u7684\u8cc7\u6599\u3002\u56e0\u61c9\u5404\u7a2e\u4e0d\u540c\u7684\u9700\u6c42"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"child.component.ts",children:"export class ChildComponent {\n  @Input() fontSize: number = 16; // \u53ef\u4ee5\u7d66\u4e88\u9810\u8a2d\u503c\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:"parent.component.html",children:'<app-child [fontSize]="30"></app-child>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u53ef\u4ee5\u5229\u7528-getter-\u548c-setter-\u4f86\u8b93\u503c\u50b3\u5165\u6642\u53ef\u4ee5\u505a\u8655\u7406",children:"\u53ef\u4ee5\u5229\u7528 getter \u548c setter \u4f86\u8b93\u503c\u50b3\u5165\u6642\u53ef\u4ee5\u505a\u8655\u7406"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"child.component.ts",children:"export class ChildComponent {\n  private _fontSize: number = 16;\n  @Input()\n  set fontSize(value: number) {\n    this._fontSize = value;\n    console.log(`fonSize \u8a2d\u5b9a\u503c\u70ba ${value}`);\n  }\n  get fontSize(): number {\n    return this._fontSize;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"attribute",children:"@Attribute"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5b50\u5143\u4ef6\u9700\u8981\u5f9e\u7236\u5c64\u8a2d\u5b9a\u5c6c\u6027\u503c\uff0c\u9664\u4e86 @Input \u4e4b\u5916\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 @Attribute \u4f86\u63a5\u6536\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"child.component.ts",children:'export class ChildComponent {\n  constructor(@Attribute("fontSize") fontSize: number) {\n    this.fontSize = fontSize || 16; // \u53ef\u4ee5\u7d66\u4e88\u9810\u8a2d\u503c\n  }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:"parent.component.html",children:'<app-child fontSize="30"></app-child>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"@Output"}),"\n",(0,t.jsx)(n.p,{children:"\u5b50\u5143\u4ef6\u53ef\u4ee5\u900f\u904e @Output \u81ea\u5b9a\u7fa9\uff0c\u4f86\u8b93\u8cc7\u6599\u50b3\u905e\u5230 \u7236\u5143\u4ef6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"child.component.ts",children:"export class ChildComponent {\n  @Output() sizeChange = new EventEmmiter<number>();\n\n  sizeChangeHandler(value: number) {\n    this.size = value;\n    this.sizeChange.emit(this.size); // \u767c\u51fa\u8a0a\u865f\n  }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:"parent.component.html",children:'\x3c!-- \u7576\u5b50\u5143\u4ef6 emit \u8a0a\u865f\u6642\u89f8\u767c\uff0c$event \u70ba\u5b50\u5143\u4ef6 emit \u7684 this.size --\x3e\n<app-child (sizeChange)="onChildSizeChange($event)"></app-child>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"parent.component.ts",children:"export class ParentComponent {\n  onChildSizeChange(value: number) {\n    console.log(value);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.udemy.com/course/angular-zero/",children:"Angular \u958b\u767c\u5be6\u6230\uff1a\u5f9e\u96f6\u958b\u59cb"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.tenlong.com.tw/products/9789864349821",children:"\u5716\u50cf Angular \u958b\u767c\u5165\u9580\uff1a\u6253\u9020\u9ad8\u9748\u6d3b\u5ea6\u7684\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f (iT\u90a6\u5e6b\u5fd9\u9435\u4eba\u8cfd\u7cfb\u5217\u66f8)"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var t=o(6540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);