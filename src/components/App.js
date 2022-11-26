import React,{useState, useEffect} from "react";   
//import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import api from "../api/contacts"
import { v4 as uuidv4} from "uuid"; //this makes all the ids for our contacts 
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import CardDetail from "./ContactDetail";
import { ContactDelete } from "./ContactDelete";
import EditContact from "./EditContact";

//const contacts = [{name:"Leon",email:"leon@gmail.com",id:1},{name:"efrain",email:"efrain@gmail.com",id:2}]



function App() {
  
  const LOCAL_KEY="contacts";
  
  const [contacts,setContacts]=useState([]); //this is the hook useState that allows me to work with states 
  const [searchTerm,setSearchTerm]=useState("");
  const [result,setResult]=useState([]);
  const retrieveContacts= async ()=>{
    const response= await api.get("/contacts");
    return response.data;
  }
  
  

  const addContactHandler = async (contact)=>{
      
     const request= {
         id: uuidv4(),...contact
      }
      const response = await api.post("/contacts",request)
      setContacts([...contacts,response.data])
      console.log(contacts)   
  }
  
  const editContactHandler = async (contact)=> {
      const response = await api.put(`/contacts/${contact.id}`,contact);
      const {id,name,email,number}= response.data
      setContacts(contacts.map(a =>{
         return a.id==id? {...response.data}:a
      }))
  }

  
  const searchHandler = (searchTerms)=>{
    
    setSearchTerm(searchTerms.current.value)
    console.log(searchTerm)
    setResult([]);
    let regex= new RegExp(`${searchTerm}`,"g")
     setResult(contacts.filter(a=>
      regex.test(a.name)
     ))
     console.log(result)
 
  }
  

  const removeContactHandler = async (id)=>{

    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((a)=>{
      
      return a.id !==id;
    })

    setContacts(newContactList);

  }

//use effect runs everytime a state changes
  useEffect(()=>{
    //const retrieveContacts= JSON.parse(localStorage.getItem(LOCAL_KEY));
    //if(retrieveContacts) setContacts(retrieveContacts)
    const getAllContacts= async ()=>{
      const allContacts = await retrieveContacts();
      if(allContacts) {setContacts(allContacts)};
    }

    getAllContacts();
  },[])

  useEffect(()=>{
      //localStorage.setItem(LOCAL_KEY,JSON.stringify(contacts))

  },[contacts])

  

  
  return (

    
    <div className="ui container">
      <Header/>
      
      <Router>
        <Routes>
       
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/" element={<ContactList list={contacts} term={ searchTerm} searchValue={searchHandler} result={result} />}/>
        <Route path="/contact/:id" element={<CardDetail />} />
        <Route path="/remove-contact" element={<ContactDelete removeContactHandler={removeContactHandler}/>} />
        <Route path="/edit/:id" element={<EditContact editContactHandler={editContactHandler} />} />
        </Routes>
     
      </Router>
     
    </div>
  );
}

export default App;

 /*this is thhe latest
     



   <Route path="/add" render={(props)=>(<AddContact {...props}addContactHandler={addContactHandler}/>)}/>
        <Route path="/" render={(props)=>(<ContactList {...props}list={contacts}  removeContactHandler={removeContactHandler}/>)}/> 

      <Router>
        <Routes>
         
            
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
        <Route path="/" element={<ContactList list={contacts}  removeContactHandler={removeContactHandler}/>}/>
        
        </Routes>
     
      </Router>


 <AddContact addContactHandler={addContactHandler}/>
      <ContactList list={contacts}  removeContactHandler={removeContactHandler}/>




         <AddContact addContactHandler={addContactHandler}/>
      <ContactList list={contacts}  removeContactHandler={removeContactHandler}/>

<Route path="/add" render={(props)=>(<AddContact {...props}addContactHandler={addContactHandler}/>)}/>
        <Route path="/" render={(props)=>(<ContactList {...props}list={contacts}  removeContactHandler={removeContactHandler}/>)}/> 
     */