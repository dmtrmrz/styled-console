import styled from "styled-components";
import Button from "./components/Button";
import Console from "./components/Console";
import Flex from "./components/Flex";
import Title from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color={"red"}>Console cmd 2022. Goodman Inc.</Title>
      </Flex>
      <Flex direction="column" margin={"10px 0"}>
        <Console />
        <Button color={"red"} align="flex-end">
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
