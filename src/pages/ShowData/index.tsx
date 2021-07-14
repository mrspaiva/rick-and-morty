import { useEffect, useState } from "react";
import Spinner from "react-spinkit";
import InputSearch from "../../components/InputSearch";
import Card from "../../components/Card";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import {
  Container,
  CardSection,
  SelectionContent,
  SelectionContentText,
  SelectionButton,
  NavbarContainer,
} from "./styles";

interface LocationData {
  name?: string;
}
interface originData {
  name?: string;
}
interface CharacterData {
  id?: number;
  name?: string;
  image?: string;
  status?: string;
  species?: string;
  location: LocationData;
  origin: originData;
}

const ShowData: React.FC<CharacterData> = (name) => {
  const [characterList, setCharacterList] = useState<CharacterData[]>([]);
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

  function showSearchReturn(names: any) {
    const newSearch: any = characterList.map((list, key) => {
      return list.name === names ? (
        <Card key={key} character={list} />
      ) : (
        // eslint-disable-next-line no-alert
        alert("Nenhum personagem com esse nome")
      );
    });
    setSearchCharacter("");
    setCharacterList(newSearch);
  }

  return (
    <Container>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <InputSearch
        handleChange={() => showSearchReturn}
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
