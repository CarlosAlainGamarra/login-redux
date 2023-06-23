//Components
import { ProductInCart } from "../../components/ProductInCart"

//Redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from "../../reducers/cart/cartSlice"


export const AddedToCart = () => {
    const productList = useSelector(state => state.cart.product )
    const productCount = useSelector(state => state.cart.count )
    
    const dispatch = useDispatch()

  //Drop cart
    const handleClick = () => {
      dispatch(clearCart())
    }


  return ( 
    <>
      <div className="container-fluid mb-5">
        <h1 className="text-center">YOUR CART</h1>
        {productCount !==0? 
          <button className="btn btn-warning" onClick={handleClick}>
            clear
          </button> : ''
        }
      </div> 
      <div className="container text-center">  
        {productList?
          <ul className="row p-0">
            {productList.map((item) => (
              <ProductInCart key={item.ID} item={item} />
            ))}
          </ul>
        : ''} 
      </div>


    </>
  )
}


export default AddedToCart