import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Protected</H1>
    </Container>
  );
}

export default App;

// 그냥 속편하게
// npx create-react-app 내 앱 이름 --template typescript
// npm i --save-dev @types/styled-components
// npm i styled-components
// 하세요~!!
// App, index 내용은 복사하면 되니!!
