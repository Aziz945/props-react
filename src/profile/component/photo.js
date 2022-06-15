import React from "react";


const ProfilePic = () => {
    const Image = <img src="https://techreviewpro-techreviewpro.netdna-ssl.com/wp-content/uploads//2015/03/Lovely-funny-pictures-for-fb-Profile-Pic.jpg" alt='not found' ></img>
    return (
        <div>
            <Photo children={Image}></Photo>
        </div>
    )
}


const Photo = (props)  => {
    console.log(props)
    return (
        <div>
            <div className="MyImage" >
                {props.children}
            </div>
           
        </div>
    )
}

export default ProfilePic ; 






// const Picture = (props) => {
//     return (
//         <div>
//             <img src={props.src}/>
//             {props.children }
//         </div>
//     )
// }