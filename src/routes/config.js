import Index from '../components/pages/index';
import ExpeditionsIndex from '../components/pages/expeditions';
import ExpeditionsShow from '../components/pages/expeditions/show';
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
        component: ExpeditionsIndex,
        key: 'expeditions.index'
    }, {
        path: '/expedicoes/:id',
        exact: true,
        component: ExpeditionsShow,
        key: 'expeditions.show'
    }, {
        component: NotFound,
        key: 'error.404'
    },
]