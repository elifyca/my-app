import {useState } from 'react'



function Product ({ product }) {
    return(
        <>
       <div className="product">
         <h6>{product.title}</h6>

         <div className='price'>${product.price}</div>

         <div className='actions'></div>
          <button>Sell</button>
         <span className='amount'> 0 </span>
          <button>Buy</button>
          
         <style jsx>{`
       .product{
        padding: 10px;
        background: #fff;
        border: 1px solid #ddd;
        margin-bottom: 20px;

       }

       `}</style>
         
         
         
       
</div>
        </>
    )
}


export default Product