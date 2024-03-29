---
sidebar_position: 3
description: Decorator
---

# Decorator (裝飾器)
`Angular` 用來定義 `Class` 的各種設定

## @ngModule

當建好一個 angular app，其最主要的 `app.module` 檔案預設配置是這樣。<br />
或是將 `Component` 封裝成 `Module` 時， `*.module.ts` 會有對應的設定。

```typescript app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```typescript custom.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';

@NgModule({
  declarations: [CustomComponent],
  imports: [CommonModule],
  exports: [],
})
export class CustomModule {}
```

### declarations

屬於該模組的一組元件(components)、命令(directives)或管道(pipes)。<br />
在 Angular 裡，都需要宣告在特定且唯一的模組內。這個屬性是用來定義該模組內擁有的元件清單

### imports

把其他模組匯入至該模組使用

### exports

定義模組內哪些元件可以對外公開給其他模組使用。<br />
另外也可以指定其他模組，當匯入該模組時，也可以使用此屬性指定的元件

### providers

定義模組內的各種令牌(token)，也方便模組依照不同狀況而可以做不同的替換

### bootstrap

啟動時的根元件，指定的元件會在程式啟動後，替換掉 index.html 的`<app-root>`

### BrowserModule & CommonModule

BrowserModule 提供了啟動和執行瀏覽器應用時必須的服務(也包含 CommonModule)，只適用於根元素。<br />
CommonModule 包含通用指令(ngIf、ngFor)


## @Component

利用 Angular CLI 建立 `Component` 時，在 `*.component.ts` 會宣告該 `Component` 的配置。

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
```

### selector
以 `CSS` 的選擇器觀念去定義 `selector`。這邊也可以改成其他 CSS 選取器，例如： `[app-custom]`。

:::note
預設為 `app-*` ，如果要修改前綴可以由 `angular.json` 的 `"prefix"` 設定。
:::

### templateUrl
一般設定為連至 `HTML`，但也可以將 `templateUrl` 改用 `template`，並使用 `JavaScript` 的字串模板來寫 `HTML`。

### styleUrls
`styleUrls` 為一個陣列來做宣告，故可以引入多個 `CSS` 來給該 Component 套用樣式。

### encapsulation
設置 Component 的封裝模式。

- `ViewEncapsulation.None` ：不會對 Component 進行封裝。
- `ViewEncapsulation.Emulated` ：默認的封裝模式，只會對該 Component 有效。
- `ViewEncapsulation.ShadowDom` ：使用 `Web Components` 的 `Shadow DOM` 技術，當然前提是瀏覽器要支援 `Shadow DOM`。

## Reference

> [Angular 開發實戰：從零開始](https://www.udemy.com/course/angular-zero/) 