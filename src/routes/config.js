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
import QuotationsSearch from '../components/pages/quotations/search';
import ContactIndex from '../components/pages/contact';
import SearchPageIndex from '../components/pages/search';
import CompletePackagesIndex from '../components/pages/quotations/complete-packages';
import LodgingIndex from '../components/pages/quotations/lodging';
import FlightsIndex from '../components/pages/quotations/flights';
import PageNotFound from '../components/errors/404';

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
        path: '/busque-sua-viagem',
        exact: true,
        component: SearchPageIndex,
        key: 'quotations.search-2'
    }, {
        path: '/cotacao',
        exact: true,
        component: QuotationsSearch,
        key: 'quotations.search'
    }, {
        path: '/busca',
        exact: true,
        component: QuotationsIndex,
        key: 'quotations.index'
    }, {
        path: '/cotacao/pacotes-completos',
        exact: true,
        component: CompletePackagesIndex,
        key: 'quotations.complete-packages'
    }, {
        path: '/cotacao/hospedagens',
        exact: true,
        component: LodgingIndex,
        key: 'quotations.lodging'
    }, {
        path: '/cotacao/voos',
        exact: true,
        component: FlightsIndex,
        key: 'quotations.flights'
    }, {
        path: '/contato',
        exact: true,
        component: ContactIndex,
        key: 'contact.index'
    }, {
        component: PageNotFound,
        key: 'error.404'
    },
]