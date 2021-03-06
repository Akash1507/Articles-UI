import React from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
