import React, { useContext } from "react";
import styled from "styled-components";

// import components
import Text from "../components/Text";

// import context
import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

export default ProfileScreen = () => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logout = async () => {
    const loggedOut = await firebase.logout();

    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };

  return (
    <Container>
      <ProfilePhotoContainer>
        <ProfilePhoto
          source={
            user.profilePhotoUrl === "default"
              ? require("../../assets/default.png")
              : { uri: user.profilePhotoUrl }
          }
        />
      </ProfilePhotoContainer>
      <Text large bold margin="16px 0 32px 0">
        {user.username}
      </Text>

      <StatsContainer>
        <StatContainer>
          <Text large light>
            10
          </Text>
          <Text small bold color="#4d4d4d">
            Publicações
          </Text>
        </StatContainer>

        <StatContainer>
          <Text large light>
            100
          </Text>
          <Text small bold color="#4d4d4d">
            Seguidores
          </Text>
        </StatContainer>

        <StatContainer>
          <Text large light>
            120
          </Text>
          <Text small bold color="#4d4d4d">
            Seguindo
          </Text>
        </StatContainer>
      </StatsContainer>

      <Logout onPress={logout}>
        <Text medium bold color="#f9826c">
          Sair
        </Text>
      </Logout>
    </Container>
  );
};

const Container = styled.View`
  background: #f1f6f9;
  align-items: center;
  margin-top: 64px;
  flex: 1;
`;

const ProfilePhotoContainer = styled.View`
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  shadow-color: #4d4d4d;
`;

const ProfilePhoto = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 32px;
  flex: 1;
`;

const StatContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const Logout = styled.TouchableOpacity`
  margin-bottom: 32px;
`;
