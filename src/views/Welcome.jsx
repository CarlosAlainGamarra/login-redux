//Redux
import { useSelector } from "react-redux"

//Router
import { useNavigate } from "react-router-dom"

export const Welcome = () => {
  //hooks
    const navigate = useNavigate()
    const userLogged = useSelector(state => state.user.email )

    //LocalStorage
    sessionStorage.setItem('user', userLogged.email)


    //Redireccionamiento
    setTimeout(() => {
      navigate('/', { replace: true, })
    }, 2000)

  return (
    <div>{`Hola, ${userLogged}!`}</div>
  )
}

