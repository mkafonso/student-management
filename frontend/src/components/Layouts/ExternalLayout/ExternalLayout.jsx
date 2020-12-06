import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import Slider from "react-slick";

// import styles
import { Container, Content } from "./styles";

// import libs
import { routesConfig } from "../../../lib/routes";

// import imgs
import bg2 from "../../../assets/bg2.png";

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // autoplay: true,
  autoplaySpeed: 1000,
};

const ExternalLayout = (props) => {
  const { children, history } = props;
  const state = useSelector((state) => state);

  const {
    user: { currentUser },
  } = state;

  if (currentUser) {
    history.push(routesConfig.root.path);
  }

  if (!children) return;

  return (
    <Container>
      <div className="external-details">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={bg2} alt="bg1" />
          </div>
          <div className="slider-item">
            <img src={bg2} alt="bg2" />
          </div>
        </Slider>
      </div>

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

export default withRouter(ExternalLayout);
