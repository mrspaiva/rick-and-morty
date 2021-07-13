import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  display: flex;
  margin-bottom: 4rem;
`;

export const CardSection = styled.div`
  display: grid;
  justify-items: center;
  width: 95%;
  grid-template-columns: 1fr 1fr;
`;
