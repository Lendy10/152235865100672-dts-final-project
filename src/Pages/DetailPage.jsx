import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Footer } from '../Components/Footer'
import { useSearchParams } from 'react-router-dom'
import { instance } from '../Apis/api'
import { Content } from '../Container/Content'

export const DetailPage = () => {
    const [news, setNews] = useState([])
    const [searchParam, setSearchParam] = useSearchParams();

    useEffect(() => {
        const newsID = searchParam.get('id');
        const getNewsDetail = async () => {
            try {
                const fetchingNews = await instance.get(`/api/detail/${newsID}`)
                setNews(fetchingNews.data)
            } catch (err) {
                console.log(err);
            }
        }
        getNewsDetail()
    }, [])

    return (
        <div className='container h-screen'>
            <Header />
            <Content data={news.results} />
            <Footer />
        </div>
    )
}
