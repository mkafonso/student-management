import React from "react";

// import styles
import { Container } from "./styles";

import avatar from "../../assets/baby_avatar.jpg";

const Header = () => {
  return (
    <Container>
      <div className="header_profile" data-test="component-header">
        <img src={avatar} alt="user avatar" />
        <span>Mr. Baby Boss</span>
      </div>
    </Container>
  );
};

export default Header;
