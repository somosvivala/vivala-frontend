import Index from '../components/pages/index';
import ExpeditionsIndex from '../components/pages/expeditions';
import ExpeditionsShow from '../components/pages/expeditions/show';
import CorporativeIndex from '../components/pages/corporative';
import AgentsIndex from '../components/pages/agents';
import AgentsSubscribe from '../components/pages/agents/subscribe';
import AboutIndex from '../components/pages/about';
import InstituteIndex from '../components/pages/institute';
import InstituteAbout from '../components/pages/institute/about';
import InstituteResults from '../components/pages/institute/results';
import QuotationsIndex from '../components/pages/quotations';
import CompletePackagesIndex from '../components/pages/quotations/complete-packages';
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
        path: '/sobre',
        exact: true,
        component: AboutIndex,
        key: 'about.index'
    }, {
        path: '/instituto',
        exact: true,
        component: InstituteIndex,
        key: 'institute.index'
    }, {
        path: '/instituto/sobre',
        exact: true,
        component: InstituteAbout,
        key: 'institute.about'
    }, {
        path: '/instituto/resultados',
        exact: true,
        component: InstituteResults,
        key: 'institute.results'
    }, {
        path: '/monte-sua-viagem',
        exact: true,
        component: QuotationsIndex,
        key: 'quotations.index'
    }, {
        path: '/cotacao/pacotes-completos',
        exact: true,
        component: CompletePackagesIndex,
        key: 'quotations.complete-packages'
    }, {
        component: NotFound,
        key: 'error.404'
    },
]