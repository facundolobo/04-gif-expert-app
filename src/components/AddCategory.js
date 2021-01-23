import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange= (e) =>{
        setInputValue(e.target.value);

        console.log('handleInputChange llamado')
    }

    const handleSubmit =(e) => {
        e.preventDefault();
    
        // console.log('submit hecho')
        if(inputValue.trim().length >2){
            setCategories(cats => [inputValue,...cats,]); //agrega lo del input a la lista
            setInputValue(''); //borra el input
        }
        
    }


    return (
        
            <form onSubmit={handleSubmit}>
            <p> {inputValue}</p>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
                
            </form>
        
    )
}

AddCategory.PropTypes = {
    setCategories: PropTypes.func.isRequired
}