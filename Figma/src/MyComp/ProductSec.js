import React from 'react'
import { ProductCard } from './ProductCard'
import capImage from '../img/card1.png';
import perfumeImage from '../img/card2.png';
import sneakerImage from '../img/card3.png';

export const ProductSec = () => {
    return (

        <div style={{
            background: '#796EFF',
            color: '#fff',
            padding: '20px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
        }}>

            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                <ProductCard
                    image={capImage}

                />
                <ProductCard

                    image={perfumeImage}

                />

                <ProductCard

                    image={sneakerImage}

                />
                <div style={{

                    maxWidth: '300px',
                    textAlign: "start",
                    paddingTop: "40px"
                }}>
                    <h2 >Our Feature Products</h2>
                    <p>If we define Buzz buy in three words, it will be elegant, classic, and high-quality.</p>
                </div>
            </div>

        </div >
    )
}
