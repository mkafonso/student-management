import React from "react";
import { useSelector } from "react-redux";

// import styles
import { Container } from "./styles";

import avatar from "../../assets/baby_avatar.jpg";

const Header = () => {
  const state = useSelector((state) => state);
  const {
    user: { currentUser },
  } = state;

  return (
    <Container>
      <div className="header_profile" data-test="component-header">
        <img src={avatar} alt="user avatar" />
        <span>Mr. {currentUser.displayName}</span>
      </div>
    </Container>
  );
};

export default Header;
