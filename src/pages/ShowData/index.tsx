import React, { useEffect } from 'react';
import InputSearch from '../../components/InputSearch'
import Card from '../../components/Card'
import api from '../../services/api'
import { Container, Title, CardSection } from './styles';

const ShowData: React.FC = () => {
  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/character')
      console.log(data.results[0])
    }

    fetchData()
  },[])

  return (
    <Container>
      <Title>Personagens</Title>
      <InputSearch />
      <CardSection>
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </CardSection>
    </Container>
  )
}

export default ShowData;