# PWA To-Do List with React/Redux

## Intro

1. 透過 [json-server](https://github.com/typicode/json-server) 來新增 DEMO 用的 API，模擬實際專案會使用 REST API 的情境。

2. 安裝 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 來快速建置 server 環境，將網站跑起來。

3. 藉由 [concurrently](https://github.com/kimmobrunfeldt/concurrently)，能夠同時跑多個 commands，例如：`concurrently --kill-others 'webpack-dev-server --port 8000' 'json-server --watch db.json'`


**To-Do List 實作 PWA** 相關文章：

- [環境建置 ( json-server、webpack-dev-server、concurrently )](http://ithelp.ithome.com.tw/articles/10188808)
- [搭配 React + Redux](http://ithelp.ithome.com.tw/articles/10188877)
- [搭配 React + Redux 並加入 Service Worker](http://ithelp.ithome.com.tw/articles/10188929)

***

## Install

```
git clone https://github.com/AnnaSu/todolist-pwa-demo-react.git
cd todolist-pwa-demo-react
npm install
```

***

## Run

```
npm start
```
