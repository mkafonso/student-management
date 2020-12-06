import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

// import styles
import { Container, Content } from "./styles";

// import components
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";

// import libs
import { routesConfig } from "../../../lib/routes";

const DefaultLayout = (props) => {
  const { children, history } = props;
  const state = useSelector((state) => state);

  const {
    user: { currentUser },
  } = state;

  if (!currentUser) {
    history.push(routesConfig.signIn.path);
  }

  if (!children) return;

  return (
    <Container data-test="defaultLayout">
      <Header />
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  );
};

DefaultLayout.defaultProps = {
  children: null,
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default withRouter(DefaultLayout);
