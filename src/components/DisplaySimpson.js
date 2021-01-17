import React from 'react';

function DisplaySimpson ({simpson}) {
    return (
        <figure>
            <img src={simpson.image} 
            alt={simpson.character}
            />
            <figcaption>
                <blockquote>{simpson.quote}</blockquote>
                <p>
                    <cite>{simpson.character}</cite>   
                </p>   
            </figcaption>
        </figure>
    );
};

export default DisplaySimpson;