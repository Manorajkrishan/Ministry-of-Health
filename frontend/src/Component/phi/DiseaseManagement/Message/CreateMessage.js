import React from 'react'

function CreateMessage() {
  return (
    <div>
   <h4>Message heading</h4>
   <h1>Description</h1>


   <div className="container">
    <form>
      <label for ="messageheading">Message title</label>
      <label for ="subject">Subject</label>
    <textarea id ="subject" name ="subject" placehodler ="type the message" style= {{height:"200px"}}></textarea>
    
    
    </form>
   </div>
    </div>
  )
}

export default CreateMessage
