import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

// import components
import Text from "../components/Text";

// import context
import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

export default LoadingScreen = () => {
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();

      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);

        setUser({
          isLoggedIn: true,
          email: userInfo.email,
          username: userInfo.username,
          profilePhotoUrl: userInfo.profilePhotoUrl,
          uid: user.uid,
        });
      } else {
        setUser((state) => ({ ...state, isLoggedIn: false }));
      }
    }, 500);
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
