import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppRoute from '../route';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <AppRoute
          {...this.props}
        />
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     place: state.place,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     Object.assign(
//       {},
//       actions
//     ),
//     dispatch
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
