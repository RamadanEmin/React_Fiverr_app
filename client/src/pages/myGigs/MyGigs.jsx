import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const MyGigs = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const { isLoading, error, data } = useQuery({
        queryKey: ['myGigs'],
        queryFn: () =>
            newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
                return res.data;
            })
    });

    return (
        <div className='myGigs'>
            {isLoading
                ? 'Loading...'
                : error
                    ? 'Something went wrong!'
                    : (
                        <div className="container">
                            <div className="title">
                                <h1>Gigs</h1>
                                {currentUser.isSeller && (
                                    <Link to="/add" className='link'>
                                        <button>Add New Gig</button>
                                    </Link>
                                )}
                            </div>
                            <table>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Sales</th>
                                    <th>Action</th>
                                </tr>
                                {data.map(gig => (
                                    <tr key={gig._id}>
                                        <td>
                                            <img
                                                className="image"
                                                src={gig.cover}
                                                alt=""
                                            />
                                        </td>
                                        <td>{gig.title}</td>
                                        <td>{gig.price}</td>
                                        <td>{gig.sales}</td>
                                        <td>
                                            <img
                                                className="delete"
                                                src="./img/delete.png"
                                                alt=""
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    )
            }
        </div>
    );
};

export default MyGigs;