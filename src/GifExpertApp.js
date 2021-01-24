
import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
    const datos = [''];

    const [categories, setcategoria] = useState(datos);


    return (
        <>
         
            <div className="center">
            <h2 >Gif Yosmarweb (Buscador de IMAGENES GIF)</h2>
            <AddCategory setcategoria={setcategoria} />
            </div>
           
            <hr />

            <ol>
                {
                    categories.map(category => (

                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
  
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>


            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>



        </>

    );


}

