import Index from '../components/pages/index';
import VolunturismoIndex from '../components/pages/volunturismo';
import EcoturismoIndex from '../components/pages/ecoturismo';
import ImersaoIndex from '../components/pages/imersoes';
import CorporativeIndex from '../components/pages/corporative';
import AboutIndex from '../components/pages/about';
import InstituteIndex from '../components/pages/institute';
import InstituteAbout from '../components/pages/institute/about';
import InstituteResults from '../components/pages/institute/results';
import ContactIndex from '../components/pages/contact';
import PageNotFound from '../components/errors/404';

export default [
    {
        path: '/',
        exact: true,
        component: Index,
        key: 'index.index'
    },
    {
        path: '/volunturismo',
        exact: true,
        component: VolunturismoIndex,
        key: 'volunturismo.index'
    },
    {
        path: '/ecoturismo',
        exact: true,
        component: EcoturismoIndex,
        key: 'ecoturismo.index'
    },
    {
        path: '/imersoes',
        exact: true,
        component: ImersaoIndex,
        key: 'imersao.index'
    },
    {
        path: '/corporativo',
        exact: true,
        component: CorporativeIndex,
        key: 'corporative.index'
    },
    {
        path: '/sobre',
        exact: true,
        component: AboutIndex,
        key: 'about.index'
    },
    {
        path: '/instituto',
        exact: true,
        component: InstituteIndex,
        key: 'institute.index'
    },
    {
        path: '/instituto/sobre',
        exact: true,
        component: InstituteAbout,
        key: 'institute.about'
    },
    {
        path: '/instituto/resultados',
        exact: true,
        component: InstituteResults,
        key: 'institute.results'
    },
    {
        path: '/contato',
        exact: true,
        component: ContactIndex,
        key: 'contact.index'
    },
    {
        component: PageNotFound,
        key: 'error.404'
    },
]
