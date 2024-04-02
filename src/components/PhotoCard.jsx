import './../App.css'
import React from 'react'

const PhotoCard = ({ photoUrl, name }) => {
    return <photocard className="photocard">
                <img src={photoUrl} alt={name} className="person-photo" height="210" width="280"/>
                <p className="person-name">{name}</p>
           </photocard>;
};

export default PhotoCard;