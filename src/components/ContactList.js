import React from "react";
import {useRef} from "react";
import { Link } from "react-router-dom"
import CardContact from "./ContactCard"

const ContactList = (props)=>{
   
  /*
    const deleteContact = (id) =>{
        props.removeContactHandler(id);
    }
   */ 
    //re add props after 
    const inputs = useRef("");
    const getSearchTerm =()=>{
      
      props.searchValue(inputs)
    }
    
 

    const renderList = props.result===[]||props.term==""?props.list.map((a)=>{
      
        return (
            
          <CardContact a={a} />
          
        )
    }):props.result.map((a)=>{
      return ( <CardContact a={a}/>)
    })
   return(
    
      <div className="ui celled list">
       <div className="ui search" style={{paddingTop:"50px"}}> 
         
         <input className="search" placeholder="search..." ref={inputs} value={props.term} onChange={getSearchTerm}/>
         <i className="search icon"></i>
        </div> 
        <h3> Contact list</h3> 
          
             {renderList}
              <Link to="/add">
              <button className="ui button blue right" style={{borderRadius:"10px 0px 10px 0px"}}>Add contact</button>
              </Link>
             
      </div>
   )
}

export default ContactList;