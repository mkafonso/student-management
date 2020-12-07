import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

// import components
import Text from "../components/Text";

// import context
import { UserContext } from "../context/UserContext";

export default LoadingScreen = () => {
  const [_, setUser] = useContext(UserContext);

  useEffect(() => {
    // setTimeout(async () => {
    //   setUser((state) => ({ ...state, isLoggedIn: false }));
    // }, 1500);
  }, []);

  return (
    <Container>
      <Text title color="#1f4898">
        {/* Base de dados */}
      </Text>

      <LottieView
        source={require("../assets/loadingAnimation2.json")}
        autoPlay
        loop
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e1e2e6;
`;
