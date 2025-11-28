import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 16%;
  border-right: 1px solid var(--border);
  background: var(--light);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Menu = styled(NavLink)`
  cursor: pointer;
  padding: 20px 10px;
  border-radius: 10px;
  transition: all 0.3s;
  &.active {
    background: var(--main);
    color: var(--light);
  }
`;

const Siderbar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu to="/">
          <FontAwesomeIcon icon={faHouse} />
          &nbsp;홈
        </Menu>
        <Menu to="/list">
          <FontAwesomeIcon icon={faList} />
          &nbsp;거래 내역
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Siderbar;
