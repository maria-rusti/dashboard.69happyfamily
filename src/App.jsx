import { useEffect, useState } from 'react';
import './App.css'
import { products } from './assets/mock';
import AddProduct from './components/add-product';
import Header from './components/header';
import Orders from './components/orders';
import ProductsList from './components/product-list';


function App() {

  const [currentPage, setCurrentPage] = useState('add-products');
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    setProductsList(products)
  },[products]);

  return (
    <div className='app'>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      { currentPage === 'add-products' ? <>
      <AddProduct setProductsList={setProductsList} />
      <ProductsList products = {productsList}/>
      
      </>: <Orders/>
} 
    </div>


  );
}

export default App
