---
sidebar_position: 20
sidebar_label: SKILLS
---

# SKILLs

平常開發使用的 skills

## 管理套件 - vercel-labs/skills

使用套件統一管理，又可以不定期 update skills。

> - [GitHub repository](https://github.com/vercel-labs/skills)
> - [skill.sh](https://www.skills.sh/)

可以依照指引直接使用。又或者可以安裝至本機內，利用 `skills` 指令執行。

```shell
$ npm i skills -g
```

:::note
如果全域安裝，目前版本無法連結到 Antigravity CLI 抓到 skill，<br />原因為 gemini 沒有去讀 .agnes 資料夾，故需要執行複製的動作。

```shell
$ cp -r ~/.claude/skills/. ~/.gemini/antigravity-cli/skills/
```

:::

## SKILLS

使用上除了直接使用 slash command 外，也可以透過一些關鍵字，會觸發 agent 抓取對應的 skill 做使用

### 文件處理

#### anthropics/skills/skill-creator

> - [GitHub repository](https://github.com/anthropics/skills/tree/main/skills/skill-creator)

為建立 skill 文件而使用的 skill，可產出標準化的 skill

```shell
$ 我想建立一個關於專屬於此 CMS JSON Schema 產生的 skill，核心規則是...
```

### vercel-labs/skills/find-skills

> - [GitHub repository](https://github.com/vercel-labs/skills/tree/main/skills/find-skills)

透過 skills.sh 搜尋的 skills

```shell
$ 幫我找尋 Nx Monorepo 的相關 skills
```

### 前端開發

#### nextlevelbuilder/ui-ux-pro-max-skill

前端設計與 UI/UX 的審查工具，集結目前設計和操作面的規則

> - [GitHub repository](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

任何會改變「看起來如何、感覺如何、如何互動」的任務，都應該啟用此 Skill。

```shell
# 建立新頁面 / 產品
$ 幫我設計一個 SaaS 訂閱管理 Dashboard，用 Next.js 實作
$ 建立一個電商首頁 Landing Page，風格要有 glassmorphism 質感
$ 設計一個 Admin Panel，需要有側邊欄、數據表格和圖表

# 建立 / 重構 UI 元件
$ 幫我建一個符合 WCAG 2.2 AA 標準的 Modal 元件
$ 重構這個 Form 元件，讓錯誤提示更清楚、支援行動裝置
$ 設計一套 Button 元件系統，包含 primary/secondary/danger 狀態

# 選色 / 字型 / 版型
$ 這個 Health App 適合用什麼設計風格和主色調？
$ 我的產品是 FinTech 應用，推薦合適的色彩搭配和字型組合
$ 幫我建立一套 Design Token，支援深色模式切換

# UI 審查 / 品質優化

$ 幫我 review 這個頁面的 UX 問題，找出反設計模式
$ 這個介面「感覺不夠專業」，幫我找出原因並修正
$ 上線前幫我做一次完整的 UI 品質審查 checklist

# 圖表 / 資料視覺化
$ 我有銷售趨勢資料，幫我選最適合的圖表類型並實作
$ 這個圖表在色盲使用者下辨識度不夠，幫我修正

# 跨平台對齊
$ 幫我確認這個 React Native App 的導覽結構是否符合 iOS HIG 規範
$ 建立一套在 Web 和 Mobile 都能運作的 Design System
```

#### angular/skills

angular 相關元件使用規範，利用 angular 的一些關鍵字可以觸發該 skill

- Components
- Inputs / Outputs
- Signals / 狀態管理
- Forms
- Dependency Injection
- Routing
- Styling / Animations
- Accessibility (ARIA)
- Testing
- Tooling / CLI

```shell
$ 幫我建立一個叫  tool-card  的 standalone 元件，接受  title  和  description  兩個 input
$ 幫我做一個登入表單
$ 新增一個 base64 encoder 工具的 lazy route
```

### 動態設計與動畫

#### lottiefiles/motion-design-skill

### 後端開發

#### Kadajett/agent-nestjs-skills

### 架構層級

#### giuseppe-trisciuoglio/developer-kit@nx-monorepo

## 自動化測試

#### microsoft/playwright-cli

### 工作流與開發思維

#### andrej-karpathy-skills/skills/karpathy-guidelines

#### juliusbrussee/caveman
