import { connect } from 'react-redux';
import Main from '../../../screens/home';
import * as actions from '../../../actions';

const mapstateToProps = state => state;

export default connect(mapstateToProps, {...actions})(Main);
