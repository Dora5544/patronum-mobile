import React from "react"
import './App.css';
import { Logon } from "./Logon.js"
import { LocationList } from "./List.js"
// 使用路由跳转页面
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* 初始页面显示在list列表页面 */}
      <Route path="/" exact component={LocationList} />
      {/* 跳转到登录页面 */}
      <Route path="/logon" exact component={Logon} />
    </Router>
  );
}

export default App;
