import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 86.42px;

  background-color: #228a95;
  color: #fff;

  padding: 0 400px;

  h1 {
    font-size: 22px;
  }

  button {
    width: 160px;
    height: 53px;

    font-size: 22px;
    font-family: 'Flexo Bold';

    background-color: #ef9c4b;
    color: #fff;

    border: 0;
    border-radius: 3px;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.1, '#ef9c4b')};
    }
  }
`;
