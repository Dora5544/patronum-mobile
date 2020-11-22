import React from "react"
import { LocationList } from "./List"

class BootPage extends React.Component {


    componentDidMount = () => {
        // 使用get从后台获取数据
    }

    render = () => {
        return <>
            <LocationList></LocationList>
        </>
    }
}

export { BootPage }