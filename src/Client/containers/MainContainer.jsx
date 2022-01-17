import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  createEvent: eventInfo => actions.createEventActionCreator(dispatch, eventInfo),
  retrieveAllEvents: () => actions.retrieveAllEventsActionCreator(dispatch),
  retrieveOneEvent: () => actions.retrieveOneEventActionCreator(dispatch)
})

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        retrieveAllEvents();
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);