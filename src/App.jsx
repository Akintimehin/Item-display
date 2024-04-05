import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
// import Product from './components/Product'

function App() {

  let [logged, setLog]=useState(false)

  const toggleLog = ()=>{
    const currentState= logged
    setLog(!currentState)

  }

  <h1>Product Page</h1>
  
  const ProductData= [
    {
      ProductName: "Tiger",
      ProductPrice:"52,000",
      ProductImage: "./src/assets/tv image1.jpg"
    },
    {
      ProductName: "Tiger",
      ProductPrice:"60,000",
      ProductImage: "./src/assets/tv image1.jpg"
    },
    {
      ProductName: "Tiger",
      ProductPrice:"70,000",
      ProductImage: "./src/assets/tv image1.jpg"
    },

    {
      ProductName: "Tiger",
      ProductPrice:"100,000",
      ProductImage: "./src/assets/tv image1.jpg"
    }
  ]

  return (
    
    <>
    
      <div style={{display: 'flex',gap:"20px"}}>

      
      {
        logged?
        ProductData.map((object, index)=>{
          return (
            <Product
            ProductName = {object.ProductName}
            ProductPrice = {object.ProductPrice}
            ProductImage = {object.ProductImage}/>
          )

        }) : 'you are logged out'
      }
      </div>
      <button onClick={()=>{toggleLog()}}>{logged ? 'log out' : 'log in'}</button> <br />

    </>
    
  )
}

export default App
