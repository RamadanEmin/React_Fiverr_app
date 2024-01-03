import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Message = () => {
    const { id } = useParams();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const { isLoading, error, data } = useQuery({
        queryKey: ['messages'],
        queryFn: () =>
            newRequest.get(`messages/${id}`).then((res) => {
                return res.data;
            })
    });

    return (
        <div className='message'>
            <div className="container">
                <span className="breadcrumbs">
                    <Link to="/messages" className='link'>MESSAGES</Link> {'>'} RAMADAN EMIN {'>'}
                </span>
                {isLoading
                    ? 'Loading...'
                    : error
                        ? 'Something went wrong!'
                        : (
                            <div className="messages">
                                {data.map(m => (
                                    <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                                        <img
                                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                            alt=""
                                        />
                                        <p>{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                <hr />
                <form className="write">
                    <textarea placeholder='write a message' ></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Message;