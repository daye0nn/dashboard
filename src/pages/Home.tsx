import styled from "styled-components";
import Card from "../components/home/Card";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2% 4%;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Title>OVERVIEW</Title>
      <Card />
    </Container>
  );
};

export default Home;
