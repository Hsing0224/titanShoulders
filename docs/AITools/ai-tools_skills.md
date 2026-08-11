---
sidebar_position: 20
sidebar_label: SKILLS
---

# SKILLs

平常開發使用的 skills

## 管理套件工具

### vercel-labs/skills

使用套件統一管理，又可以不定期 update skills。<br />
依照指引直接使用。又或者可以安裝至本機內，利用 `skills` 指令執行。

```shell
$ npm i skills -g
```

:::note
如果全域安裝，目前版本無法連結到 Antigravity CLI 抓到 skill，<br />原因為 gemini 沒有去讀 .agents 資料夾，故需要執行複製的動作。

```shell
$ cp -r ~/.claude/skills/. ~/.gemini/antigravity-cli/skills/
```

:::

#### commands

- find: 透過工具來搜尋符合關鍵字的 skill
- add: 安裝指定的 skill
- list: 列出已安裝的 skill
- update: 更新所有 skill
- remove: 移除指定的 skill

#### reference

> - [GitHub repository](https://github.com/vercel-labs/skills)
> - [skill.sh](https://www.skills.sh/)

## 文件處理類 SKILLs

使用上除了直接使用 slash command 外，也可以透過一些關鍵字，會觸發 agent 抓取對應的 skill 做使用

### anthropics/skills/skill-creator

為建立 skill 文件而使用的 skill，可產出標準化的 skill

#### 安裝

```shell
$ skills add anthropics/skills@skill-creator -g
```

#### 觸發指令

```shell
$ /skill-creator 我想建立一個關於專屬於此 CMS JSON Schema 產生的 skill，核心規則是...
```

#### reference

> - [GitHub repository](https://github.com/anthropics/skills/tree/main/skills/skill-creator)

### vercel-labs/skills/find-skills

搜尋合適的 skills，且會給予建議和印出安裝指令

#### 安裝

```shell
$ skills add vercel-labs/skills@find-skills -g
```

#### 觸發指令

```shell
$ 幫我尋找符合這專案的 skills
$ /find-skills 幫我尋找符合這專案的 skills
```

#### reference

> - [GitHub repository](https://github.com/vercel-labs/skills/tree/main/skills/find-skills)

## 前端開發類 SKILLs

### nextlevelbuilder/ui-ux-pro-max-skill

前端設計與 UI/UX 的審查工具，集結目前設計和操作面的規則

#### 安裝

```shell
$ skills add nextlevelbuilder/ui-ux-pro-max-skill@ui-ux-pro-max -g
```

#### 觸發指令

```shell
$ /ui-ux-pro-max 設計一個 Admin Panel，需要有側邊欄、數據表格和圖表
$ 建立 Design Token # design system
$ 風格與主色調推薦 # ui-style
$ 建立 Modal/Button/Form 元件 # component-build
$ WCAG 2.2 AA 無障礙檢核 # a11y-audit
$ 頁面 UX 反模式檢查 # ux-review
$ 圖表類型選型 # chart-guide
```

#### reference

> - [GitHub repository](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

### angular/skills

官方 skill，結合了現代化開發和新專案初始化技能

#### 安裝

```shell
$ skills add https://github.com/angular/skills -g
```

#### 觸發指令

```shell
$ /angular-developer # 建立 angular 相關 core、component
$ /angular-new-app # 初始化設定
```

#### reference

> - [GitHub repository](https://github.com/angular/skills)

## 動態設計與動畫類 SKILLs

### lottiefiles/motion-design-skill

官方 skill

#### 安裝

```shell
$ skills add lottiefiles/motion-design-skill -g
```

#### 觸發指令

```shell
$ /motion-design
```

依照描述會啟用自身所帶模組來實作

#### reference

- [GitHub repository](https://github.com/LottieFiles/motion-design-skill)

## 後端開發類 SKILLs

### Kadajett/agent-nestjs-skills

提供 NestJS 的最佳實踐規則，讓 agent 遵循規範開發。

#### 安裝

```shell
$ skills add kadajett/agent-nestjs-skills -g
```

#### 觸發指令

```shell
$ /nestjs-best-practices
```

#### reference

> - [GitHub repository](https://github.com/Kadajett/agent-nestjs-skills)

## 自動化測試類 SKILLs

### microsoft/playwright-cli

使用已安裝的 playwright-cli

#### 安裝

```shell
$ skills add microsoft/playwright-cli -g
```

#### 觸發指令

```shell
$ /playwright-cli
```

#### reference

> - [GitHub repository](https://github.com/microsoft/playwright-cli)

## 工作流與開發思維類 SKILLs

### andrej-karpathy-skills/skills/karpathy-guidelines

為 agent 提供一份指南，使 agent 能夠依照文件提供的流程開發

#### 安裝

```shell
$ skills add https://github.com/multica-ai/andrej-karpathy-skills -g
```

#### 觸發指令

```shell
$ /karpathy-guidelines
```

#### reference

> - [GitHub repository](https://github.com/multica-ai/andrej-karpathy-skills)

### juliusbrussee/caveman

壓縮輸入與輸出 token

#### 安裝

```shell
$ skills add juliusbrussee/caveman -g
```

#### 觸發指令

```shell
# 核心極簡對話
$ caveman mode
$ /caveman
$ /caveman full # 預設
$ /caveman lite # 輕量精簡
$ /caveman ultra # 極致精簡
$ /caveman wenyan # 文言文
$ /caveman wenyan-lite # 極致精簡文言文
$ /caveman wenyan-ultra # 極致精簡文言文

# 子任務分工指引
$ /cavecrew

# 說明檔壓縮(AGENTS.md/CLAUDE.md)
$ /caveman-compress

# 極簡 commit message
$ /caveman-commit

# 精準 code review
$ /caveman-review

# 檢視 /usage
$ /caveman-stats

# caveman 的說明選單
$ /caveman-help
```

#### reference

> - [GitHub repository](https://github.com/JuliusBrussee/caveman)
