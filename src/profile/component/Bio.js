const Bio  = () => {
    const Age = 21
    const Nationality = 'tunisian'
    
    
   
    return (
        <div>
            <BP age= {Age} nationality= {Nationality} ></BP>
        </div>
    )
}
const BP = (props) => {
    console.log(props)
    const myStyle = {
        
        fontSize:'53px'
    }
  return (
    <div style={myStyle}> 
        <h3 > Age : {props.age}  </h3> 
        <h3 > Nationality :  {props.nationality}</h3>
    </div>
  )
}

export default Bio ; 








