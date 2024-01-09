import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import AppLayout from './component/navbar/AppLayout';

const router = createBrowserRouter([
    {
      path: '/',
      Component: AppLayout,
      children: [
        {
          path: '',
          Component: Home
        },
        {
          path: 'about',
          Component: Home
        },
        {
          path: 'books',
          Component: Home
        }
      ]
    },
  
]);

export default router;