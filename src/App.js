import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from "./components/Auth_pages/Homepage";
import Signup from "./components/Auth_pages/Signup";
import Login from "./components/Auth_pages/Login";
import PagenotFound from "./components/Auth_pages/PagenotFound";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route path='*' element={<PagenotFound/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
