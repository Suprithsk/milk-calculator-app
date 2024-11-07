import './App.css'

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Register from './pages/Register/Register';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/> 
        <Route  path='/signup' element={<Register/>}/>
        <Route path='/signin' element={<Login/>}/>   
      </Routes>
    </BrowserRouter>
  )
}

export default App
