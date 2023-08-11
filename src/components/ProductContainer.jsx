import './ProductContainer.css'

const ProductContainer = (props) => {
  return (
    <section className="ProductsSection">
        <h1 className="ProductsTitle">Nuestros productos</h1>
        <div className="ProductsContainer">
            {props.children}
        </div>
    </section>
  )
}

export default ProductContainer