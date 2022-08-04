import React from 'react'

export const SearchBar = (props) => {

    return (
        <div className="flex justify-center items-center mt-7">
            <input
                onKeyPress={props.keydownHandler}
                type='text'
                className='rounded-md w-1/2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-3xl focus:z-10 sm:text-sm'
                placeholder='What Intrigues You?'
            />
        </div>
    )
}
