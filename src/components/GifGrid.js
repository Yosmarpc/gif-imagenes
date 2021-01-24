import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from '../hooks/useFetchGif';
import { DatosApi } from '../hooks/DatosApi';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGif(category);
    console.log(data);
    return (

        <>
            {!loading ?  <h3>No haz realizado búsqueda </h3> : <h3>actualmente estás búscando: {category}</h3> }
            
            <hr />
            {loading && <p>Espere estamos buscando imagenes...</p>}
            <div className="card-grid">
                {
                    data.map(img => (

                        <GifGridItem
                            key={img.id}
                            {...img} />

                    ))
                }
            </div>

       



        </>
    )
}
