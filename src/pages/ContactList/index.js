import React, {Component} from "react"
import {List, Button, Input} from 'antd';
import {connect} from "react-redux";
import {getContactList,getContact} from "../../api";
import {SET_CONTACT_LIST, SWITCH_DISPLAY,SET_CONTACT_EDIT} from "../../store/consts";
import "./contactList.css"
import {SearchOutlined} from "@ant-design/icons";




class ContactList extends Component{

    state = {contactList:[],contactToEdit:{}, filteredContactList:[]}

    editContact=(id)=>{
        return async ()=>{
            const res= await getContact(id)
            this.props.setEditContact(res.data.data[0])
            this.props.setDisplay("addNew")

        }
    }

    async componentDidMount() {
        const res = await getContactList()
        this.setState({contactList:res.data.data})
        this.setState({filteredContactList:res.data.data})
        await this.props.setContactList(res.data.data)
    }



    handleSearch=(e)=>{
        let keyword = e.target.value.toLowerCase()
        const {contactList} = this.state
        const contactListClone = contactList.slice()
        let filteredContactList =[]
        if (keyword.trim()){
            contactListClone.forEach(contact=>{
                let nameStr = contact.first_name+contact.last_name
                if(nameStr.toLowerCase().indexOf(keyword)>-1){
                    filteredContactList.push(contact)
                }
            })
            this.setState({filteredContactList:filteredContactList})
        }else{
            this.setState({filteredContactList:contactList})
        }







    }


    render() {
      const {filteredContactList} = this.state
        return <div className="contactList">
            <Input placeholder="Search Contact" onChange={this.handleSearch} prefix={<SearchOutlined/>} />
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={filteredContactList}
                renderItem={item => (
                    <List.Item key={item.id} actions={[<Button onClick={this.editContact(item.id)} key={item.id}>edit</Button>]}>
                            <List.Item.Meta
                                title={item.first_name+" "+item.last_name}
                            />
                    </List.Item>
                )}
            />
        </div>
    }

}

const mapDispatch =(dispatch)=>{
    return {
        setContactList:(contactList)=>{dispatch({type:SET_CONTACT_LIST,payload:contactList})},
        setDisplay:display=>{dispatch({type:SWITCH_DISPLAY,payload:display})},
        setEditContact:contact=>dispatch({type:SET_CONTACT_EDIT,payload:contact})

    }
}

const mapProps =(state)=>{
    return {data:state.dataList}
}

export default connect(mapProps,mapDispatch)(ContactList)