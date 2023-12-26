/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react';

const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('sales');

    const minRef = useRef();
    const maxRef = useRef();

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    return (
        <div className='gigs'>
            <div className="container">
                <span className="breadcrumbs">FIVERR {'>'} GRAPHICS & DESIGN {'>'}</span>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input ref={minRef} type="number" placeholder="min" />
                        <input ref={maxRef} type="number" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort by</span>
                        <span className="sortType">{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
                        <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="rightMenu" >
                                {sort === 'sales' ? (
                                    <span onClick={() => reSort('createdAt')}>Newest</span>
                                ) : (
                                    <span onClick={() => reSort('sales')}>Best Selling</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards"></div>
            </div>
        </div>
    );
};

export default Gigs;