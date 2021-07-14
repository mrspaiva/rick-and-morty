import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 4rem;
  background-color: rgb(60, 62, 68, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ClickLogo = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 10rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <ClickLogo className="clickLogo">
        <Link to="/">
          <LogoImg src={Logo} alt="logo rick and morty" />
        </Link>
      </ClickLogo>
    </Container>
  );
};

export default Navbar;
