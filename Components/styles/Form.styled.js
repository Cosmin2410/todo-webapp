import styled from 'styled-components';

export const FormStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    all: unset;
    background-color: hsl(235, 24%, 19%);
    height: 2.5rem;
    border-radius: 3px;
    padding: 0px 5px;
    width: 18rem;
  }

  button {
    height: 2.5rem;
    width: 10rem;
    border: none;
    background-color: hsl(235, 24%, 19%);
    color: white;
    border-radius: 3px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 300ms ease;
    margin-bottom: 3rem;
    margin-top: 1rem;

    &:hover {
      background-color: hsl(220, 98%, 61%);
    }
  }
`;
