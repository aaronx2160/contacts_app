import axios from "axios"

axios.defaults.baseURL = 'http://localhost:5000/api/';

export const getContactList= async ()=> await axios.get("contacts")
export const addNewContact= async (data)=> await axios.post("contact",{data})
export const getContact =async (id)=>await axios.get("contact/"+id)
export const deleteContactById =async (id)=>await axios.delete("contact/"+id,)