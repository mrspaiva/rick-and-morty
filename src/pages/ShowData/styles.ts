import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 4rem;
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  display: flex;
  margin-bottom: 3.5rem;
  margin-top: 4rem;
`;

export const SelectionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
`;

export const SelectionButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 6rem;

  &:focus {
    border-bottom: 2px solid black;
  }
`;

export const SelectionContentText = styled.span`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const CardSection = styled.div`
  display: grid;
  justify-items: center;
  width: 95%;
  grid-template-columns: 1fr 1fr;
`;
