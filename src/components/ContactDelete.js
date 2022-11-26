import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
export const ContactDelete =(props)=>{
   
    const { state } = useLocation()

   return(<div className="main center">
    < div className="header" style={{paddingTop:"100px",paddingBottom:"50px"}}><h1>Do you really wanna delete this element?</h1> </div>
    <Link to="/">   
    <button className="ui button red left" onClick={()=>{props.removeContactHandler(state.id)}} style={{borderRadius:"10px 0px 10px 0px",width:"100px"}}>Yes</button>
    </Link>
    <Link to="/">
    <button className="ui button blue right" style={{borderRadius:"10px 0px 10px 0px",width:"100px"}}>No</button>
    </Link>
    
    </div>
   ) 

}