import Index from '../components/pages/index';

export default [
    {
        path: '/',
        exact: true,
        component: Index,
        key: 'route-index'
    },  {
        component: Index,
        key: 'route-404'
    },
]