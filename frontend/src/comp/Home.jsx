import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const handleClick = (e) => {
      console.log(e.target.id)
      if(e.target.id == "form")
      navigate("/form")
    else if(e.target.id == "entries")
{
  navigate("/display")
}
    }
  return (
    <div
    style={{ maxWidth: '600px', marginLeft: '34vw', padding: '20px',   }}
    >
        <button id='form' onClick={handleClick}>Click here for Form</button>
        <br/>
        <br/>
        <button id='entries' onClick={handleClick}>Click here to show the submitted Entries</button>
    </div>
  )
}

export default Home