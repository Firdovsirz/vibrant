import React from 'react'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import MainSection from '../../sections/MainSection/MainSection'
import InfoSection from '../../sections/InfoSection/InfoSection'
import CommentSection from '../../sections/CommentSection/CommentSection'
import DownloadSection from '../../sections/DownloadSection/DownloadSection'
import PurchaseSection from '../../sections/PurchaseSection/PurchaseSection'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <MainSection />
                <InfoSection />
                <DownloadSection />
                <CommentSection />
                <PurchaseSection />
            </main>
            <Footer />
        </>
    )
}
