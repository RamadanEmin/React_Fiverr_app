import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import MyGigs from './pages/myGigs/MyGigs';
import Add from './pages/add/Add';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Pay from './pages/pay/Pay';
import Success from './pages/success/Success';

import './app.scss';

const queryClient = new QueryClient();

function App() {
    const Layout = () => {
        return (
            <div className="app">
                <QueryClientProvider client={queryClient}>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </QueryClientProvider>
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/gigs', element: <Gigs /> },
                { path: '/mygigs', element: <MyGigs /> },
                { path: '/orders', element: <Orders /> },
                { path: '/messages', element: <Messages /> },
                { path: '/message/:id', element: <Message /> },
                { path: '/add', element: <Add /> },
                { path: '/gig/:id', element: <Gig /> },
                { path: '/register', element: <Register /> },
                { path: '/login', element: <Login /> },
                { path: '/pay/:id', element: <Pay /> },
                { path: '/success', element: <Success /> }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;