import React, { useState, useContext } from "react";
import { Platform, KeyboardAvoidingView } from "react-native";
import styled from "styled-components";

// import components
import Text from "../components/Text";

// import contexts
import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext } from "../context/UserContext";

export default SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [_, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const signIn = async () => {
    setLoading(true);

    try {
      await firebase.signIn(email, password);

      const uid = firebase.getCurrentUser().uid;

      const userInfo = firebase.getUserInfo(uid);

      setUser({
        username: userInfo.username,
        email: userInfo.email,
        uid,
        profilePhotoUrl: userInfo.profilePhotoUrl,
        isLoggedIn: true,
      });
    } catch (error) {
      console.log("error @signIn: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled={Platform.OS === "ios"}>
      <Container

      // behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Main>
          <Text title semi center>
            Bem-vindo
          </Text>
        </Main>

        <StatusBar barStyle="light-content" />

        <Auth>
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
              placeholderTextColor="#9a73ef"
              onChangeText={(password) => setPassword(password.trim())}
              value={password}
            />
          </AuthContainer>
        </Auth>

        <SignInContainer disabled={loading} onPress={signIn}>
          {loading ? (
            <Loading />
          ) : (
            <Text bold center color="#ffffff">
              Entrar
            </Text>
          )}
        </SignInContainer>

        <SignUp onPress={() => navigation.navigate("SignUp")}>
          <Text small center>
            Não tem conta?{"  "}
            <Text bold color="#1F4898">
              Cadastro
            </Text>
          </Text>
        </SignUp>
      </Container>
    </KeyboardAvoidingView>
  );
};

const Container = styled.View`
  background: #f1f6f9;
  height: 100%;
`;

const Main = styled.View`
  margin-top: 92px;
`;

const StatusBar = styled.StatusBar``;

const Auth = styled.View`
  margin: 64px 32px 32px;
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

const SignInContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #1f4898;
  border-radius: 6px;
`;

const SignUp = styled.TouchableOpacity`
  margin-top: 16px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#ffffff",
  size: "small",
}))``;
