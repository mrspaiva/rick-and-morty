import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import background from '../../assets/background.jpg'
import { Container, Background, Next } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Background src={background}/>s
      <Next>
        <Link to="/showdata">
          <FiArrowRight color="#000" size={25}/>
        </Link>
      </Next>
    </Container>
  );
}

export default Home;