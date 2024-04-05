import "./Product.css"


const Product =(props)=>{
    const {ProductImage, ProductName, ProductPrice}= props
    return(
        <>
        <div>
            <p>{ProductName}</p>
            <p>{ProductPrice}</p>
            <img src={ProductImage} alt="" />
        </div>
        </>
    )

}
export default Product