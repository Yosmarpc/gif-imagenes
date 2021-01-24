import React from 'react';
import './../index.css';

export const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="img">

            <img src={url} alt={title} title={title} />
            <p>{title}</p>
        </div>

    )
}
