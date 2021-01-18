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
      font-size: 33px;
      font-family: 'Flexo Thin';
    }

    div {
      margin-top: 28px;
      display: flex;
      align-items: center;

      input {
        width: 313px;
        height: 61px;

        border: 0;
        border-radius: 2px;

        font-size: 30px;
        font-family: 'Flexo MediumIt';
        background-color: #f8f8f8;
        color: #777777;
        text-align: left;

        padding: 20px 20px 20px 31px;
      }

      button {
        width: 160px;
        height: 61px;

        font-size: 22px;
        font-family: 'Flexo Bold';

        background-color: #228a95;
        border: 0;
        border-radius: 4px;
        color: #fff;

        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.1, '#228a95')};
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

  .value .client {
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    flex-direction: column;

    width: 473px;
    height: 355px;

    background-color: #f8f8f8;

    text-align: center;

    h1 {
      font-size: 33px;
      color: #777777;
      font-family: 'Flexo Thin';
      width: 100%;
      margin-top: 22px;
    }

    h2 {
      color: #ef9c4b;
      margin-top: 18px;
    }

    strong {
      color: #228a95;
      font-size: 33px;
      margin-top: 18px;
    }

    button {
      width: 390px;
      height: 98px;

      font-size: 39px;

      margin-top: 30px;
    }
  }
`;
