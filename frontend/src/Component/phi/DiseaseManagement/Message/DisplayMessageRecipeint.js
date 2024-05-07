
import React,{useState,useEffect}from 'react'
import './ChatWindowR.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import DMsideNav from '../DMNav/DMsideNav';
import HeaderPHI from '../Header/Header';
function DisplayMessageRecipeint() {


      const [message, setMessage]=useState("")
  
      
  
      // function getMessage(){
      //     axios.get(`http://localhost:8070/message/display`).then((res)=>{
      //         setMessage(res.data)
      //     }).catch((err)=>{
      //         alert(err)
      //     })
          
      // }
      // useEffect(()=>{
      //     getMessage()
      // },[]);
      const handleDelete =(id)=>{
          axios.delete(`http://localhost:8070/message/delete/${id}`).then(()=>{
              alert("converstaion deleted")
          }).catch((err)=>{
              alert(err)
          })
  
      }
      const deleteAllMesages= ()=>{
          axios.delete(`http://localhost:8070/message/resources`).then(response=>{
              alert("all the messages are deleted")
              window.location.reload()
          }).catch((err)=>{
              alert(err)
          })
      }
      const filerData=(message, searchkey)=>{
          const result =message.filter((message)=>
      message.subject.toLowerCase().slice(0,4).includes(searchkey.toLowerCase()));
      setMessage(result)
      };
      const handleSearchArea=(e)=>{
          const searchkey =e.currentTarget.value;
          axios.get('http://localhost:8070/message/display',{}).then((res)=>{
              filerData(res.data,searchkey);
  
          }).catch((err)=>{
              alert(err)
          })
      
  
      }
      function formatTimestamp(timestamp) {
     
          const date = new Date(timestamp);
          return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
        }
        
        function formatDate(timestamp) {
       
          const date = new Date(timestamp);
          return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
        }



        const interval = 5000; // 5 seconds in milliseconds

        useEffect(() => {
          const sendApiRequest = async () => {
            try {
              const response = await axios.get(
                "http://localhost:8070/message/display"
              );
              if (response.data !== undefined) {
                setMessage(response.data);
                console.log(response.data);
              }
            } catch (error) {
              console.log(error);
            }
          };
      
          const intervalId = setInterval(sendApiRequest, interval);
      
          return () => clearInterval(intervalId);
        }, []);


    // sendApiRequest()

    return (
<>
      <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
      <div className ="chR">
      <div classname ="chat-window">
              <h2>Received notices</h2>
              <div style={{marginLeft:'800px', marginTop:'-20px'}}>
              <button onClick ={deleteAllMesages} className ="btn btn-danger">delete chat</button>
    
              <Link to ="/createmessage" className ="btn btn-success" style ={{marginLeft:'50px'}}>Type a new message</Link>
              <div style ={{marginLeft:'-300px', marginTop:'-30px', display:'flex'}}>
              <input type="text" onChange={handleSearchArea} placeholder='Search by subject' />
                  <button >search</button>
                  </div>
              </div>
              <hr></hr>
              <div className="message">
    {message && message.map && message.map((msg, index) => (
      <div key={index} className={msg.sender === 'You' ? 'message sent' : 'message received'}>
        <strong>{msg.subject}</strong>
      
  <hr></hr>
        <p>{msg.textMessage}</p>
        <hr></hr>
        <small>Sent on {formatTimestamp(msg.timestamp)}</small>    </div>
    ))}
  </div>
  
          
          
          </div>
          </div></div>
          </>
  
    )
  }
  

  
export default DisplayMessageRecipeint
