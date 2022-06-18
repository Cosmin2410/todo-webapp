import styled from 'styled-components';

export const Buttons = styled.button`
  height: 2.2rem;
  width: 7rem;
  border: none;
  background-color: hsl(220, 98%, 61%);
  color: white;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 300ms ease;

  &:hover {
    background-color: hsl(235, 21%, 11%);
  }
`;
