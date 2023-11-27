
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Destination from './Page/Destination';
import Home from './Page/Home';
import Login from './Page/Login'
import { Route, Routes } from 'react-router-dom';
import Sign from './Page/Sign';
import Add from './Page/Add';
import Single from './Page/Single';
import aos from 'aos';
import { useEffect } from 'react';
import List from './Page/List';






function App() {

  useEffect(()=>{
    aos.init()
    },[])
  return (
    <div className="App">
     <Header></Header>    
     <Routes>    
    <Route path='/' element={<Home></Home>}></Route> 
    <Route path='/login' element={ <Login></Login>}></Route> 
    <Route path='/destination' element={<Destination></Destination>}></Route>
    <Route path='/signup' element={ <Sign></Sign>}></Route>
    <Route path='/add' element={ <Add></Add>}></Route>
    <Route path='/single/:id' element={ <Single></Single>}></Route>
    <Route path='/list' element={ <List></List>}></Route>

     </Routes>    
     <Footer></Footer>
    </div>
  );
}

export default App;
