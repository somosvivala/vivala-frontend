import ReactGA from 'react-ga';

const debug = process.env.NODE_ENV === 'development';

const trackPageView = location => {
    ReactGA.set({
        page: location.pathname
    });
    ReactGA.pageview(location.pathname);
};

const initGa = history => {
    ReactGA.initialize('UA-61678141-3', {
        debug
    });
    if (debug) {
        ReactGA.ga('set', 'sendHitTask', null);
    }
    trackPageView(history.location);
    history.listen(trackPageView);
};

export {
    initGa as default,
    trackPageView
};