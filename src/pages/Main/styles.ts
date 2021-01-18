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
  }

  .value {
    margin-top: 68px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    h2 {
      color: #228a95;
      font-size: 40px;
      font-family: 'Flexo Bold';
    }

    div {
      margin-top: 28px;
      display: flex;
      align-items: center;

      input {
        width: 470px;
        height: 61px;

        border: 0;
        border-radius: 2px;

        font-size: 30px;
        font-family: 'Flexo MediumIt';
        background-color: #f8f8f8;
        color: #777777;
        text-align: center;

        padding: 20px;
      }

      button {
        width: 160px;
        height: 53px;

        margin-left: 30px;

        font-size: 22px;
        font-family: 'Flexo Bold';

        background-color: #ef9c4b;
        border: 0;
        border-radius: 3px;
        color: #fff;

        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.1, '#ef9c4b')};
        }
      }
    }
  }

  .wallet {
    width: 115px;
    height: 115px;

    margin: 0px 50px;
  }

  h1 {
    color: #228a95;
    font-size: 56px;
    font-family: 'Flexo Bold';
    width: 285px;
  }
`;
