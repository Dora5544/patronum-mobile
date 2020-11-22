import React from "react";
import 'antd-mobile/dist/antd-mobile.css';
import { Button, InputItem, WhiteSpace, WingBlank} from 'antd-mobile';
import axios from "axios";


class Logon extends React.Component{
    // 保存用户名和密码
    state={
        // 将保存在本地的用户名和密码放在状态值，页面渲染时自动加载用户名和密码
        user:localStorage.getItem("username"),
        password:localStorage.getItem("userpassword")
    }
    // 获取输入框内输入的用户名
    inputuserChange=(user)=>{
        this.setState({
            user:user,
        })
    }
    // 获取输入框输入的密码
    inputpasswordChange=(password)=>{
        this.setState({
            password:password,
        })
    }
    //点击登录按钮进行登录
    clickAlert=(e)=>{
        // 首先获取用户名和密码
        let username=this.state.user;
        let userpassword=this.state.password;
        // 使用ajax的封装库axios与后台进行异步通讯
        axios.post("https://happyyuwei.xyz:17615/rest/auth/login",{
            "userId":username,
            "password":userpassword,
        })
        .then(function(response){
            // 请求成功，保存返回数据
            let data=response.data;
            console.log(data);
            // 将用户名密码保存在本地
            localStorage.setItem("username",username);
            localStorage.setItem("userpassword",userpassword);
            localStorage.setItem("token",data.token)
            window.location.href="/#/list"

        })
        .catch(function(error){
            // 登录失败，输出错误
            console.log(error)
         });
        
    }
    render=()=>{
        return(
            <div className="logon">
                {/* 左右留白 */}
                <WingBlank size="lg">
                {/* 标题 */}
                <div className="title">patronum-mobile</div>
                {/* 上下空白 */}
                <WhiteSpace size="lg"></WhiteSpace>
                <WhiteSpace size="lg"></WhiteSpace>
                {/* 输入用户名框 */}
                <InputItem placeholder="请输入用户名" value={this.state.user} onChange={this.inputuserChange}> <div style={{ backgroundImage: 'url(./user.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /></InputItem>
                {/* 输入密码框 */}
                <InputItem type="password" placeholder="请输入密码" value={this.state.password} onChange={this.inputpasswordChange}><div style={{ backgroundImage: 'url(./unlock.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /></InputItem>
                <WhiteSpace size="lg"></WhiteSpace>
                {/* 登录按钮 */}
                <Button type="primary" onClick={this.clickAlert}>登录</Button>
                </WingBlank>
            </div>
        )
    }

} 

export {Logon}