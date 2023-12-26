/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import GigCard from '../../components/gigCard/GigCard';
import newRequest from '../../utils/newRequest';

import './Gigs.scss';

const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('sales');

    const minRef = useRef();
    const maxRef = useRef();

    const { search } = useLocation();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['gigs'],
        queryFn: () =>
            newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res) => {
                return res.data;
            })
    });

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    useEffect(() => {
        refetch();
    }, [sort]);

    const apply = () => {
        refetch();
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
                        <button onClick={apply}>Apply</button>
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
                <div className="cards">
                    {isLoading ? 'Loading...' : error ? 'Something went wrong!' : data.map((gig) => (
                        <GigCard key={gig._id} item={gig} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gigs;