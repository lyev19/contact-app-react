import React  from "react";
import { Link } from "react-router-dom";
import {withRouter} from "./React-navigate";

class AddContact extends React.Component {
constructor(props){
    super(props)
}

state= {
    name:"",
    email:"",
    number:"",
    photo:""
}
add = (e)=>{
   e.preventDefault();
   if(this.state.name===""|| this.state.email===""){
     alert("please complete the form ")
     return
   } 
   else{
    
     this.props.addContactHandler(this.state)
     this.setState({name:"",email:"",number:"",photo:""});
     console.log(this.props)
     this.props.navigate("/")
   }
   
  
}

render(){
    return(
        
        <div>
            <h2>Add Contact</h2>
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
                    <label>Photo url (optional)</label>
                    <input type="text" name="email" placeholder="photo" onChange={(a)=>{
                        this.setState({
                            photo:a.target.value
                        })
                    }} value={this.state.photo}></input>
                </div>


                <button className="ui button red" style={{borderRadius:"10px 0px 10px 0px"}}>Submit</button>
                
                
                <Link to="/">
                
                <button className="ui button blue right" style={{borderRadius:"10px 0px 10px 0px"}}>See Contacts</button>
                </Link>
            </form>

        </div>
       
    )
}
}
//export default AddContact;
export default withRouter (AddContact);