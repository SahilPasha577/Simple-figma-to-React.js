import React from 'react'

export const Header = () => {
    return (


        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#FFFFFF' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', paddingLeft: "54px" }}>Sh<span className='text-warning'>O</span>py</div>
            <nav>
                <a href="#men" style={{ color: 'black', textDecoration: 'none', margin: '0 18px' }}>Men</a>

                <a href="#women" style={{ color: 'black', textDecoration: 'none', margin: '0 18px' }}>Women</a>
                <a href="#accessories" style={{ color: 'black', textDecoration: 'none', margin: '0 18px' }}>Accessories</a>
                <a href="#sale" style={{ color: 'black', textDecoration: 'none', margin: '0 18px' }}>Summer Sale</a>
                <a href="#kids" style={{ color: 'black', textDecoration: 'none', margin: '0 18px' }}>Kids</a>
            </nav>


            <div style={{ position: 'relative' }}>
                <input type="search" placeholder="Search" style={{ padding: '5px', marginRight: "40px", width: '180px' }} />
                <i className="fa fa-search" style={{ position: 'absolute', right: '50px', top: '50%', transform: 'translateY(-50%)' }}></i>

            </div>


        </header>
    )
}
