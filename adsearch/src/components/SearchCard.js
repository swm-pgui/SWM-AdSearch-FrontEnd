import React from 'react';


const SearchCard = ({ data }) => {
    const { PRDUCT, ENTRPS } = data;

    return (
        <div>
        <div className="card-image"></div>
        <div className="card-text" style={{border: '1px solid black'}}>
            <h2>{PRDUCT}</h2>
            <h2>{ENTRPS}</h2>
        </div>
        </div>
    );
};
export default SearchCard;