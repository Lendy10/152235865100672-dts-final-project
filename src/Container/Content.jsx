import React from 'react'
import { Post } from '../Components/Post'

export const Content = (props) => {
    const categories = []

    props.data?.categories.map(item =>
        categories.push(item)
    )
    return (
        <>
            <div className="container flex justify-center my-6">
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                    <article className="flex flex-col shadow my-4">
                        <p className="hover:opacity-75">
                            <img alt={props.data?.author} src={props.data?.figure[0]} />
                        </p>
                        <div className="bg-white flex flex-col justify-start p-6">
                            <p className="text-blue-700 text-sm font-bold uppercase pb-4">{categories.join(', ')}</p>
                            <p className="text-3xl font-bold hover:text-gray-700 pb-4">{props.data?.title}</p>
                            <p className="text-sm pb-8">
                                By <p className="font-semibold hover:text-gray-800">{props.data?.author}</p>, Published on {props.data?.date}
                            </p>
                            <h1 className="text-2xl font-bold pb-3">{props.data?.content[0]}</h1>
                            {
                                props.data?.content.map(element => {
                                    return (<Post text={element} />)
                                })
                            }
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}
