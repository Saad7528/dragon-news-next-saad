import React from 'react';

const News = ({news}) => {
    return (
        <div>
           <h2 className="border-2 border-amber-200 py-3 text-2xl" >{news.title}</h2>
        </div>
    );
};

export default News;