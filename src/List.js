import React from "react"
import { List} from 'antd-mobile';
import axios from "axios";


class LocationList extends React.Component {
    // 将位置列表保存在state,初始值为空
    state = {
        locations:[]

    }

    componentDidMount = () => {
        // 判断本地是否存有用户名和密码，如果没有，就跳转到登录页面进行登录
        if (localStorage.getItem("username") === null && localStorage.getItem("userpassword") === null) {
            window.location.href = "/patronum/#/logon"
        }
        // 使用get从后台获取数据
        axios.get("https://happyyuwei.xyz:17615/rest/observer/location/all", {
            // 将token放在header里面
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            // 请求成功，获取到数据
            .then((response)=> {
                // data是一个数组里面嵌套对象的形式
                let data = response.data;
                console.log(data)
                // 当从后台获取到数据，将数据放到状态location李敏
                this.setState({
                    locations:data,
                })
            })
            // 请求失败，打印出error
            .catch((error)=> {
                console.log(error)
            })
    }
    render = () => {
        let itemList = [];
        for (let i = 0; i < this.state.locations.length; i++) {
            let li = <div className="content" key={Math.random()}>
                {/* 左边图片 */}
                <div className="img"><img src={"https://happyyuwei.xyz:17615/rest/resource/image/"+this.state.locations[i].avatar} with="100%" height="100%"></img></div>
                {/* 右边nickName和address */}
                <div className="name-address" >
                    <div className="nickname">
                        <div className="nickname">{this.state.locations[i].nickName}</div>
                    </div>
                    <div className="address">
                        <div className="">{this.state.locations[i].ad + "," + this.state.locations[i].loc}</div>
                    </div>
                </div>
            </div>
            itemList.push(li)
        }
        return (

            <List renderHeader={() => '我关心的人'} >
                {itemList}
            </List>
        )
    }
}

export { LocationList }