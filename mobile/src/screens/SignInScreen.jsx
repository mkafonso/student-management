import React, { useState } from "react";
import styled from "styled-components";

// import components
import Text from "../components/Text";

export default SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Container>
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

      <SignInContainer disabled={loading}>
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
  );
};

const Container = styled.View`
  background: #f1f6f9;
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
`;

const Main = styled.View`
  margin-top: 192px;
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
