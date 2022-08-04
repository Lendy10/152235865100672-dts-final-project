import React from 'react'
import Header from '../Components/Header'
import FirstSectionImage from '../Components/FirstSectionImage'
import { PopularNews } from '../Container/PopularNews'
import { Footer } from '../Components/Footer'

const Homepage = () => {
    return (
        <div className='container h-screen'>
            <Header />
            <FirstSectionImage />
            <PopularNews />
            <Footer />
        </div>
    )
}

export default Homepage