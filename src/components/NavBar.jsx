//Router
import { Link } from "react-router-dom"

//Redux
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { setUser} from '../reducers/user/userSlice'

//Cart icon
import cart from '../assets/cart.svg'



export const NavBar = () => {
  const storedCount = useSelector(state => state.cart.count)
  const logged = useSelector(state => state.user.email)

  const dispatch = useDispatch()


  return (   
    <nav className="navbar text-bg-dark mb-3" data-bs>
      <div className="container-fluid">
        <Link className="nav-link active" to="/">Home</Link>
        <p className="nav-item mb-0">Hi, {logged? `${logged}` : 'visitor'}</p>
            {!logged?
              <Link className="nav-link active" to="/login">Login</Link>
              :<button 
                className="btn btn-secondary m-1 mb-2"
                onClick={() => {
                  dispatch(setUser({
                    email: '',
                    password: '',
                    logged: false
                  })) 
                }}
              >
                Logout
              </button>
            }                 
        <Link className="nav-link active" to="/addedtocart"><img src={cart} width={30} alt="cart" /> {`(${storedCount})`}</Link>
      </div>
    </nav>
  )
}

export default NavBar
