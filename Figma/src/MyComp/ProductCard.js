import React from 'react'

export const ProductCard = ({ image }) => {
    return (

        <div style={{
            background: '#f0f0f0',
            padding: '10px',
            width: '200px',
            textAlign: 'center',
            margin: '10px'
        }}>
            <img src={image} alt="pic" style={{ width: '100%', height: 'auto' }} />

        </div>
    )


}
