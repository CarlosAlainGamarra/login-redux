//React hooks
import { useEffect, useState } from "react"

//Redux
import { useSelector } from 'react-redux'

//Components
import {ProductCard} from "../../components/ProductCard"



export const Landing = () => {
  //Hooks
  const productList = useSelector(state => state.cart )
  const [products, setProducts] = useState([])
  const initialUser = useSelector(state => state.user.email)

  //LocalStorage
  localStorage.setItem('productList', JSON.stringify(productList))

  //API request
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        sessionStorage.setItem('user', initialUser)
      })
  }, [initialUser])
 

  return (
    <div>
      <div className="container-fluid mb-5">
        <h1 className="text-center">E-SHOP</h1>
      </div>
      <div className="container text-center">
        <ul className="row p-0">
            {products.map((item) => (
            <ProductCard key={item.id} item={item}/>
            ))}
        </ul>
      </div>
    </div>
  )
}


export default Landing