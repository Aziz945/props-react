
import './App.css';

import HandleName from './profile/component/HandleName';
import FullName from './profile/component/FullName';
import Bio from './profile/component/Bio';
import Profession from './profile/component/Profession';
import NavBar from './profile/component/Navbar';
import ProfilePic from './profile/component/photo';
import  propTypes  from 'prop-types'



function App() {
  return (
    
    <>
    
    <NavBar/>
    <br></br>
    <FullName/>
    <br></br>
    <Bio/>
    <br></br>
    <Profession/>
    <br></br>
    <HandleName/>
    <br></br>
    <ProfilePic/>
    
    </>
  );
}

App.defaultProps = {
  firstname : 'unknown',
  lasname : 'unknown'
}

App.prototype = {
  firstname:propTypes.string,
  lastname:propTypes.string
}

export default App;
