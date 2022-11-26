import React from "react";
import { Link } from "react-router-dom";

 const CardContact = (b)=>{
   let profile_pic="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"; 
    if(b.a.photo!=""){
        profile_pic=b.a.photo
    }
    return (
        <div className="item" style={{background:"whitesmoke", borderRadius:"10px" ,border:"2px solid lightBlue",marginBottom:"10px",boxShadow:"0px 0px 7px lightBlue"}} >
        <img className="ui avatar image" src={profile_pic} style={{background:"blue", radius:"60px", margin:"5px"}}/>    
        {/*this pathname method is the only way to send the info*/}
        <Link to={{pathname:`/contact/${b.a.id}`} } state={{contact:b.a}}>
        <div className="content" style={{ fontType:"arial",fontSize:"20px" }}>
           <div className="header" style={{marginBottom:"6px",marginTop:"6px",fontSize:"25px"}}>{b.a.name}</div>
           <div className="header" style={{marginBottom:"4px"}}>Email: {b.a.email}</div>
           <div className="header" style={{marginBottom:"4px"}}>Number: {b.a.number}</div>
        </div>
        </Link>
                          

        <Link to="/remove-contact" state={{id:b.a.id}}>
        <i className="trash alternate outline icon" style={{color:"red", fontSize:"25px",paddingTop:"12px",paddingBottom:"12px"}}></i>
        </Link>                  
        <Link to={{pathname:`/edit/${b.a.id}`} } state={{id:b.a.id}}>
        <i className="edit alternate outline icon" style={{color:"green", fontSize:"25px",paddingTop:"12px",paddingBottom:"12px"}}></i>
        </Link>     
      </div>

    )
 }

 export default CardContact ;



  