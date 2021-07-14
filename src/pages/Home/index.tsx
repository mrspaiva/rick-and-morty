import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import background from "../../assets/background.jpg";
import LogoImage from "../../assets/logo.svg";
import { Container, Background, Next, Logo } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Background src={background} />
      <Logo src={LogoImage} />
      <Link to="/showdata">
        <Next>
          <FiArrowRight color="#000" size={25} />
        </Next>
      </Link>
    </Container>
  );
};

export default Home;
