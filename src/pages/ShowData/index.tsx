import { useEffect, useState } from "react";
import InputSearch from "../../components/InputSearch";
import Card from "../../components/Card";
import api from "../../services/api";
import { Container, Title, CardSection } from "./styles";

interface LocationData {
  name: string;
}
interface originData {
  name: string;
}
interface CharacterData {
  id?: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: LocationData;
  origin: originData;
}

const ShowData: React.FC<CharacterData> = () => {
  const [characterList, setCharacterList] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        console.log("true");
        const { data } = await api.get("/character");
        setCharacterList(data.results);
      } catch {
        setIsLoading(false);
        console.log("false");
      }
    }
    fetchData();
  }, []);

  function loading() {
    return <h1>loading</h1>;
  }

  return (
    <Container>
      <Title>Personagens</Title>
      <InputSearch />
      {!isloading ? (
        loading()
      ) : (
        <CardSection>
          {characterList.map((character, key) => (
            <Card key={key} character={character} />
          ))}
        </CardSection>
      )}
    </Container>
  );
};

export default ShowData;
