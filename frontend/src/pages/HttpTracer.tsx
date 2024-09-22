import React from 'react'
import Navigation from '../components/HttpTracer/Navigation'
import Body from '../components/HttpTracer/Body'

const HttpTracer = () => {
    return (
        <div className='text-black1'>
            <p>https://httptracer.com/temps/cd9bf1db-6676s-d236-468d</p>
            <div>
                <div><Navigation /></div>
                <div><Body /></div>
            </div>
        </div>
    )
}

export default HttpTracer