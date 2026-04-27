import { redirect } from 'next/navigation';
import React from 'react';

const HomePage = () => {
    return (
        redirect('/news/01')
    );
};

export default HomePage;