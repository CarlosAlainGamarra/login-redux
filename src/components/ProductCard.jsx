//Redux
import { useDispatch} from 'react-redux'
import { setProduct } from '../reducers/cart/cartSlice'

export const ProductCard = (item) => {
    const dispatch = useDispatch()


    return (
        <li className='col mb-3 list-group-item'>
            <div className="card d-inline-flex text-center" style={{width:'14rem', height:'30rem'}}>
                <div className='container text-center p-1'>
                    <img className="card-img-top" style={{width:'10rem', height: '14rem'}} src={item.item.image} alt={item.item.title} />
                </div>
                <div className="card-body bg-body-secondary">
                    <h4 className="card-title">{item.item.title.slice(0,50)}</h4>
                </div>
                
                <div className='container gap-2 text-center bg-body-secondary'>
                    <button 
                        className='btn btn-secondary m-1 mb-2'
                        style={{width:'5rem'}}
                        id={item.item.id} 
                        onClick={() => 
                            {
                                dispatch(setProduct({
                                    product: {
                                        title: item.item.title,
                                        image: item.item.image,
                                        ID: item.item.id
                                }
                            }))}
                        } 
                        value={item.item.title}
                    >
                        add+
                    </button>
                </div>
            </div>
        </li>
  )
}

export default ProductCard


