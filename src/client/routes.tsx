import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <h1>error</h1>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <h1>login</h1>,
            },
            {
                path: '/register',
                element: <h1>register</h1>,
            },

        ]
    }
])