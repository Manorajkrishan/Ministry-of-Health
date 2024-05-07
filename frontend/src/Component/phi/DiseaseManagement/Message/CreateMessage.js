import React, { useState } from 'react'
import './Message.css'
import {Link} from "react-router-dom"
import axios from 'axios'
import DMsideNav from '../DMNav/DMsideNav';
import HeaderPHI from '../Header/Header';
function CreateMessage() {
  const[subject,setSubject]=useState("")
  const[textMessage,setTextMessage] =useState("")
  async function sendData(e){
    e.preventDefault();
    const newMessage={
      subject,
      textMessage    };
      console.log(newMessage);
      axios.post('http://localhost:8070/message/add',newMessage).then(()=>{
        alert("message added")
      }).catch((err)=>{
        alert(err)
      })
  }
  return (
    <>
  <HeaderPHI />
  <DMsideNav />
  <div style={{ marginLeft: "300px" }}>
    <div>
  <div>
    <br></br>
    <h5>Create message</h5>

<Link to ="/sent/messages" className="btn btn-primary" style ={{display:'flex',marginLeft:"200px",marginTop:'-34px', width:'122px' }}>View Chat</Link><hr></hr>
</div>

<div className ="container">
<div className ="addM">

 
 
  <form onSubmit= {sendData}>
  <div class="row mb-3">
  <label for="subject" class="col-sm-2 col-form-label">Subject</label>
  <div class="col-sm-10">
  <textarea rows="2"  class="form-control" id="subject" onChange={(e)=>{setSubject(e.target.value)}}></textarea>
  </div>
  </div>
  <div class="row mb-3">
  <label for="textMessage" class="col-sm-2 col-form-label">Text message</label>
  <div class="col-sm-10">
    {/* <input type="description" rows ="10" cols="2" class="form-control" id="colFormLabel" placeholder="col-form-label"/> */}
 <textarea rows="10"  class="form-control" id="textMessage" onChange ={(e)=>{setTextMessage(e.target.value)}}></textarea>
  </div>
  </div>

<button  className="btn btn-success" style ={{display:'flex'}}>Send</button>
{/* <Link to ="/" className="btn btn-success">Delete</Link> */}

<button  className="btn btn-danger" style ={{display:'flex',marginLeft:"200px",marginTop:'-34px' }}>Delete</button>

</form>
</div> </div> </div>  




  </div>
  </>
  )
}

export default CreateMessage
