import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' 




export const AddCategory = ({setcategoria}) => {
    
    const [inputValue,  setinputvalue] = useState('');
    const [inputLimit, setinputlimit] = useState(10);
    
        const  hanledinputvalue= (e) => {
      
        setinputvalue(e.target.value);
    }

    const handleSubmit = (e) => {
            e.preventDefault();
           
           if(inputValue.length>=2){
            setcategoria(cats => [ inputValue]);
            setinputvalue('');
            
            console.log(inputValue);
           }
             
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="datos"
                className="input"
                value={inputValue}
                onChange={hanledinputvalue}
                placeholder="Buscar..."
            />
    

  
            
      
     
        </form>

   


        </div>
    )
}

AddCategory.propTypes = {
    setcategoria : PropTypes.func.isRequired
}
