import React, { PropTypes } from 'react';
import { allTasksDone } from '../actions';
import { connect } from 'react-redux';

//MarkAllDone, link to mark all tasks done
const MarkAllDone = ({ onClick }) => (
  <div className="tasks-alldone">
    <a href="#" onClick={onClick}>Mark all as finished <i className="fa fa-check-circle" aria-hidden="true"></i></a>
  </div>
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
