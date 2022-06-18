import styled from 'styled-components';

export const Task = styled.div`
  display: ${({ remove }) => (remove ? remove : 'flex')};
  justify-content: space-between;
  align-items: center;
  background-color: hsl(235, 24%, 19%);
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 4px;
  width: 30rem;
`;

export const TaskDone = styled.p`
  margin-inline: 0.6rem;
  width: 15rem;
  text-align: center;
  word-wrap: break-word;
  text-decoration: ${({ complet }) => complet};
  opacity: ${({ opacity }) => opacity};
`;
