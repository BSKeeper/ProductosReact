import './Product.css'
import AddCartBtn from './AddCartBtn';
import Discount from './Discount';
import Heart from './Heart';


const Product = ({discount, name, oldPrice, newPrice, imgUrl}) => {
  return (
    <div className='Product'>
        <Discount discount={discount} />
        <Heart/>
        <img className='ProductImg' src= {imgUrl} alt="Product" />
        <h2 className='ProductName'>{name}</h2>
        <div className='ProductDetails'>
            <p className='ProductOldPrice'>${oldPrice}</p>
            <p className='ProductPrice'>${newPrice}</p>
            <AddCartBtn name={name} newPrice={newPrice}/>
        </div>
    </div>
  )
}

export default Product