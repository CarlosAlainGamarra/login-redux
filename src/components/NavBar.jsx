//Router
import { Link } from "react-router-dom"

//Redux
import { useSelector } from 'react-redux'

//Cart icon
import cart from '../assets/cart.svg'


export const NavBar = () => {
  const storedCount = useSelector(state => state.cart.count)
  const logged = useSelector(state => state.user.email)


  return (   
    <nav className="navbar text-bg-dark mb-3" data-bs>
      <div className="container-fluid">
        <Link className="nav-link active" to="/">Home</Link>
        <p className="nav-item mb-0">Hi, {logged? `${logged}` : 'visitor'}</p>
        <Link className="nav-link active" to="/login">Login</Link>          
        <Link className="nav-link active" to="/addedtocart"><img src={cart} width={30} alt="cart" /> {`(${storedCount})`}</Link>
      </div>
    </nav>
  )
}

export default NavBar
