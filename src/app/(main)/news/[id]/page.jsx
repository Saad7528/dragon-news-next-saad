import { getNewsDetailsById } from '@/lib/data';
import React from 'react';

const NewsDetailsPage = async ({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id);
    console.log("id -", news);
    return (
        <div>
            NewsDetailsPage
        </div>
    );
};

export default NewsDetailsPage;