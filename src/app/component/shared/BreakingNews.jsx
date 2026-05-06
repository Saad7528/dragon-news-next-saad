import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
    { "id": 1, "title": "Global Leaders Meet to Address Climate Change Challenges" },
    { "id": 2, "title": "Tech Companies Race to Advance Artificial Intelligence Innovation" },
    { "id": 3, "title": "Stock Markets Show Mixed Reactions Amid Economic Uncertainty" },
    { "id": 4, "title": "Breakthrough in Renewable Energy Promises Cleaner Future" },
    { "id": 5, "title": "International Sports Tournament Draws Millions of Fans Worldwide" },
    { "id": 6, "title": "Healthcare Experts Warn of Rising Cases of Seasonal Illness" },
    { "id": 7, "title": "New Education Policy Aims to Modernize Learning Systems" },
    { "id": 8, "title": "Scientists Discover Potential Water Sources on Distant Planet" },
    { "id": 9, "title": "Major Infrastructure Projects Announced to Boost Economy" },
    { "id": 10, "title": "Cybersecurity Concerns Grow as Digital Threats Increase" }
  ]


const BreakingNews = () => {
    return (
        <div className='container mx-auto bg-gray-400 flex items-center py-2 px-3 rounded-lg'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n => <span key={n.id}>{n.id}.{n.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;