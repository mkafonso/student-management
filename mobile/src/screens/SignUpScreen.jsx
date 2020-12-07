import React, { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

// import components
import Text from "../components/Text";

export default SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      return status;
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setProfilePhoto(result.uri);
      }
    } catch (error) {
      console.error("error @pickImage: ", error);
    }
  };

  const addPhotoProfile = async () => {
    const status = await getPermission();

    if (status !== "granted") {
      alert("Preciso de permissão para acessar a tua camera");

      return;
    }

    pickImage();
  };

  return (
    <Container>
      <Main>
        <Text title semi center>
          Cadastro
        </Text>
      </Main>

      <ProfilePhotoContainer onPress={addPhotoProfile}>
        {profilePhoto ? (
          <ProfilePhoto source={{ uri: profilePhoto }} />
        ) : (
          <DefaultProfilePhoto>
            <Icon name="add" size={28} color="#ffffff" />
          </DefaultProfilePhoto>
        )}
      </ProfilePhotoContainer>

      <StatusBar barStyle="light-content" />

      <Auth>
        <AuthContainer>
          <AuthTitle>Nome completo</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            onChangeText={(username) => seUusername(username)}
            value={username}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Meu e-mail</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email.trim())}
            value={email}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Minha senha</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            autoFocus={true}
            secureTextEntry
            returnKeyType="go"
            onChangeText={(password) => setPassword(password.trim())}
            value={password}
          />
        </AuthContainer>
      </Auth>

      <SignUpContainer disabled={loading}>
        {loading ? (
          <Loading />
        ) : (
          <Text bold center color="#ffffff">
            Cadastrar
          </Text>
        )}
      </SignUpContainer>

      <SignIn onPress={() => navigation.navigate("SignIn")}>
        <Text small center>
          Já tem conta?{"  "}
          <Text bold color="#1f4898">
            Entrar
          </Text>
        </Text>
      </SignIn>
    </Container>
  );
};

const Container = styled.View`
  background: #f1f6f9;
  flex: 1;
`;

const Main = styled.View`
  margin-top: 160px;
`;

const StatusBar = styled.StatusBar``;

const ProfilePhotoContainer = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  background: #e1e2e6;
  border-radius: 40px;
  align-self: center;
  margin: 32px 0 8px 0;
  overflow: hidden;
`;

const DefaultProfilePhoto = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ProfilePhoto = styled.Image`
  flex: 1;
`;

const Auth = styled.View`
  margin: 16px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
  color: #1f4898;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #1f4898;
  border-bottom-width: 0.5px;
  height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #1f4898;
  border-radius: 6px;
`;

const SignIn = styled.TouchableOpacity`
  margin-top: 16px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#ffffff",
  size: "small",
}))``;
