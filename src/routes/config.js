import Index from '../components/pages/index';
import VolunturismoIndex from '../components/pages/volunturismo';
import CorporativeIndex from '../components/pages/corporative';
import AboutIndex from '../components/pages/about';
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
        path: '/instituto/resultados',
        exact: true,
        component: InstituteResults,
        key: 'institute.results'
    },
    {
        path: '/resultados',
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
