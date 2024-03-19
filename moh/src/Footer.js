import React from 'react'
import './CSS/footer.css'
const Footer = ({length}) => {
    
  return (
    <footer>
        {length} list {length===1? "item":"items"} 

    </footer>
  )
}

export default Footer