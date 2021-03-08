import { useState } from 'react';

import './Search.css';


function Search({ products, setProducts }) {
  const [input, setInput] = useState('')
  const originalProduct = products
  // const [filteredProduct, setFilteredProduct] = useState([])

  function search(evt) {
    let target = evt.target.value;
    let filteredProduct = (products.filter((product) => product.title.toUpperCase().includes(target.toUpperCase()))) 
    setInput(target);
    (input.length > 2) ? (setProducts(filteredProduct)) : (setProducts(originalProduct))
    
    console.log(input.length > 2)
    console.log(originalProduct)
    
  }
  return <div className='Search'>
    <input  
    placeholder='Search..' 
    onChange={search} type='text'
    />
  </div>
}

export default Search;

