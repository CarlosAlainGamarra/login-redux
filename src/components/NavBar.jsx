//Router
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

//Redux
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { setUser} from '../reducers/user/userSlice'
import { clearCart} from '../reducers/cart/cartSlice'

//Cart icon
import cart from '../assets/cart.svg'



export const NavBar = () => {
  const storedCount = useSelector(state => state.cart.count)
  const logged = useSelector(state => state.user.email)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  return (   
    <nav className="navbar text-bg-dark mb-3" data-bs>
      <div className="container-fluid">
        <Link className="nav-link active" to="/">Home</Link>
        <p className="nav-item mb-0">Hi, {logged? `${logged}` : 'visitor'}</p>
            {!logged?
              <Link className="nav-link active" to="/login" style={{ color: '#4EFF16'}}>Login</Link>
              :<div   
                style={{ color: '#FF1A16', cursor: 'pointer'}}         
                onClick={() => {
                  dispatch(setUser({
                    email: '',
                    password: '',
                    logged: false
                  })) 
                  &
                  dispatch(clearCart()) 
                  &
                  navigate('/', { replace: true, })
                }}
              >
                Logout
              </div>
            }                 
        <Link className="nav-link active" to="/addedtocart"><img src={cart} width={30} alt="cart" /> {`(${storedCount})`}</Link>
      </div>
    </nav>
  )
}

export default NavBar
