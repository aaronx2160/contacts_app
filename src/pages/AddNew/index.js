import React, {Component} from "react"
import "./addNew.css"
import {PageHeader,Button} from "antd";
import {connect} from "react-redux";
import {addNewContact,deleteContactById} from "../../api";
import {SET_CONTACT_EDIT, SWITCH_DISPLAY} from "../../store/consts";


class AddNew extends Component{

    componentDidMount() {
        console.log(this.props.contact)
    }

    handleSubmit = async (event)=>{
        console.log(1)
        event.preventDefault()
        const data ={}
        data.first_name = event.target[0].value
        data.last_name = event.target[1].value
        data.email = event.target[2].value
        data.phone = event.target[3].value

        const {contact} =this.props
        console.log(contact.id)
        if (contact.id){
            console.log(2)
            Object.assign(contact,data)
            await addNewContact(contact)
            this.props.setDisplay("home")
        }else{
            console.log(3)
            console.log(data)
            await addNewContact(data)
            this.props.setDisplay("home")
        }
    }

    deleteContact=(id)=>{
        return async ()=>{
            await deleteContactById(id)
            this.props.setDisplay("home")
        }
    }
    goback=()=>{
        this.props.setDisplay("home")
    }

    componentWillUnmount() {
        this.props.setEditContact({})
    }

    render() {
        const {contact} = this.props
        return <div className="AddNew">

            <PageHeader
                className="site-page-header"
                onBack={this.goback}
                subTitle="Add New Contact"
            >
            </PageHeader>
           <form className="form" onSubmit={this.handleSubmit}>
               <div className="form-item">
                   <label>First Name:
                       <input
                       type="text"
                       name="first_name"
                       placeholder="First name"
                       value={contact.first_name} required/></label>
               </div>

               <div className="form-item">
                   <label>Last Name: <input type="text" name="Last_name" placeholder="Last name" value={contact.last_name} required/></label>
               </div>

               <div className="form-item">
                   <label>Email: <input type="email" name="Email" placeholder="Email" value={contact.email} /></label>
               </div>

               <div className="form-item">
                   <label>Phone:<input type="text" name="phone" placeholder="Phone number" value={contact.phone} required/></label>
               </div>

               <div className="form-item">
                   <input type="submit" value="Submit"/>
               </div>
           </form>
            <Button danger onClick={this.deleteContact(contact.id)}>Delete Contact</Button>
        </div>
    }

}

const mapProps=(state)=>{
    return {contact:state.dataList.contact_edit}
}

const mapDispatch= (dispatch)=>{
    return {setEditContact:contact=>dispatch({type:SET_CONTACT_EDIT,payload:contact}),
        setDisplay:display=>{dispatch({type:SWITCH_DISPLAY,payload:display})}}
}

export default connect(mapProps,mapDispatch)(AddNew)