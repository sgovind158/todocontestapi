import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{

        const fetchProducts = async ()=>{
       let res = await fetch(` http://localhost:8080/products`);
       let d = await res.json()
       setProducts(d)
        }
        fetchProducts();

    },[])


  return (
      <>
    <div>
      
      Products:
      {products.map((p)=>{
        
          return <div key={p.id}>
             <Link to= {`/products/${p.id}`}>{p.name}</Link>
          </div>
      })}
    </div>
      <Outlet/>
     
      </>
  )
}

export default Products
