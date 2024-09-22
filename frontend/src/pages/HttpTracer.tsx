import React from 'react'
import Navigation from '../components/HttpTracer/Navigation'
import Body from '../components/HttpTracer/Body'

const HttpTracer = () => {
    return (
        <div className='text-black1 flex flex-col gap-8'>
            <div className='flex w-full justify-center'><p className='mt-8 px-12 py-4 bg-orange2 rounded-full cursor-pointer' >http://localhost:3000/httptracer/gethttp</p></div>
            <div className='flex gap-6'>
                <Navigation />
                <Body />
            </div>
        </div>
    )
}

export default HttpTracer