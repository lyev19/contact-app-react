import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

 const CardDetail = (props)=>{
    let profile_pic="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
   
    const { state } = useLocation()
    if(state.contact.photo!=""){
      profile_pic=state.contact.photo;
    } 
    console.log(state)
    return( 
     
      <div className="main" style={{paddingTop:"80px",paddingBottom:"90px"} }>
        <div className="ui card centered">
            <div className="image">
                <img src={profile_pic}></img>
            </div>
            <div className="content">
                <div className="header">{state.contact.name}</div>
                <div className="description">{state.contact.email} {state.contact.number}</div>
            </div>
        </div>
        <Link to="/">
        <button className="ui button blue right" style={{borderRadius:"10px 0px 10px 0px"}}> Back to contacts</button>

        </Link>
        
      </div>
    )

 }

 export default CardDetail ;