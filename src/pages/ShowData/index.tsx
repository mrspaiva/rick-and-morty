import { useEffect, useState } from "react";
import Spinner from "react-spinkit";
import InputSearch from "../../components/InputSearch";
import Card from "../../components/Card";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import {
  Container,
  Title,
  CardSection,
  SelectionContent,
  SelectionContentText,
  SelectionButton,
  NavbarContainer,
} from "./styles";

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
  const [searchCharacter, setSearchCharacter] = useState("");

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        try {
          setIsLoading(true);
          const { data } = await api.get("/character");
          setCharacterList(data.results);
        } catch {
          setIsLoading(false);
        }
      }
      fetchData();
    }, 2000);
  }, []);

  function loading() {
    return <Spinner name="ball-triangle-path" fadeIn="none" color="#000" />;
  }

  return (
    <Container>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <Title>Personagens</Title>
      <InputSearch
        searchCharacter={searchCharacter}
        setSearchCharacter={setSearchCharacter}
      />
      <SelectionContent>
        <SelectionButton>
          <SelectionContentText>Todos</SelectionContentText>
        </SelectionButton>
        <SelectionButton>
          <SelectionContentText>Favoritos</SelectionContentText>
        </SelectionButton>
      </SelectionContent>
      {!isloading ? (
        loading()
      ) : (
        <CardSection>
          {searchCharacter ||
            characterList.map((character, key) => (
              <Card key={key} character={character} />
            ))}
        </CardSection>
      )}
    </Container>
  );
};

export default ShowData;
