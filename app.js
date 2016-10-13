import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

const rootRoute = {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            require('./routes/Page1'),
            require('./routes/Page2')
        ]
    } ]
}

render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('app')
);