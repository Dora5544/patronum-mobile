import React from "react"
import { LocationList } from "./List"

class BootPage extends React.Component {


    componentDidMount = () => {

        //wait three minutes and then move to list
        setTimeout(() => {
            window.location.href="/patronum/#/list"
        }, 3000)
    }

    render = () => {
        return <div className="boot-background">
            <div className="boot-title">
                PATRONUM
            </div>
            <div className="boot-subtitle">
                网页版
            </div>
            <div className="boot-detail">
                @丁小小茹 @蝙蝙蝠侠 作品
            </div>
        </div>
    }
}

export { BootPage }