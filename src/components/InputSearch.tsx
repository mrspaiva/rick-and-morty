import { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Container = styled.form`
  width: 20rem;
  height: 3rem;
  display: flex;
  border-bottom: 1px solid #333;
`;
const Input = styled.input`
  width: 15rem;
  height: 2rem;
  border-radius: 1rem;
  border-style: none;
  margin-left: 1.2rem;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  outline: none;

  display: flex;
  align-self: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 4rem;
  cursor: pointer;
  border: none;
  background-color: #fff;
  border-radius: 0.6rem;
  transition: background 0.3s;
  &:hover {
    background-color: #e4d9d9;
  }
  svg {
    width: 4rem;
    height: 2rem;
  }
`;

interface Props {
  searchCharacter: string;
  setSearchCharacter: any;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleChange: any;
}

const Search: React.FC<Props> = ({
  searchCharacter,
  setSearchCharacter,
  handleChange,
}) => {
  return (
    <Container onSubmit={handleChange}>
      <Input
        type="text"
        placeholder="Digite um personagem"
        value={searchCharacter}
        onChange={(event) => setSearchCharacter(event.target.value)}
      />

      <Button type="submit">
        <FiSearch color="#000" />
      </Button>
    </Container>
  );
};

export default Search;
