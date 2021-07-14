import { useState } from "react";
import styled from "styled-components";
import { FiStar } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  width: 37.5rem;
  height: 13.75rem;
  background-color: #3c3e44;
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;
`;

const ImageCharacter = styled.img`
  width: 14rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  margin-right: 1.5rem;
`;

const InfoCharacter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameCharacter = styled.h2`
  color: #fff;
`;

const StatusCharacter = styled.span`
  color: #fff;
`;

const LocationTitle = styled.span`
  color: #9e9e9e;
`;

const LocationName = styled.span`
  color: #f5f5f5;
`;

const FavoriteButton = styled.button`
  display: flex;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  transition: color 0.1s;

  &:hover {
    opacity: 0.6;
  }
`;

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
interface Props {
  character?: CharacterData;
  name?: string;
}

const Card: React.FC<Props> = ({ character, name }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Container>
      <ImageCharacter src={character?.image} />
      <InfoCharacter>
        <InfoSection>
          <NameCharacter>{character?.name}</NameCharacter>
          <StatusCharacter>
            {character?.status} - {character?.species}
          </StatusCharacter>
        </InfoSection>

        <InfoSection>
          <LocationTitle>Último lugar conhecido: </LocationTitle>
          <LocationName>{character?.location.name}</LocationName>
        </InfoSection>

        <InfoSection>
          <LocationTitle>Visto pela primeira vez em: </LocationTitle>
          <LocationName>{character?.origin.name}</LocationName>
        </InfoSection>
      </InfoCharacter>

      <FavoriteButton onClick={handleFavorite}>
        {!isFavorite ? (
          <FiStar size={25} color="#ff0" />
        ) : (
          <FiStar size={25} fill="#ff0" color="#ff0" />
        )}
      </FavoriteButton>
    </Container>
  );
};

export default Card;
