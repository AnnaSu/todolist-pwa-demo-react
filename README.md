# todolist 的 PWA 實作範例

## 環境建置

1. 透過 [json-server](https://github.com/typicode/json-server) 來新增 DEMO 用的 API，模擬實際專案會使用 REST API 的情境。

2. 安裝 [http-server](https://github.com/indexzero/http-server) 來快速建置 server 環境，將網站跑起來。

3. 藉由 [concurrently](https://github.com/kimmobrunfeldt/concurrently)，能夠同時跑多個 commands，例如：`concurrently --kill-others 'http-server' 'json-server --watch db.json'`

4. 新增 index.html 的網頁，執行 Javascript ，fetch API 並將資料印出來。

[相關文章](http://ithelp.ithome.com.tw/articles/10187889)
