import React from "react";

// import styles
import { Container, Content } from "./styles";

import NotFoundIcon from "../../commons/NotFound";

const NotFound = () => {
  return (
    <Container>
      <NotFoundIcon />

      <Content>
        <h1>404</h1>
        <h2>OH OH! Você se perdeu?</h2>
        <p>
          A página que você está procurando não existe. Como você chegou aqui é
          um mistério. Mas você pode clicar nos itens do menu ao lado para
          navegar pelo site.
        </p>
      </Content>
    </Container>
  );
};

export default NotFound;
