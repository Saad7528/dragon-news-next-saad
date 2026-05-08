import React from 'react';

const News = ({n}) => {
    return (
        <div className="space-y-10 mt-5">
           <h2 className="border-2 border-amber-200 py-3 text-2xl p-3" >{n.title}</h2>
        </div>
    );
};

export default News;