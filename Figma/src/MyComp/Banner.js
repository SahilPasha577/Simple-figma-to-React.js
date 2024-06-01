import React from 'react'
import mainBannerImg from '../img/p1.png';
import togglepic from '../img/toggle.png';
import peoplepic from '../img/people.png';
import pupl from '../img/pupl.png';
import umb from '../img/umb.png';
import cirl from '../img/cirl.png';
import vector from '../img/Vector.png';


export const Banner = () => {
    return (

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: '20px 20px'
        }}>
            <div style={{ flex: 1, textAlign: 'left', marginLeft: "35px" }}>
                <h1 style={{ color: 'black', fontSize: '36px', fontWeight: "bold", padding: "0px 80px" }}>Discover New <br />Collection <img src={togglepic} alt='toggle pic' style={{ height: "30px" }} /></h1>


                <p style={{ color: 'black', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0' }}>
                    <hr style={{ width: '65px', height: '5px', backgroundColor: 'black', border: 'none', marginBottom: "70px", padding: "0px 30px" }} />
                    <span style={{ padding: "10px 30px" }}>
                        Fashion is part of the daily air <br /> and it changes all the time, <br /> with all the events.
                    </span>
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                    <span style={{ color: 'black', padding: '5px 40px', }}><h2>#01</h2></span>
                    <button style={{
                        backgroundColor: '#FFA500',
                        color: 'black',
                        border: 'none',
                        padding: '10px 30px',
                        cursor: 'pointer',
                        fontWeight: "bold",
                        margin: "0px 30px"
                    }}>
                        Start Shopping
                    </button>
                </div>
                <div>

                    <img src={peoplepic} alt='people' style={{ padding: "20px 55px" }} />
                </div>
            </div>
            <div style={{ flex: 2, background: "#FBFAF3" }}>
                <img src={cirl} alt='pic' style={{ marginLeft: "100px", marginBottom: "270px", marginRight: "-30px" }}></img>
                <img src={mainBannerImg} alt="New Collection" style={{ width: 'auto', height: '500px', marginLeft: "20px", marginRight: "0px" }} />
                <img src={pupl} alt='pic' style={{ paddingRight: "10px", paddingBottom: "260px" }} />
                <img src={umb} alt='pic' style={{ paddingRight: "0px", paddingBottom: "300px" }} />
                <img src={vector} alt='pic' style={{ paddingLeft: "90px", marginTop: "-390px" }} />
                <h1 style={{ paddingLeft: "90px", marginTop: "-160px" }}>25%</h1>
                <br /> <br />
                <p style={{ paddingLeft: "90px", marginTop: "-50px" }}>Off New Arrivals</p>
            </div>
            <div>

            </div>

        </div>
    )
}
