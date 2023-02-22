import React, { useState } from 'react'
import axios from 'axios';
import './index.styled.css'

const AddProduct = (props) => {

    const {setProductsList} = props;

    const initialInput = {
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        
    };

    const [values, setValues] = useState(initialInput);

    const resetValues = (e) => {
        e.preventDefault();
        setValues(initialInput);
    };

    const addProduct = (e) => {
        e.preventDefault();
        setProductsList(prev => prev.concat(values));
        let temp = {
            ...values
        }
        temp.price = Number(temp.price)

        console.log(typeof values["price"] )
        axios.post('http://localhost:5050/teaching-be/api/products/add', {
             ...temp
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
        setValues(initialInput);
    };

    const isDisabled = (values.category.length === 0 ||
        values.description.length === 0 ||
        values.image.length === 0 ||
        values.price.length === 0 ||
        values.title.length === 0) 

  return (
    <div>
        <form>
            {
                Object.keys(initialInput).map((el) => {
                   return <div key={el} className='product-field'>
                        <label htmlFor={el}>{el.toUpperCase()}</label>
                        <input type={values[el] === 'price' ? 'number' : "text"} name={el} id={el} value={values[el]} onChange={(e) => values[el] === 'price' ? setValues(prev => ({...prev, [el]: parseInt(e.target.value)})) : setValues(prev => ({...prev, [el]: e.target.value }))}/>
                    </div>
                })
            }
            <button disabled={isDisabled} onClick={addProduct}>Add</button>
            <button onClick={resetValues}>Cancel</button>
        </form>
    </div>
  )
}

export default AddProduct;