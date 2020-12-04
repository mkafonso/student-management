import React from "react";
import PropTypes from "prop-types";

// import styles
import { Container, Content } from "./styles";

const ExternalLayout = (props) => {
  const { children } = props;

  return (
    <Container>
      <div className="external-details"></div>

      <Content>{children}</Content>
    </Container>
  );
};

ExternalLayout.defaultProps = {
  children: null,
};

ExternalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default ExternalLayout;
