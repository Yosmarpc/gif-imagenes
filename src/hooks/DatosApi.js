

import { useState, useEffect } from 'react'; 
import {  ApiConsulta } from '../helpers/ApiConsulta';

export const  DatosApi = () =>  {

        const [state, setstate] = useState({
            data : [], 
            loading : true

        }); 

        useEffect( () => {
            
            ApiConsulta().then(data =>{
                
               
                
                setTimeout( () =>{
                  
                    setstate({
                        data: data, //
                        loading: false
                    })
                },300)
               
            })

        }, [])
         
       
        return state;
        
}