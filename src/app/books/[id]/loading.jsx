import React from 'react'

function loading() {
    return (
        <main className='container mx-auto px-3 min-h-[80vh] flex justify-center items-center'>
            <div className='animate-spin flex justify-center items-center h-full'>
                <div className='w-14 h-14 bg-transparent border-8 border-t-yellow-700 border-r-yellow-700 border-l-transparent border-b-yellow-700  rounded-full'>
                </div>
            </div>
        </main>
    )
}

export default loading