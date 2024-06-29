import React from 'react'
import videoBG from '../assets/video.mp4'
export default function VideoBg() {
    return (
        <>
            <div className='w-screen h-screen'>
                <video src={videoBG} autoPlay loop muted className='w-screen h-screen object-cover' />
            </div>
        </>
    )
}
