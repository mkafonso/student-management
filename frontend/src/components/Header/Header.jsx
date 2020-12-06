import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

// import styles
import { Container } from "./styles";

// import libs
import { routesConfig } from "../../lib/routes";

import avatar from "../../assets/baby_avatar.jpg";

const Header = (props) => {
  const { history } = props;

  const state = useSelector((state) => state);
  const {
    user: { currentUser },
  } = state;

  return (
    <Container>
      <div
        className="header_profile"
        data-test="component-header"
        onClick={() => history.push(routesConfig.settings.path)}
      >
        <img src={avatar} alt="user avatar" />
        <span>Mr. {currentUser ? currentUser.displayName : ""}</span>
      </div>
    </Container>
  );
};

export default withRouter(Header);
