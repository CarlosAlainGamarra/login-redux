//Components
import { Login } from "./views/login/Login"
import { Welcome } from "./views/Welcome"
import { Landing } from "./views/landing/Landing"
import AddedToCart from "./views/addedtocart/AddedToCart"

//Router
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/addedtocart' element={<AddedToCart />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
