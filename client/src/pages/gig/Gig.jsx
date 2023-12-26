/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Slider } from 'infinite-react-carousel';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';

import './Gig.scss';

const Gig = () => {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: ['gig'],
        queryFn: () =>
            newRequest.get(`/gigs/single/${id}`).then((res) => {
                return res.data;
            })
    });

    return (
        <div className='gig'>
            {isLoading
                ? 'Loading...'
                : error
                    ? 'Something went wrong!'
                    : (
                        <div className="container">
                            <div className="left">
                                <span className="breadcrumbs">FIVERR {'>'} GRAPHICS & DESIGN {'>'}</span>
                                <h1>{data.title}</h1>
                                <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                                    {data.images.map((img) => (
                                        <img key={img} src={img} alt="" />
                                    ))}
                                </Slider>
                                <h2>About This Gig</h2>
                                <p>{data.desc}</p>
                            </div>
                            <div className="right">
                                <div className="price">
                                    <h3>{data.shortTitle}</h3>
                                    <h2>$ {data.price}</h2>
                                </div>
                                <p>{data.shortDesc}</p>
                                <div className="details">
                                    <div className="item">
                                        <img src="/img/clock.png" alt="" />
                                        <span>{data.deliveryTime} Days Delivery</span>
                                    </div>
                                    <div className="item">
                                        <img src="/img/recycle.png" alt="" />
                                        <span>{data.revisionNumber} Revisions</span>
                                    </div>
                                </div>
                                <div className="features">
                                    {data.features.map((feature) => (
                                        <div className="item" key={feature}>
                                            <img src="/img/greencheck.png" alt="" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to={`/pay/${id}`}>
                                    <button>Continue</button>
                                </Link>
                            </div>
                        </div>
                    )}
        </div>
    );
};

export default Gig;