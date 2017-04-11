import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main} />
        </Router>
    </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;