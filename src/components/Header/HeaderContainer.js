import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authorizeMe, signOut} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authorizeMe();
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps,
                      {authorizeMe, signOut})(HeaderContainer)