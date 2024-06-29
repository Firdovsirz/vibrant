import React from 'react'
import EastIcon from '@mui/icons-material/East';
import "../MainSection/MainSection.css"
import MainBoard from "/src/assets/main-board.avif"

export default function MainSection() {
    return (
        <section className='main-section'>
            <div className='main-txt-container'>
                <h1 className='main-heading-txt'>Open your first crypto wallet, right now!</h1>
                <p className='main-txt'>Vibrant is the best software platform to easily capture user feed back for your brand and products.</p>
                <button>
                    Get for Free
                    <EastIcon className='linear-arrow' style={{ color: "#fff" }} />
                </button>
            </div>
            <div className='main-board'>
                <img src={MainBoard} alt=""/>
                <div className='board-savings'>
                    <p>Savings</p>
                    <p className='amount'>$2,380.00</p>
                    <div className='saving-dot' />
                    <div className='saving-line' />
                </div>
                <div></div>
            </div>
        </section>
    )
}
