import React, { useEffect, useState } from 'react'
import { instance } from '../Apis/api'
import { Card } from '../Components/Card'
import { SearchBar } from '../Components/SearchBar'

export const PopularNews = () => {
    const [news, setNews] = useState([])
    const [search, setSearch] = useState([])


    const enterHandlerFunction = (e) => {
        //jika enter diklik
        if (e.key === 'Enter') {
            setSearch(e.target.value)
        }
    }

    useEffect(() => {
        const getSearchNews = async () => {
            try {
                const runInstance = await instance.get(`/api/search?search=${search}`, {
                });
                setNews(runInstance.data)
            } catch (err) {
                console.log(err);
            }
        }
        getSearchNews()
    }, [search])

    useEffect(() => {
        const getFood = async () => {
            try {
                const runInstance = await instance.get('api/tech/news?page=1', {
                });
                setNews(runInstance.data)
            } catch (err) {
                console.log(err);
            }
        }
        getFood()
    }, [])


    return (
        <>
            <div className="flex justify-center">
                <h1 className='text-4xl font-bold text-gray-700 text-center bg-orange-500 w-96 py-3 rounded-b-3xl'>Popular News</h1>
            </div>

            <SearchBar keydownHandler={enterHandlerFunction} />

            <div className='grid grid-cols-4 my-12'>
                {
                    news.map((item, i) => {
                        return (<Card key={i} data={item} />)
                    })
                }
            </div>
        </>
    )
}
