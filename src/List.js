import React from "react"
import axios from "axios";


class LocationList extends React.Component {
    // 将位置列表保存在state,初始值为空
    state = {
        loading: true,
        locations: []

    }

    componentDidMount = () => {
        // 判断本地是否存有用户名和密码，如果没有，就跳转到登录页面进行登录
        if (localStorage.getItem("username") === null || localStorage.getItem("userpassword") === null || localStorage.getItem("token") === null) {
            window.location.href = "/patronum/#/logon"
        } else {
            // 使用get从后台获取数据
            axios.get("https://happyyuwei.xyz:17615/rest/observer/location/all", {
                // 将token放在header里面
                headers: {
                    "token": localStorage.getItem("token")
                }
            })
                // 请求成功，获取到数据
                .then((response) => {
                    // data是一个数组里面嵌套对象的形式
                    let data = response.data;
                    console.log(data)
                    // 当从后台获取到数据，将数据放到状态location李敏
                    this.setState({
                        loading: false,
                        locations: data,
                    })
                })
                // 请求失败，打印出error
                .catch((error) => {
                    console.log(error)
                    alert("连接服务器错误")
                })
        }
    }

    logout = () => {
        localStorage.removeItem("token")
        window.location.href = "/patronum/#/logon"
    }

    /**
     * 将时间格式化成 HH:mm， 如果是昨天，则使用昨天；如果是更早时间，仅仅显示日期、
     * @param {} time 
     */
    formatTime = (time) => {
        let year = parseInt(time.split(" ")[0].split("-")[0])
        let month = parseInt(time.split(" ")[0].split("-")[1])
        let day = parseInt(time.split(" ")[0].split("-")[2])


        let totalDay = year * 365 + month * 12 + day

        let hour = time.split(" ")[1].split(":")[0]
        let minute = time.split(" ")[1].split(":")[1]

        // calculate today
        let today = new Date()

        let todayYear = today.getFullYear()
        let todayMonth = today.getMonth() + 1
        let todayDay = today.getDate()


        today = todayYear * 365 + todayMonth * 12 + todayDay

        if (today === totalDay) {
            return hour + ":" + minute
        } else if ((today - totalDay) === 1) {
            return "昨天"
        } else {
            return year + "-" + month + "-" + day
        }
    }

    render = () => {

        let detailBody = <div className="list-loading">
            加载中...
            </div>

        if (this.state.loading === false) {
            let itemList = [];
            for (let i = 0; i < this.state.locations.length; i++) {
                let li = <div className="list-item" key={Math.random()}>
                    {/* 左边图片 */}
                    <div className="img"><img src={"https://happyyuwei.xyz:17615/rest/resource/image/" + this.state.locations[i].avatar} with="90%" height="90%" style={{ borderRadius: 10 }} alt="not found"></img></div>
                    {/* 右边nickName和address */}
                    <div className="name-address" >
                        <div className="name-time">
                            <div className="nickname">{this.state.locations[i].nickName}</div>
                            <div className="location-time">{this.formatTime(this.state.locations[i].time)}</div>
                        </div>
                        <div className="address">
                            <div className="">{this.state.locations[i].ad + "," + this.state.locations[i].loc}</div>
                        </div>
                    </div>
                </div>
                itemList.push(li)
                detailBody = itemList
            }
        }
        return (
            <div className="list-background">
                <div style={{ width: "90vw" }}>
                    <div className="list-title-container">
                        <div className="list-title">
                            我关心的人
                        </div>
                    </div>
                    <div>
                        {detailBody}
                    </div>
                    <div className="list-footer" onClick={this.logout}>
                        退出当前账户
                    </div>
                </div>
            </div>
        )

    }
}

export { LocationList }