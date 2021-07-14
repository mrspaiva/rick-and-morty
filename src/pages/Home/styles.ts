import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  position: relative;
`;

export const Next = styled.div`
  position: absolute;
  right: 3rem;
  bottom: 3rem;
  border-radius: 1.5rem;
  border-style: none;
  background-color: #22f322;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = styled.img`
  display: flex;
  align-self: flex-end;
  width: 20rem;
  position: absolute;
  right: 3rem;
  top: 3rem;
`;
