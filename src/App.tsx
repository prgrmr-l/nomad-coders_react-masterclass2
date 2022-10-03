import styled from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;

// 그냥 속편하게
// npx create-react-app 내 앱 이름 --template typescript
// npm i --save-dev @types/styled-components
// npm i styled-components
// 하세요~!!
// App, index 내용은 복사하면 되니!!
