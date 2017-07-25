import Index from '../components/pages/index';
import ExpeditionsIndex from '../components/pages/expeditions';
import ExpeditionsShow from '../components/pages/expeditions/show';
import CorporativeIndex from '../components/pages/corporative/index';
import AgentsIndex from '../components/pages/agents/index';
import AgentsSubscribe from '../components/pages/agents/subscribe';
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
        path: '/corporativo',
        exact: true,
        component: CorporativeIndex,
        key: 'corporative.index'
    }, {
        path: '/agentes',
        exact: true,
        component: AgentsIndex,
        key: 'agents.index'
    }, {
        path: '/agentes/seja-um-agente',
        exact: true,
        component: AgentsSubscribe,
        key: 'agents.subscribe'
    }, {
        component: NotFound,
        key: 'error.404'
    },
]