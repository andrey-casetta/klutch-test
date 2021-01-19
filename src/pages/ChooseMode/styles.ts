import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-top: 30px;

  width: 100%;
  height: 400px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1218px;

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .wallet {
      width: 115px;
      height: 115px;

      margin: 0px 50px;
    }
  }

  h1 {
    color: #228a95;
    font-size: 56px;
    font-family: 'Flexo Bold';
    width: 285px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-self: center;

    text-align: center;

    margin-top: 73px;

    h1 {
      color: #228a95;
      font-family: 'Flexo Thin';
      font-size: 33px;
      width: 100%;
    }

    h2 {
      color: #777777;
      font-family: 'Flexo Thin';
      font-size: 33px;

      margin: 22px;
    }

    span {
      align-self: flex-end;

      color: #777777;
      font-size: 25px;
      font-family: 'Flexo Regular';
    }

    button {
      width: 390px;
      height: 98px;

      align-self: center;

      margin-top: 38px;

      font-size: 39px;
      font-family: 'Flexo Bold';

      background-color: #228a95;
      border: 0;
      border-radius: 3px;
      color: #fff;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.1, '#228a95')};
      }

      &:nth-child(4) {
        background-color: rgba(34, 138, 149, 0.4);
        margin: 0;
        cursor: default;
      }
    }
  }
`;
