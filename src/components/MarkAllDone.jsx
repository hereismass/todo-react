import React, { PropTypes } from 'react';
import { allTasksDone } from '../actions';
import { connect } from 'react-redux';

//MarkAllDone, link to mark all tasks done
const MarkAllDone = ({ onClick }) => (
  <a href="#" onClick={onClick}>Mark all as finished</a>
)

//validation of arguments
MarkAllDone.propTypes = {
  onClick: PropTypes.func.isRequired
}

//listener
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(allTasksDone())
    }
  }
}

export default connect(null, mapDispatchToProps)(MarkAllDone);
