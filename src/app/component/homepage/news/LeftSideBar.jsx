import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId}) => {
    return (
        <div>
            <ul>
                {categories.map(cat =>
                    <li className={`${activeId === cat.category_id && "bg-gray-300"}  py-2 text-center font-bold my-2`} key={cat.category_id}>
                     <Link className='block' href={` /category/${cat.category_id}`}>{cat.category_name}</Link>   
                    </li>
                )}
            </ul>
        </div>
    );
};

export default LeftSideBar;