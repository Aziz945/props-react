
import React from "react"   


const Profession  = () => {
    const Profession = 'hey there its me im a amateur web dev'
    const Skills = 'HTML CSS JAVASCRIPT REACT '
    
    
   
    return (
        <div>
            <PP profession= {Profession} skills = {Skills} ></PP>
        </div>
    )
}
const PP = (props) => {
    console.log(props)
    const myStyle = {
        border:'3px solid black',
        margin :'12rem'
    }
  return (
    <div style={myStyle}> 
        <h3 >My Profession : {props.profession}  </h3>
        <h3 >My Skills :  {props.skills} </h3> 
    </div>
  )
}

export default Profession; 








