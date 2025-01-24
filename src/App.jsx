
//import About from './About'
import './App.css'
import Auth from './Auth'
import User from './User'
const Authorized = Auth(User);
function App() {
  const user = {name:"Roshini"};
  const isAuth=true;
  
  return (
    <>
  
   < Authorized isAuth={isAuth}user={user}/>
    
    
   </>

    
  )
}

export default App
