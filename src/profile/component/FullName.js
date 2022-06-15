const FullName  = () => {
    const FirstName  = 'Aziz'
    const LastName = 'Mlika'
    return (
        <div>
            <FN firstname= {FirstName} lastname = {LastName}></FN>
        </div>
    )
}
const FN = (props) => {
    console.log(props)
  return (
    <div> 
        <h3 style={{fontSize:'65px',color:'rgb(70, 55, 51 )'}}> {props.firstname} {props.lastname} </h3> 
    </div>
  )
}

export default FullName ; 








