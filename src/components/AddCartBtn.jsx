import './AddCartBtn.css';


const AddCartBtn = ({name, newPrice}) => {
  return (
    <button onClick={()=>{alert(`${name} a $${newPrice} se agregó al carrito de compra`)}}>Comprar</button> 
  )
}

export default AddCartBtn


