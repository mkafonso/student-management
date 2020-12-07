import React from "react";
import styled from "styled-components";

// import components
import Text from "../components/Text";

export default GradesScreen = () => {
  return (
    <Container>
      <FeedContainer>
        <Text large light center>
          Cadastrar notas
        </Text>
      </FeedContainer>
    </Container>
  );
};

const Container = styled.View`
  background: #f1f6f9;
  align-items: center;
  margin-top: 64px;
  flex: 1;
`;

const FeedContainer = styled.View``;
