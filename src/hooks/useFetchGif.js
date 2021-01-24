
import { useState, useEffect } from 'react'; 
import {  GifGridService } from '../helpers/GifGridService';
export const  useFetchGif = (category, limit) =>  {

        const [state, setstate] = useState({
            data : [], 
            loading : true

        }); 

        useEffect( () => {
            
            GifGridService( category ).then(img =>{
                console.log(category);
               
                
                setTimeout( () =>{
                  
                    setstate({
                        data: img, //
                        loading: false
                    })
                },300)
               
            })

        }, [category])
         
       
        
        return state;
}