import './App.css';
import { useState , useEffect } from 'react';
import Header from './components/Header';
import products from './products.json'


function App() {

  const [money, setMoney]= useState('100')




  return (
    <>
    <Header money={money}/>

    {products.map(product =>(
     <Product />
    ))}
    </>
  );


}

export default App;
