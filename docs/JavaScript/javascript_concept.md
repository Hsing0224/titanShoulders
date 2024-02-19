---
sidebar_position: 1
description: 關於JS的那些觀念
---

# JavaScript的那些觀念

## 立即函式(Immediately-Invoked Function Expression, IIFE)
```javascript
(function(){

})();
```

## 函式陳述式
```javascript
function fn() {};
```
## 函式表達式
```javascript
const fn = function() {};
```

## 作用域控制
```javascript
// 因為block({})的關係，a不會互相影響到
{
	const a = 1;
}
{
	const a = 2;
}
```

## 連續賦值
```javascript
const obj = {
	value: 1
};
Object.defineProperty(obj, 'value', {
	writable: false
});
const b = obj.value = 3;
/*
等號運算子會回傳一個結果
> obj.value = 3，雖然obj.value不會被覆寫，但等號運算子會回傳3，3再賦值給b，所以b=3
*/
```
:::danger
並不推薦使用連續賦值
:::

## 運算子優先順序
```javascript
const a = 1 + 2 * 3;
/*
1. 2 * 3
2. 1 + 6
3. 由右至左賦予a
*/

console.log(1 > 2 > 3); // false
/*
1. 1 > 2 = false
2. false > 3 = false
*/

console.log(3 < 2 < 1); // true
/*
1. 3 < 2 = false
2. false(轉型為0) < 1 = true
*/
```

## Event loop (事件循環)
[用網站看看 Event Loop 的流程視覺化做動](http://latentflip.com/loupe/)<br />
![Event Loop 視覺化圖片](./img/concept_event-loop-view.jpg)

### 各作用解釋
#### 單一執行緒 (single-threaded)
`JavaScript` 是單一執行緒，顧名思義就是一個時間點只能做一件事。

#### 堆疊 (Stack)
1. 後進先出 (Last In, First Out，LIFO)
2. 每次呼叫一個函式，該函式會被堆疊到最頂端；當執行完畢時，該函式會從堆疊中移出。

#### Web APIs
當 `Web APIs` 有事件完成後，則會將 frame 移至 `Queue` 等待 `Event loop` 呼叫。<br />
主要任務有：
1. 發送網路請求 (XMLHttpRequest)
2. 計時器 (Timer) 
3. 事件處理 (Event Listener)

#### 佇列 (Queue)
1. 先進先出 (First In, First Out，FIFO)
2. 管理非同步任務。例如： setTimeout 、 ajax

前面有提到，當 `Stack` 沒有 frame 時， `Event loop` 會從 `Queue` 的 frame 移至 `Stack` 執行。<br />
由此我們知道，例如當 Web APIs 在 `setTimeout` 所設定的秒數後，將其內容放入 `Queue`。不是秒數到就**立即執行**，而是**即將被執行**

#### 阻塞 (blocking)
阻塞通常發生在**同步**的操作上。<br />
當 `JavaScript Runtime` 時，會執行在 `Stack` 裡的程式碼片段。<br />
而萬一程式碼片段執行時間過久，其他任務無法被執行，進而造成瀏覽器停止渲染，使用者感受到卡頓或凍結。造成瀏覽體驗不佳。

### 工作描述
當頁面載入，瀏覽器的 `JavaScript` 引擎會依照撰寫的程式碼，由上到下依序執行下來。<br />
一個程式碼片段視為一個 frame，會先放入 `Call Stack` 做執行。<br />
當 `Stack` 遇到像是 `XMLHttpRequest`、`Timer`、`Event Listener`，這些 frame 會從 `Stack` 先移到 `Web APIs` ，並繼續執行 `Stack` 裡的程式碼片段。<br />
萬一有 frame 在 `Stack` 裡因程式碼邏輯導致執行過久，則會造成 `blocking` 。<br />
**當 `Stack` 清空後， `Event loop` 會將 `Web APIs` 處理完，放入 `Queue` 的 frame 移至 `Stack` 裡去執行**。<br />
**直到 `Stack` 和 `Queue` 都為空**。

### 範例
```javascript
console.log('Start');

function blockForAWhile() {
	const startTime = new Date().getTime();
	while (new Date().getTime() - startTime < 5000) {}
}

document.querySelector('button').addEventListener('click', function onClick(){
	setTimeout(function(){
		console.log('button click');
	}, 1000);
});

blockForAWhile();
// 執行 blockForAWhile() 時，按下 button

setTimeout(function setTimeout2s(){
	console.log('setTimeout 2s');
}, 2000);

setTimeout(function setTimeoutZero() {
	console.log('setTimeout 0');
}, 0);

console.log('End');

/* 最後輸出的 log
Start
End
setTimeout 0
button click
setTimeout 2s
*/
```

#### 圖解
1. 印出 Start
![印出 Start](./img/concept_event-loop-flow_1.png)<br />
2. button 監聽事件轉交 Web APIs
![button 監聽事件轉交 Web APIs](./img/concept_event-loop-flow_2.png)<br />
3. 執行 blockForWhile()
![執行 blockForWhile()](./img/concept_event-loop-flow_3.png)<br />
4. 模擬 blocking，並按下 button 觸發事件
![模擬 blocking，並按下 button 觸發事件](./img/concept_event-loop-flow_4.png)<br />
5. 遇到 setTimeout，轉交 Web APIs
![遇到 setTimeout，轉交 Web APIs](./img/concept_event-loop-flow_5.png)<br />
6. 模擬遇到秒數為 0 的 setTimeout
![模擬遇到秒數為 0 的 setTimeout](./img/concept_event-loop-flow_6.png)<br />
7. 印出 End
![印出 End](./img/concept_event-loop-flow_7.png)<br />
8. Stack 無 frame，從 Queue 拿 frame 來執行
![Stack 無 frame，從 Queue 拿 frame 來執行](./img/concept_event-loop-flow_8.png)<br />
9. setTimeout 跑完丟到 Queue，再被 Event Loop 拉至 Stack 執行
![setTimeout 跑完丟到 Queue，再被 Event Loop 拉至 Stack 執行](./img/concept_event-loop-flow_9.png)
![setTimeout 跑完丟到 Queue，再被 Event Loop 拉至 Stack 執行](./img/concept_event-loop-flow_10.png)
![setTimeout 跑完丟到 Queue，再被 Event Loop 拉至 Stack 執行](./img/concept_event-loop-flow_11.png)

## Reference
> [六角學院 - JavaScript 心機文法篇 - JS 面試常見核心知識](https://www.youtube.com/watch?v=8U5kbb1SvJg)<br />
> [MDN - 語句和聲明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)<br />
> [MDN - 運算子優先順序](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)<br />
> [loupe - event loop](http://latentflip.com/loupe/)<br />
> [JavaScript Event Loop](https://www.javascripttutorial.net/javascript-event-loop/)