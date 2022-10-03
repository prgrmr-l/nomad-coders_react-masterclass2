import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;

// 그냥 속편하게
// npx create-react-app 내 앱 이름 --template typescript
// npm i --save-dev @types/styled-components
// npm i styled-components
// 하세요~!!
// App, index 내용은 복사하면 되니!!
