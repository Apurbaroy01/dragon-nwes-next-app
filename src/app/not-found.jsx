import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-full flex flex-col justify-center items-center text-center'>
            <h1 className='text-4xl font-bold'>404</h1>
            <p>Page Not Found</p>

            <Link href="/" className='mt-4'>
                <button className=' btn text-blue-500 hover:bg-gray-100'>Go back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;