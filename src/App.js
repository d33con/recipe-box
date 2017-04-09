import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import Main from './Main';

function mapStateToProps (state) {
    return {
        recipes: state.recipes
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const ReduxConnector = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ReduxConnector;
