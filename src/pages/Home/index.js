import React, {Component} from "react"
import { PageHeader,Button } from 'antd';
import ContactList from "../ContactList";
import {connect} from "react-redux";
import AddNew from "../AddNew";
import {SWITCH_DISPLAY} from "../../store/consts";


class Home extends Component{

    switchDisplay=()=>{
        const {display} =this.props.display
            if (display==="home"){
                return (
                    <ContactList/>)
            }else{
                return <AddNew/>
            }
    }

    switchDisplay2=()=>{
        this.props.setDisplay('addNew')
    }


    render() {
        return <div>
            <PageHeader
                className="site-page-header"
                title="Contact"
                extra={[
                    <Button onClick={this.switchDisplay2}>Add New</Button>,
                ]}
            >
            </PageHeader>
            {this.switchDisplay()}
        </div>
    }

}

const mapProps=(state)=>{
    return {display:state.display}
}
const mapDispatch=(dispatch)=>{
    return {setDisplay:display=>{dispatch({type:SWITCH_DISPLAY,payload:display})}}
}


export default connect(mapProps,mapDispatch)(Home)