import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from "./components/Auth_pages/Homepage";
import Signup from "./components/Auth_pages/Signup";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
