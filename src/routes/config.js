import Index from '../components/pages/index';
import NotFound from '../components/errors/404';

export default [
    {
        path: '/',
        exact: true,
        component: Index,
        key: 'route-index'
    },  {
        component: NotFound,
        key: 'route-404'
    },
]