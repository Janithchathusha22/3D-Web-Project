import React from 'react'

export default function Loading() {
    return (
        <>

            <div className="flex items-center justify-center h-full z-10">

                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-50 left-50 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#00ff80] animate-spin">
                </div>
            </div>


        </>
    )
}
