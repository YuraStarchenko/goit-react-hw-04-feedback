import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor';

export const List = styled.ul`
  display: flex;
  margin: 20px 0;
  justify-content: space-evenly;
`;

export const Item = styled.li``;

export const Btn = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
	color: white;
  background-color: ${getRandomHexColor};
`;
