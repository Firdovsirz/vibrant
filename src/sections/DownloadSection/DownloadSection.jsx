import React from 'react'
import EastIcon from '@mui/icons-material/East'
import "../DownloadSection/DownloadSection.css"
import AppChart from "/src/assets/app-chart.avif"

export default function DownloadSection() {
    return (
        <section className='download-section'>
            <div className='app-container'>
                <h2>
                    Download the app and start today!
                </h2>
                <button>
                    Get for Free
                    <EastIcon className='arrow-linear'/>
                </button>
                <p>*No credit card requires</p>
            </div>
            <img src={AppChart} alt="" />
        </section>
    )
}
