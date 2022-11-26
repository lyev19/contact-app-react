import React  from "react";
import { Link } from "react-router-dom";
import {withRouter} from "./React-navigate";

class EditContact extends React.Component {
constructor(props){
    super(props)

    
}

state= {
    name:"",
    email:"",
    number:"",
    photo:"",
    id:window.location.href.split('/')[4]
}

add = (e)=>{
    
   e.preventDefault();
   if(this.state.name===""|| this.state.email===""){
     alert("please complete the form ")
     return
   } 
   else{
    
    
    
     console.log(this.state)
     
     this.props.editContactHandler(this.state)
     console.log(this.state)
     this.setState({name:"",email:"",number:"",id:"",photo:""});
     this.props.navigate("/")
   }
   
  
}

render(){

    
    return(
        
        <div>
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={this.add} >
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={(a)=>{
            
                       this.setState({name:a.target.value})
                    }}
                     value={this.state.name}
                    >

                    </input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" onChange={(a)=>{
                        this.setState({
                            email:a.target.value
                        })
                    }} value={this.state.email}></input>
                </div>
                <div className="field">
                    <label>Number</label>
                    <input type="number" name="number" placeholder="Number" onChange={(a)=>{
                        this.setState({
                            number:a.target.value
                        })
                    }} value={this.state.number}></input>
                </div>
                <div className="field">
                    <label>Photo url</label>
                    <input type="text" name="photo" placeholder="photo url" onChange={(a)=>{
                        this.setState({
                            photo:a.target.value
                        })
                    }} value={this.state.photo}></input>
                </div>
                <button className="ui button red" style={{borderRadius:"10px 0px 10px 0px"}}>Edit</button>
                
                
                <Link to="/">
                
                <button className="ui button blue right" style={{borderRadius:"10px 0px 10px 0px"}}>Back to contacts Contacts</button>
                </Link>
            </form>

        </div>
       
    )
}
}
//export default AddContact;
export default  withRouter(EditContact);

