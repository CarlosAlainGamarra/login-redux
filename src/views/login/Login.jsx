//redux
import { useSelector, useDispatch } from 'react-redux'
import { setUser, /*unsetUser*/ } from '../../reducers/user/userSlice'

//RouterDom
import { useNavigate } from 'react-router-dom'

//User API
import data from './data.json'



export const Login = () => {
  //Hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogged = useSelector(state => state.user.email )

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    //capturar valores del imput y data
    const emailValue = document.getElementById('email-value').value
    const passwordValue = document.getElementById('password-value').value
    const userData = data

      //comparar valor del imput con existencia en la data
      {(userData.find(elemento => 
        (elemento.email === emailValue & elemento.password === passwordValue) ))? 
      
      //asignar nuevos valores al estado global
      dispatch(setUser({
        email: emailValue,
        password: passwordValue,
        logged: true
      })) 
      //guardar en sessionStorage
      &
      sessionStorage.setItem('user', userLogged)
   
      &  
      navigate('/welcome', { replace: true })
      
      : alert('Wrong credentials')}  
  }

  return (
    <div className='container border border bg-body-secondary mt-5 p-3' style={{width: '70%'}}>
        <h1>Login</h1> 
        <p>use email: tester@redux.com | password:1234567</p>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input className='form-control' type="email" id="email-value"/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input className='form-control' type="password" id="password-value"/>
            </div>
            <button className='btn btn-primary' type="submit">Submit</button>
        </form>
    </div>
  )
}


export default Login