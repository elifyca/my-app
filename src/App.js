import './App.css';
import { useState , useEffect } from 'react';
import Header from './components/Header';
import products from './products.json'
import product from './components/Product'
import Product from './components/Product';


function App() {

  const [money, setMoney]= useState('100')
  const [basket, setBasket]=useState([])
  const [total, setTotal]=useState(0)

useEffect(()=>{
  setTotal(
    basket.reduce((acc, item) =>{
       return acc + (item.amount * (products.find(product =>product.id === item.id).price))
 }, 0))
 
},[basket])




  return (
    <>
    <Header total={total} money={money}/>

    {products.map(product =>(
     <Product  key={product.id} total={total} money={money} basket={basket} setBasket={setBasket}product={product}/>
    ))}
    </>
  );


}

export default App;
