import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import Siderbar from "./components/common/Siderbar";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

function Root() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Siderbar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
}

export default Root;
