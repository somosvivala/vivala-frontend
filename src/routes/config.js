import Index from '../components/pages/index';
import IndexExpeditions from '../components/pages/expeditions';
import NotFound from '../components/errors/404';

export default [
    {
        path: '/',
        exact: true,
        component: Index,
        key: 'index.index'
    }, {
        path: '/expedicoes',
        exact: true,
        component: IndexExpeditions,
        key: 'expeditions.index'
    },  {
        component: NotFound,
        key: 'error.404'
    },
]